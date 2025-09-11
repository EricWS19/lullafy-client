const KEY = 'lullafy_token';

export function setToken(t){ localStorage.setItem(KEY, t); }
export function getToken(){ return localStorage.getItem(KEY); }
export function clearToken(){ localStorage.removeItem(KEY); }

export function authHeader(){
  const t = getToken();
  return t ? { Authorization: `Bearer ${t}` } : {};
}

