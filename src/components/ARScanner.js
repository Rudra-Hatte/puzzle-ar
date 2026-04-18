import React, { useState } from 'react';

const PUZZLE = {
  name: 'Convex Lens',
  posterUrl: '/images/convex-lens.jpeg',
  videoUrl: '/videos/convex-lens.mp4',
};

export default function ARScanner() {
  const [demoActive, setDemoActive] = useState(false);

  return (
    <section className="scanner-page">
      <div className="scanner-panel card">

        <header className="scanner-header">
          <div>
            <h1>Puzzle AR Scanner</h1>
            <p>
              Scan the <strong>{PUZZLE.name}</strong> puzzle image with your
              camera to see the lesson video appear in augmented reality.
            </p>
            <p className="hint-text">
              Works best on mobile — Chrome (Android) or Safari (iOS). Camera + HTTPS required.
            </p>
          </div>

          <div className="scanner-toolbar">
            <a
              id="btn-launch"
              href="/scanner.html"
              className="btn btn-primary"
              style={{ textAlign: 'center', textDecoration: 'none', display: 'block' }}
            >
              🚀 Launch AR Scanner
            </a>

            <button
              id="btn-demo"
              type="button"
              className="btn btn-secondary"
              onClick={() => setDemoActive(true)}
            >
              ▶ Play Demo Video
            </button>
          </div>
        </header>

        <p className="status-detail">
          Tap <strong>Launch AR Scanner</strong> to open the camera scanner in full screen.
        </p>

        {/* ── Stage area ── */}
        <div className="stage-wrap">
          {!demoActive ? (
            <div className="stage-loading">
              <div className="idle-icon">📷</div>
              <h3>Ready to Scan</h3>
              <p>The AR scanner opens as a full-page experience for best results.</p>
              <img
                src={PUZZLE.posterUrl}
                alt="Puzzle target"
                style={{
                  marginTop: '1rem',
                  width: 'min(260px, 70%)',
                  borderRadius: '12px',
                  border: '2px solid rgba(86, 242, 195, 0.5)',
                  boxShadow: '0 0 20px rgba(86, 242, 195, 0.2)',
                }}
              />
              <p className="hint-text" style={{ marginTop: '0.6rem' }}>
                ↑ This is the puzzle image to scan
              </p>
            </div>
          ) : (
            <div className="demo-overlay" style={{ position: 'absolute', inset: 0, zIndex: 12, background: '#000' }}>
              <video
                className="demo-video"
                src={PUZZLE.videoUrl}
                autoPlay
                muted
                loop
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              />
              <div className="overlay-badge">
                <span>Demo Mode</span>
                <small>No puzzle scan needed</small>
              </div>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => setDemoActive(false)}
                style={{ position: 'absolute', top: 12, right: 12, zIndex: 15 }}
              >
                ✕ Close
              </button>
            </div>
          )}
        </div>

        {/* ── Puzzle info ── */}
        <div className="puzzle-meta card" style={{ marginTop: '0.85rem' }}>
          <h3>📚 {PUZZLE.name} Puzzle</h3>
          <p>Print the puzzle image above and scan it with the AR scanner to see the lesson video overlay.</p>
          <div className="meta-grid" style={{ marginTop: '0.65rem' }}>
            <div><strong>Engine</strong><span>MindAR</span></div>
            <div><strong>Tracking</strong><span>Image Target</span></div>
            <div><strong>Video</strong><span>MP4</span></div>
            <div><strong>Mode</strong><span>Prototype</span></div>
          </div>
        </div>

      </div>
    </section>
  );
}
