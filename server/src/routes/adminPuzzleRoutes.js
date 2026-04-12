const fs = require('fs');
const path = require('path');
const express = require('express');
const multer = require('multer');

const Puzzle = require('../models/Puzzle');
const requireAdmin = require('../middleware/requireAdmin');

const router = express.Router();

const uploadDirectory = path.resolve(__dirname, '..', '..', 'uploads');
fs.mkdirSync(uploadDirectory, { recursive: true });

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename(req, file, cb) {
    const safeName = file.originalname.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9._-]/g, '');
    cb(null, `${Date.now()}-${safeName}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 80 * 1024 * 1024,
  },
});

function inferSourceType(url = '') {
  const lower = String(url).toLowerCase();

  if (lower.includes('youtube.com') || lower.includes('youtu.be')) {
    return 'youtube';
  }

  if (lower.includes('.m3u8')) {
    return 'hls';
  }

  if (lower.includes('.mp4') || lower.includes('.webm')) {
    return 'mp4';
  }

  return 'other';
}

function normalizePlaybackSources(payload) {
  let sources = [];

  if (Array.isArray(payload.playbackSources)) {
    sources = payload.playbackSources;
  } else if (typeof payload.playbackSources === 'string' && payload.playbackSources.trim()) {
    try {
      const parsed = JSON.parse(payload.playbackSources);
      if (Array.isArray(parsed)) {
        sources = parsed;
      }
    } catch (error) {
      // Ignore malformed JSON and continue with explicit URL fields.
    }
  }

  if (payload.videoUrl) {
    sources.push({ type: 'mp4', url: payload.videoUrl, priority: 10 });
  }

  if (payload.youtubeUrl) {
    sources.push({ type: 'youtube', url: payload.youtubeUrl, priority: 60 });
  }

  const deduped = new Map();

  sources.forEach((source) => {
    if (!source || !source.url) {
      return;
    }

    const normalizedUrl = String(source.url).trim();

    if (!normalizedUrl) {
      return;
    }

    deduped.set(normalizedUrl, {
      type: source.type || inferSourceType(normalizedUrl),
      url: normalizedUrl,
      priority: Number.isFinite(Number(source.priority)) ? Number(source.priority) : 100,
    });
  });

  return Array.from(deduped.values()).sort((left, right) => left.priority - right.priority);
}

function mapPuzzle(puzzle) {
  return typeof puzzle.toPublicJSON === 'function' ? puzzle.toPublicJSON() : puzzle;
}

router.use(requireAdmin);

router.get('/', async (req, res) => {
  try {
    const puzzles = await Puzzle.find({}).sort({ updatedAt: -1 });
    res.json({ puzzles: puzzles.map(mapPuzzle) });
  } catch (error) {
    console.error('Failed to list puzzles:', error);
    res.status(500).json({ message: 'Failed to list puzzles' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);

    if (!puzzle) {
      res.status(404).json({ message: 'Puzzle not found' });
      return;
    }

    res.json({ puzzle: mapPuzzle(puzzle) });
  } catch (error) {
    console.error('Failed to fetch puzzle:', error);
    res.status(500).json({ message: 'Failed to fetch puzzle' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { name, description, markerId, markerAssetUrl, puzzleImageUrl, isActive, tags } = req.body;

    if (!name || !String(name).trim()) {
      res.status(400).json({ message: 'Puzzle name is required' });
      return;
    }

    if (!puzzleImageUrl || !String(puzzleImageUrl).trim()) {
      res.status(400).json({ message: 'Puzzle image URL is required for AR tracking' });
      return;
    }

    const puzzle = await Puzzle.create({
      name: String(name).trim(),
      description: description || '',
      markerId: markerId || '',
      markerAssetUrl: markerAssetUrl || '',
      puzzleImageUrl: puzzleImageUrl || '',
      isActive: isActive !== false && isActive !== 'false',
      playbackSources: normalizePlaybackSources(req.body),
      tags: Array.isArray(tags)
        ? tags
        : typeof tags === 'string' && tags.trim()
        ? tags
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [],
    });

    res.status(201).json({ puzzle: mapPuzzle(puzzle) });
  } catch (error) {
    console.error('Failed to create puzzle:', error);
    res.status(500).json({ message: 'Failed to create puzzle' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const puzzle = await Puzzle.findById(req.params.id);

    if (!puzzle) {
      res.status(404).json({ message: 'Puzzle not found' });
      return;
    }

    if (req.body.name && String(req.body.name).trim()) {
      puzzle.name = String(req.body.name).trim();
    }

    if (req.body.description !== undefined) {
      puzzle.description = req.body.description || '';
    }

    if (req.body.markerId !== undefined) {
      puzzle.markerId = req.body.markerId || '';
    }

    if (req.body.markerAssetUrl !== undefined) {
      puzzle.markerAssetUrl = req.body.markerAssetUrl || '';
    }

    if (req.body.puzzleImageUrl !== undefined) {
      puzzle.puzzleImageUrl = req.body.puzzleImageUrl || '';
    }

    if (!String(puzzle.puzzleImageUrl || '').trim()) {
      res.status(400).json({ message: 'Puzzle image URL is required for AR tracking' });
      return;
    }

    if (req.body.isActive !== undefined) {
      puzzle.isActive = req.body.isActive !== false && req.body.isActive !== 'false';
    }

    const sources = normalizePlaybackSources(req.body);
    if (sources.length > 0) {
      puzzle.playbackSources = sources;
    }

    if (req.body.tags !== undefined) {
      puzzle.tags = Array.isArray(req.body.tags)
        ? req.body.tags
        : typeof req.body.tags === 'string' && req.body.tags.trim()
        ? req.body.tags
            .split(',')
            .map((tag) => tag.trim())
            .filter(Boolean)
        : [];
    }

    await puzzle.save();

    res.json({ puzzle: mapPuzzle(puzzle) });
  } catch (error) {
    console.error('Failed to update puzzle:', error);
    res.status(500).json({ message: 'Failed to update puzzle' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Puzzle.findByIdAndDelete(req.params.id);

    if (!deleted) {
      res.status(404).json({ message: 'Puzzle not found' });
      return;
    }

    res.json({ message: 'Puzzle deleted' });
  } catch (error) {
    console.error('Failed to delete puzzle:', error);
    res.status(500).json({ message: 'Failed to delete puzzle' });
  }
});

router.post('/upload', upload.single('file'), async (req, res) => {
  try {
    if (!req.file) {
      res.status(400).json({ message: 'File is required' });
      return;
    }

    const baseUrl = `${req.protocol}://${req.get('host')}`;
    const url = `${baseUrl}/uploads/${req.file.filename}`;

    res.status(201).json({
      url,
      filename: req.file.filename,
      kind: req.body.kind || 'asset',
    });
  } catch (error) {
    console.error('Failed to upload file:', error);
    res.status(500).json({ message: 'Failed to upload file' });
  }
});

module.exports = router;
