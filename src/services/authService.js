import { apiRequest } from './api';

const TOKEN_KEY = 'puzzle_ar_admin_token';

function emitAuthChanged() {
  window.dispatchEvent(new Event('auth-changed'));
}

export function getAuthToken() {
  return localStorage.getItem(TOKEN_KEY) || '';
}

export function isAuthenticated() {
  return Boolean(getAuthToken());
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  emitAuthChanged();
}

export async function login(username, password) {
  const payload = await apiRequest('/auth/login', {
    method: 'POST',
    body: { username, password },
  });

  localStorage.setItem(TOKEN_KEY, payload.token);
  emitAuthChanged();

  return payload;
}

export async function getCurrentAdmin() {
  const token = getAuthToken();
  if (!token) {
    throw new Error('Not authenticated');
  }

  return apiRequest('/auth/me', { token });
}
