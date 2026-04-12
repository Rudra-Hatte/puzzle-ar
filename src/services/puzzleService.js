import { apiRequest } from './api';

export async function listActivePuzzles() {
  return apiRequest('/public/puzzles/active');
}

export async function listAdminPuzzles(token) {
  return apiRequest('/admin/puzzles', { token });
}

export async function createPuzzle(token, payload) {
  return apiRequest('/admin/puzzles', {
    method: 'POST',
    token,
    body: payload,
  });
}

export async function updatePuzzle(token, id, payload) {
  return apiRequest(`/admin/puzzles/${id}`, {
    method: 'PUT',
    token,
    body: payload,
  });
}

export async function deletePuzzle(token, id) {
  return apiRequest(`/admin/puzzles/${id}`, {
    method: 'DELETE',
    token,
  });
}

export async function uploadPuzzleAsset(token, file, kind) {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('kind', kind);

  return apiRequest('/admin/puzzles/upload', {
    method: 'POST',
    token,
    raw: true,
    body: formData,
  });
}
