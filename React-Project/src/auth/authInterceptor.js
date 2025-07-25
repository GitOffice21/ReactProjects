import authService from './authService';

export async function authFetch(url, options = {}) {
  const token = authService.getToken();
  const headers = {
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
  return fetch(url, { ...options, headers });
}
