import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ARScanner from './components/ARScanner';
import { isAuthenticated, logout } from './services/authService';

const AdminLogin = lazy(() => import('./components/AdminLogin'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const ProtectedRoute = lazy(() => import('./components/ProtectedRoute'));

function App() {
  const [authed, setAuthed] = useState(isAuthenticated());

  useEffect(() => {
    const onAuthChanged = () => {
      setAuthed(isAuthenticated());
    };

    window.addEventListener('auth-changed', onAuthChanged);
    return () => {
      window.removeEventListener('auth-changed', onAuthChanged);
    };
  }, []);

  const handleLogout = () => {
    logout();
  };

  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="top-nav">
          <Link to="/" className="brand-link">
            Puzzle AR
          </Link>

          <nav className="nav-actions">
            <Link to="/" className="nav-link">
              Scanner
            </Link>

            {authed ? (
              <>
                <Link to="/admin" className="nav-link">
                  Admin
                </Link>
                <button type="button" className="nav-button" onClick={handleLogout}>
                  Logout
                </button>
              </>
            ) : (
              <Link to="/admin/login" className="nav-link">
                Admin Login
              </Link>
            )}
          </nav>
        </header>

        <main className="app-content">
          <Suspense fallback={<p className="status-detail">Loading page...</p>}>
            <Routes>
              <Route path="/" element={<ARScanner />} />
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;