import React from 'react';

function ExperimentSelector({ experiments, onSelect }) {
  return (
    <div className="experiment-selector">
      <h2>Choose Your Chemistry Experiment</h2>
      <div className="experiments-grid">
        {Object.entries(experiments).map(([key, experiment]) => (
          <div 
            key={key} 
            className="experiment-card"
            onClick={() => onSelect(key)}
          >
            <div className="experiment-image">
              <img src={experiment.image} alt={experiment.name} />
            </div>
            <div className="experiment-info">
              <h3>{experiment.name}</h3>
              <p>{experiment.description}</p>
              <button className="start-btn">Start Puzzle 🧩</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperimentSelector;