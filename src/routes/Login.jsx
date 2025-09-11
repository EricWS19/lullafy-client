import { useState } from 'react';
import { setToken } from '../lib/auth';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Login(){
  const [username,setU] = useState('');
  const [password,setP] = useState('');
  const [msg,setMsg] = useState('');

  async function onSubmit(e){
    e.preventDefault();
    setMsg('Logging in…');
    const res = await fetch(`${API}/api/auth/login`, {
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body: JSON.stringify({ username, password })
    });
    const data = await res.json();
    if(!res.ok){
      setMsg(data.error || 'Login failed');
      return;
    }
    setToken(data.token);
    setMsg('Logged in ✅');
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{maxWidth:420}}>
      <h2>Login</h2>
      <input
        placeholder="username"
        value={username}
        onChange={e=>setU(e.target.value)}
      />
      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={e=>setP(e.target.value)}
      />
      <button>Login</button>
      <div style={{marginTop:8}}>{msg}</div>
    </form>
  );
}

