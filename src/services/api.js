export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

export async function apiRequest(
  path,
  { method = 'GET', body, token, headers = {}, raw = false } = {}
) {
  const requestHeaders = { ...headers };

  if (!raw) {
    requestHeaders['Content-Type'] = 'application/json';
  }

  if (token) {
    requestHeaders.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: requestHeaders,
    body: body === undefined ? undefined : raw ? body : JSON.stringify(body),
  });

  const contentType = response.headers.get('content-type') || '';
  const data = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    throw new Error(data?.message || 'Request failed');
  }

  return data;
}
