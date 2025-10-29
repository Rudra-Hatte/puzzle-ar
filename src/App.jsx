import React, { useState, useEffect } from 'react';
import ExperimentSelector from './components/ExperimentSelector';
import PuzzleGame from './components/PuzzleGame';
import ARViewer from './components/ARViewer';

const EXPERIMENTS = {
  distillation: {
    name: 'Distillation',
    image: '/images/distillation.jpg',
    video: '/videos/distillation.mp4',
    description: 'Learn about separating mixtures through distillation'
  },
  titration: {
    name: 'Titration',
    image: '/images/titration.jpg',
    video: '/videos/titration.mp4',
    description: 'Master acid-base titration techniques'
  },
  crystallization: {
    name: 'Crystallization',
    image: '/images/crystallization.jpg',
    video: '/videos/crystallization.mp4',
    description: 'Understand crystal formation processes'
  }
};

function App() {
  const [currentStep, setCurrentStep] = useState('select'); // select, puzzle, ar
  const [selectedExperiment, setSelectedExperiment] = useState(null);
  const [puzzleCompleted, setPuzzleCompleted] = useState(false);

  const handleExperimentSelect = (experimentKey) => {
    setSelectedExperiment(experimentKey);
    setCurrentStep('puzzle');
  };

  const handlePuzzleComplete = () => {
    setPuzzleCompleted(true);
    setTimeout(() => {
      setCurrentStep('ar');
    }, 2000);
  };

  const handleReset = () => {
    setCurrentStep('select');
    setSelectedExperiment(null);
    setPuzzleCompleted(false);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🧩 AR Chemistry Puzzle</h1>
        {currentStep !== 'select' && (
          <button className="reset-btn" onClick={handleReset}>
            🏠 Back to Menu
          </button>
        )}
      </header>

      <main className="app-main">
        {currentStep === 'select' && (
          <ExperimentSelector 
            experiments={EXPERIMENTS}
            onSelect={handleExperimentSelect}
          />
        )}

        {currentStep === 'puzzle' && selectedExperiment && (
          <PuzzleGame 
            experiment={EXPERIMENTS[selectedExperiment]}
            onComplete={handlePuzzleComplete}
          />
        )}

        {currentStep === 'ar' && selectedExperiment && (
          <ARViewer 
            experiment={EXPERIMENTS[selectedExperiment]}
            onReset={handleReset}
          />
        )}
      </main>
    </div>
  );
}

export default App;