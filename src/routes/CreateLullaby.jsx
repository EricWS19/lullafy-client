import { useState } from 'react';
import { authHeader } from '../lib/auth';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function CreateLullaby(){
  const [title,setTitle] = useState('');
  const [preset,setPreset] = useState('');
  const [filePath,setFilePath] = useState('');
  const [msg,setMsg] = useState('');

  async function onSubmit(e){
    e.preventDefault();
    setMsg('Creating…');
    const res = await fetch(`${API}/api/lullabies`, {
      method:'POST',
      headers:{ 'Content-Type':'application/json', ...authHeader() },
      body: JSON.stringify({ title, preset, filePath })
    });
    const data = await res.json();
    if(!res.ok){
      setMsg(data.error || 'Failed');
      return;
    }
    setMsg(`Created ✅ id=${data.id}`);
    setTitle('');
    setPreset('');
    setFilePath('');
  }

  return (
    <form onSubmit={onSubmit} className="card" style={{maxWidth:520}}>
      <h2>Create Lullaby (requires login)</h2>
      <input
        placeholder="title"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />
      <input
        placeholder="preset"
        value={preset}
        onChange={e=>setPreset(e.target.value)}
      />
      <input
        placeholder="file path"
        value={filePath}
        onChange={e=>setFilePath(e.target.value)}
      />
      <button>Create</button>
      <div style={{marginTop:8}}>{msg}</div>
    </form>
  );
}

