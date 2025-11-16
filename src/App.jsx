import React, { useState, useEffect } from 'react';
import ExperimentSelector from './components/ExperimentSelector';
import PuzzleGame from './components/PuzzleGame';
import ARViewer from './components/ARViewer';
import ARScanner from './components/ARScanner';
import './styles/App.css';

const EXPERIMENTS = {
  convexLens: {
    name: 'Light Through Convex Lens',
    image: '/images/convex-lens.jpg',
    video: '/videos/convex-lens.mp4',
    description: 'Explore how light rays converge through a convex lens',
    type: 'physics',
    concepts: ['Refraction', 'Focal Point', 'Ray Diagrams', 'Image Formation']
  },
  reflection: {
    name: 'Light Reflection',
    image: '/images/reflection.jpg',
    video: '/videos/reflection.mp4',
    description: 'Understand the laws of reflection with mirrors',
    type: 'physics',
    concepts: ['Angle of Incidence', 'Angle of Reflection', 'Mirror Images']
  },
  prism: {
    name: 'Light Dispersion Through Prism',
    image: '/images/prism.jpg',
    video: '/videos/prism.mp4',
    description: 'See how white light splits into rainbow colors',
    type: 'physics',
    concepts: ['Dispersion', 'Spectrum', 'Wavelength', 'Color Theory']
  }
};

function App() {
  const [currentStep, setCurrentStep] = useState('select');
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
        <h1>🔬 Physics AR Puzzle</h1>
        <p className="app-subtitle">Learn Optics Through Interactive Puzzles</p>
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

      <footer className="app-footer">
        <ARScanner />
      </footer>
    </div>
  );
}

export default App;