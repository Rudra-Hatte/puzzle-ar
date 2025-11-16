import React from 'react';

function ExperimentSelector({ experiments, onSelect }) {
  return (
    <div className="experiment-selector">
      <h2>Choose Your Physics Experiment</h2>
      <p className="selector-description">
        Solve the puzzle first, then watch amazing light experiments in AR!
      </p>
      <div className="experiments-grid">
        {Object.entries(experiments).map(([key, experiment]) => (
          <div 
            key={key} 
            className="experiment-card"
            onClick={() => onSelect(key)}
          >
            <div className="experiment-image">
              <img src={experiment.image} alt={experiment.name} />
              <div className="experiment-overlay">
                <span className="experiment-type">{experiment.type}</span>
              </div>
            </div>
            <div className="experiment-info">
              <h3>{experiment.name}</h3>
              <p>{experiment.description}</p>
              
              <div className="concepts-list">
                <h4>Learn About:</h4>
                <div className="concept-tags">
                  {experiment.concepts.map((concept, index) => (
                    <span key={index} className="concept-tag">
                      {concept}
                    </span>
                  ))}
                </div>
              </div>
              
              <button className="start-btn">
                🧩 Start Puzzle & AR Experience
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperimentSelector;