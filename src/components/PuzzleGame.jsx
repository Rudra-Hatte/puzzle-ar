import React, { useState, useEffect } from 'react';
import { generatePuzzlePieces, shuffleArray } from '../utils/puzzleGenerator';

function PuzzleGame({ experiment, onComplete }) {
  const [pieces, setPieces] = useState([]);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [moves, setMoves] = useState(0);
  const [timer, setTimer] = useState(0);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const puzzlePieces = generatePuzzlePieces(experiment.image, 3, 3);
    setPieces(shuffleArray(puzzlePieces));
    
    // Start timer
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    
    return () => clearInterval(interval);
  }, [experiment]);

  const handleDragStart = (e, index) => {
    setDraggedPiece(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    
    if (draggedPiece === null || draggedPiece === dropIndex) return;

    const newPieces = [...pieces];
    [newPieces[draggedPiece], newPieces[dropIndex]] = 
    [newPieces[dropIndex], newPieces[draggedPiece]];
    
    setPieces(newPieces);
    setMoves(moves + 1);
    
    const solved = checkPuzzleSolved(newPieces);
    if (solved) {
      setIsCompleted(true);
      setTimeout(() => {
        onComplete();
      }, 1500);
    }
    
    setDraggedPiece(null);
  };

  const checkPuzzleSolved = (currentPieces) => {
    return currentPieces.every((piece, index) => piece.correctIndex === index);
  };

  const handleTouchStart = (e, index) => {
    setDraggedPiece(index);
  };

  const handleTouchEnd = (e, dropIndex) => {
    if (draggedPiece !== null && draggedPiece !== dropIndex) {
      handleDrop(e, dropIndex);
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <div className="puzzle-game">
      <div className="puzzle-header">
        <h2>Complete the {experiment.name} Puzzle</h2>
        <div className="experiment-concepts">
          <p>🔍 You'll learn about: {experiment.concepts.join(' • ')}</p>
        </div>
        <div className="puzzle-stats">
          <div className="stat-item">
            <span className="stat-label">⏱️ Time:</span>
            <span className="stat-value">{formatTime(timer)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">🔄 Moves:</span>
            <span className="stat-value">{moves}</span>
          </div>
          {isCompleted && (
            <span className="completion-message">
              🎉 Puzzle Complete! Loading AR Physics...
            </span>
          )}
        </div>
      </div>

      <div className="puzzle-container">
        <div className="puzzle-grid">
          {pieces.map((piece, index) => (
            <div
              key={piece.id}
              className={`puzzle-piece ${draggedPiece === index ? 'dragging' : ''}`}
              draggable="true"
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              onTouchStart={(e) => handleTouchStart(e, index)}
              onTouchEnd={(e) => handleTouchEnd(e, index)}
              style={{
                backgroundImage: `url(${piece.image})`,
                backgroundPosition: piece.backgroundPosition,
                backgroundSize: '300%',
              }}
            />
          ))}
        </div>
        
        <div className="puzzle-controls">
          <button 
            className="hint-btn" 
            onClick={toggleHint}
            disabled={isCompleted}
          >
            💡 {showHint ? 'Hide' : 'Show'} Reference
          </button>
        </div>
      </div>

      {showHint && (
        <div className="puzzle-reference">
          <h4>Reference Image:</h4>
          <img src={experiment.image} alt="Reference" className="reference-image" />
          <div className="experiment-explanation">
            <h5>What you'll see in AR:</h5>
            <p>{experiment.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PuzzleGame;