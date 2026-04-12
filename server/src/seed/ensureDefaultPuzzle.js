const Puzzle = require('../models/Puzzle');

function parseBooleanFlag(value, defaultValue = true) {
  if (value === undefined) {
    return defaultValue;
  }

  return String(value).toLowerCase() !== 'false';
}

async function dropLegacyScanCodeIndexIfPresent() {
  const indexes = await Puzzle.collection.indexes();
  const legacyIndex = indexes.find(
    (index) => index.name === 'scanCode_1' || (index.key && index.key.scanCode === 1)
  );

  if (!legacyIndex) {
    return;
  }

  await Puzzle.collection.dropIndex(legacyIndex.name);
  console.log(`Dropped legacy index: ${legacyIndex.name}`);
}

async function ensureDefaultPuzzle() {
  await dropLegacyScanCodeIndexIfPresent();

  if (!parseBooleanFlag(process.env.SEED_DEFAULT_PUZZLE, true)) {
    return;
  }

  const name = process.env.SEED_DEFAULT_PUZZLE_NAME || 'Convex Lens AR Demo';
  const markerId = process.env.SEED_DEFAULT_PUZZLE_MARKER_ID || 'convex-lens-001';
  const puzzleImageUrl = process.env.SEED_DEFAULT_PUZZLE_IMAGE_URL || '/images/convex-lens.jpeg';
  const directVideoUrl = process.env.SEED_DEFAULT_PUZZLE_VIDEO_URL || '/videos/convex-lens.mp4';
  const youtubeUrl =
    process.env.SEED_DEFAULT_PUZZLE_YOUTUBE_URL || 'https://www.youtube.com/watch?v=aqz-KE-bpKQ';

  const existingPuzzle = await Puzzle.findOne({
    $or: [{ markerId }, { name }],
  });

  if (existingPuzzle) {
    return;
  }

  const playbackSources = [];

  if (String(directVideoUrl).trim()) {
    playbackSources.push({ type: 'mp4', url: String(directVideoUrl).trim(), priority: 10 });
  }

  if (String(youtubeUrl).trim()) {
    playbackSources.push({ type: 'youtube', url: String(youtubeUrl).trim(), priority: 60 });
  }

  await Puzzle.create({
    name,
    description:
      process.env.SEED_DEFAULT_PUZZLE_DESCRIPTION ||
      'Sample convex lens puzzle with puzzle-image tracking and AR video overlay.',
    markerId,
    markerAssetUrl: process.env.SEED_DEFAULT_PUZZLE_MARKER_ASSET_URL || '',
    puzzleImageUrl: String(puzzleImageUrl).trim(),
    isActive: true,
    playbackSources,
    tags: ['sample', 'optics'],
  });

  console.log(`Seeded default puzzle: ${name}`);
}

module.exports = ensureDefaultPuzzle;
