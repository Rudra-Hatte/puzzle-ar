import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, getAuthToken } from '../services/authService';
import {
  createPuzzle,
  deletePuzzle,
  listAdminPuzzles,
  updatePuzzle,
  uploadPuzzleAsset,
} from '../services/puzzleService';

const initialFormState = {
  name: '',
  description: '',
  markerId: '',
  markerAssetUrl: '',
  puzzleImageUrl: '',
  videoUrl: '',
  youtubeUrl: '',
  tags: '',
  isActive: true,
};

function AdminDashboard() {
  const navigate = useNavigate();
  const [puzzles, setPuzzles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState(initialFormState);
  const [editingPuzzleId, setEditingPuzzleId] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const token = getAuthToken();

  const loadPuzzles = useCallback(async () => {
    setLoading(true);
    setError('');

    try {
      const response = await listAdminPuzzles(token);
      setPuzzles(response.puzzles || []);
    } catch (err) {
      setError(err.message || 'Failed to load puzzles');
    } finally {
      setLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (!token) {
      navigate('/admin/login', { replace: true });
      return;
    }

    loadPuzzles();
  }, [token, navigate, loadPuzzles]);

  const applyPuzzleToForm = (puzzle) => {
    const directVideo = (puzzle.playbackSources || []).find((source) =>
      ['mp4', 'hls', 'other'].includes(source.type)
    );
    const youtubeSource = (puzzle.playbackSources || []).find(
      (source) => source.type === 'youtube'
    );

    setForm({
      name: puzzle.name || '',
      description: puzzle.description || '',
      markerId: puzzle.markerId || '',
      markerAssetUrl: puzzle.markerAssetUrl || '',
      puzzleImageUrl: puzzle.puzzleImageUrl || '',
      videoUrl: directVideo?.url || '',
      youtubeUrl: youtubeSource?.url || '',
      tags: Array.isArray(puzzle.tags) ? puzzle.tags.join(', ') : '',
      isActive: Boolean(puzzle.isActive),
    });
  };

  const handleUpload = async (event, kind) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSaving(true);
    setFeedback('');
    setError('');

    try {
      const result = await uploadPuzzleAsset(token, file, kind);

      if (kind === 'image') {
        setForm((current) => ({ ...current, puzzleImageUrl: result.url }));
      }

      if (kind === 'video') {
        setForm((current) => ({ ...current, videoUrl: result.url }));
      }

      setFeedback(`${kind} uploaded`);
    } catch (err) {
      setError(err.message || `Failed to upload ${kind}`);
    } finally {
      setSaving(false);
      event.target.value = '';
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSaving(true);
    setFeedback('');
    setError('');

    const payload = {
      ...form,
      tags: form.tags,
      isActive: Boolean(form.isActive),
    };

    try {
      if (editingPuzzleId) {
        await updatePuzzle(token, editingPuzzleId, payload);
        setFeedback('Puzzle updated');
      } else {
        await createPuzzle(token, payload);
        setFeedback('Puzzle created');
      }

      setForm(initialFormState);
      setEditingPuzzleId('');
      await loadPuzzles();
    } catch (err) {
      setError(err.message || 'Failed to save puzzle');
    } finally {
      setSaving(false);
    }
  };

  const handleEdit = (puzzle) => {
    setEditingPuzzleId(puzzle.id);
    applyPuzzleToForm(puzzle);
    setFeedback(`Editing ${puzzle.name}`);
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this puzzle?')) {
      return;
    }

    setSaving(true);
    setError('');

    try {
      await deletePuzzle(token, id);
      setFeedback('Puzzle deleted');
      if (editingPuzzleId === id) {
        setEditingPuzzleId('');
        setForm(initialFormState);
      }
      await loadPuzzles();
    } catch (err) {
      setError(err.message || 'Failed to delete puzzle');
    } finally {
      setSaving(false);
    }
  };

  const handleCancelEdit = () => {
    setEditingPuzzleId('');
    setForm(initialFormState);
    setFeedback('Edit canceled');
  };

  const handleLogout = () => {
    logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <section className="admin-page">
      <div className="admin-topbar">
        <div>
          <h1>Puzzle Admin</h1>
          <p>Create puzzles, assign direct video sources, and manage puzzle-image AR tracking.</p>
        </div>
        <button type="button" className="btn" onClick={handleLogout}>
          Logout
        </button>
      </div>

      <div className="admin-layout">
        <form className="admin-form card" onSubmit={handleSubmit}>
          <h2>{editingPuzzleId ? 'Edit Puzzle' : 'Add Puzzle'}</h2>

          <div className="form-grid">
            <label>
              Puzzle Name
              <input
                value={form.name}
                onChange={(event) =>
                  setForm((current) => ({ ...current, name: event.target.value }))
                }
                required
              />
            </label>

            <label>
              Marker ID
              <input
                value={form.markerId}
                onChange={(event) =>
                  setForm((current) => ({ ...current, markerId: event.target.value }))
                }
                placeholder="mindar-target-001"
              />
            </label>

            <label className="full-width">
              Description
              <textarea
                value={form.description}
                onChange={(event) =>
                  setForm((current) => ({ ...current, description: event.target.value }))
                }
                rows={3}
              />
            </label>

            <label>
              Marker Asset URL
              <input
                value={form.markerAssetUrl}
                onChange={(event) =>
                  setForm((current) => ({ ...current, markerAssetUrl: event.target.value }))
                }
                placeholder="https://cdn.example.com/targets/chemistry.mind"
              />
            </label>

            <label>
              Puzzle Image URL
              <input
                value={form.puzzleImageUrl}
                onChange={(event) =>
                  setForm((current) => ({ ...current, puzzleImageUrl: event.target.value }))
                }
                placeholder="https://cdn.example.com/images/puzzle.jpg"
                required
              />
            </label>

            <label>
              Upload Puzzle Image
              <input type="file" accept="image/*" onChange={(event) => handleUpload(event, 'image')} />
            </label>

            <label>
              Video URL (MP4/HLS)
              <input
                value={form.videoUrl}
                onChange={(event) =>
                  setForm((current) => ({ ...current, videoUrl: event.target.value }))
                }
                placeholder="https://cdn.example.com/videos/experiment.mp4"
              />
            </label>

            <label>
              Upload Video
              <input type="file" accept="video/*" onChange={(event) => handleUpload(event, 'video')} />
            </label>

            <label className="full-width">
              YouTube URL (optional fallback)
              <input
                value={form.youtubeUrl}
                onChange={(event) =>
                  setForm((current) => ({ ...current, youtubeUrl: event.target.value }))
                }
                placeholder="https://www.youtube.com/watch?v=..."
              />
            </label>

            <label>
              Tags (comma separated)
              <input
                value={form.tags}
                onChange={(event) =>
                  setForm((current) => ({ ...current, tags: event.target.value }))
                }
                placeholder="chemistry, grade-7"
              />
            </label>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={form.isActive}
                onChange={(event) =>
                  setForm((current) => ({ ...current, isActive: event.target.checked }))
                }
              />
              Active
            </label>
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? 'Saving...' : editingPuzzleId ? 'Update Puzzle' : 'Create Puzzle'}
            </button>
            {editingPuzzleId && (
              <button type="button" className="btn" onClick={handleCancelEdit}>
                Cancel Edit
              </button>
            )}
          </div>

          {feedback && <p className="success-text">{feedback}</p>}
          {error && <p className="error-text">{error}</p>}
        </form>

        <div className="card puzzle-list-card">
          <h2>Existing Puzzles</h2>
          {loading ? (
            <p>Loading puzzles...</p>
          ) : puzzles.length === 0 ? (
            <p>No puzzles yet. Add the first one from the form.</p>
          ) : (
            <ul className="puzzle-list">
              {puzzles.map((puzzle) => (
                <li key={puzzle.id} className="puzzle-item">
                  <div>
                    <h3>{puzzle.name}</h3>
                    <p>{puzzle.description || 'No description yet'}</p>
                    <small>
                      Marker: {puzzle.markerId || 'not set'} | Image: {puzzle.puzzleImageUrl || 'missing'}
                    </small>
                    <div className="chips">
                      <span className={`chip ${puzzle.isActive ? 'chip-active' : 'chip-inactive'}`}>
                        {puzzle.isActive ? 'Active' : 'Inactive'}
                      </span>
                      <span className="chip">Sources: {puzzle.playbackSources?.length || 0}</span>
                    </div>
                  </div>
                  <div className="item-actions">
                    <button type="button" className="btn" onClick={() => handleEdit(puzzle)}>
                      Edit
                    </button>
                    <button type="button" className="btn btn-danger" onClick={() => handleDelete(puzzle.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default AdminDashboard;
