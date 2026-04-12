const mongoose = require('mongoose');

const playbackSourceSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      enum: ['mp4', 'hls', 'youtube', 'other'],
      required: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    priority: {
      type: Number,
      default: 100,
    },
  },
  {
    _id: false,
  }
);

const puzzleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      default: '',
      trim: true,
    },
    markerId: {
      type: String,
      trim: true,
      index: true,
    },
    markerAssetUrl: {
      type: String,
      trim: true,
    },
    puzzleImageUrl: {
      type: String,
      trim: true,
    },
    scanCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
      trim: true,
    },
    isActive: {
      type: Boolean,
      default: true,
      index: true,
    },
    playbackSources: {
      type: [playbackSourceSchema],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

puzzleSchema.methods.toPublicJSON = function toPublicJSON() {
  return {
    id: this._id,
    name: this.name,
    description: this.description,
    markerId: this.markerId,
    markerAssetUrl: this.markerAssetUrl,
    puzzleImageUrl: this.puzzleImageUrl,
    scanCode: this.scanCode,
    isActive: this.isActive,
    playbackSources: this.playbackSources,
    tags: this.tags,
    createdAt: this.createdAt,
    updatedAt: this.updatedAt,
  };
};

module.exports = mongoose.model('Puzzle', puzzleSchema);
