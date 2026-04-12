const express = require('express');
const mongoose = require('mongoose');

const Puzzle = require('../models/Puzzle');

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
    const markerId = String(req.query.markerId || '').trim();
    const puzzleId = String(req.query.puzzleId || '').trim();

    if (!markerId && !puzzleId) {
      res.status(400).json({ message: 'Provide markerId or puzzleId' });
      return;
    }

    const conditions = [];

    if (markerId) {
      conditions.push({ markerId });
    }

    if (puzzleId && mongoose.Types.ObjectId.isValid(puzzleId)) {
      conditions.push({ _id: puzzleId });
    }

    const puzzle = await Puzzle.findOne({
      isActive: true,
      $or: conditions,
    });

    if (!puzzle) {
      res.status(404).json({ message: 'No active puzzle matched the request' });
      return;
    }

    res.json({ puzzle: mapPuzzle(puzzle) });
  } catch (error) {
    console.error('Failed to resolve puzzle:', error);
    res.status(500).json({ message: 'Failed to resolve puzzle' });
  }
});

module.exports = router;
