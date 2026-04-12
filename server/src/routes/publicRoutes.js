const express = require('express');
const mongoose = require('mongoose');
const QRCode = require('qrcode');

const Puzzle = require('../models/Puzzle');
const { normalizeScanPayload } = require('../utils/scanCode');

const router = express.Router();

function mapPuzzle(puzzle) {
  return typeof puzzle.toPublicJSON === 'function' ? puzzle.toPublicJSON() : puzzle;
}

router.get('/puzzles/active', async (req, res) => {
  try {
    const puzzles = await Puzzle.find({ isActive: true }).sort({ createdAt: -1 });
    res.json({ puzzles: puzzles.map(mapPuzzle) });
  } catch (error) {
    console.error('Failed to fetch active puzzles:', error);
    res.status(500).json({ message: 'Failed to fetch active puzzles' });
  }
});

router.get('/puzzles/resolve', async (req, res) => {
  try {
    const normalized = normalizeScanPayload(req.query.code);

    if (!normalized) {
      res.status(400).json({ message: 'Missing scan code' });
      return;
    }

    const conditions = [{ scanCode: normalized }, { markerId: normalized }];

    if (mongoose.Types.ObjectId.isValid(normalized)) {
      conditions.push({ _id: normalized });
    }

    const puzzle = await Puzzle.findOne({
      isActive: true,
      $or: conditions,
    });

    if (!puzzle) {
      res.status(404).json({ message: 'No active puzzle matched this code' });
      return;
    }

    res.json({ puzzle: mapPuzzle(puzzle) });
  } catch (error) {
    console.error('Failed to resolve puzzle:', error);
    res.status(500).json({ message: 'Failed to resolve puzzle' });
  }
});

router.get('/qr/:scanCode', async (req, res) => {
  try {
    const normalized = normalizeScanPayload(req.params.scanCode);

    if (!normalized) {
      res.status(400).json({ message: 'Invalid scan code' });
      return;
    }

    const qrPayload = `puzzle:${normalized}`;
    const qrDataUrl = await QRCode.toDataURL(qrPayload, {
      width: 320,
      margin: 1,
      errorCorrectionLevel: 'M',
    });

    res.json({
      scanCode: normalized,
      qrPayload,
      qrDataUrl,
    });
  } catch (error) {
    console.error('Failed to generate QR:', error);
    res.status(500).json({ message: 'Failed to generate QR' });
  }
});

module.exports = router;
