import { useEffect, useState } from 'react';

const API = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export default function Home(){
  const [items, setItems] = useState([]);
  const [err, setErr] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${API}/api/lullabies`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || 'Fetch failed');
        setItems(data);
      } catch (e) {
        setErr(e.message);
      }
    })();
  }, []);

  return (
    <>
      <h1>Lullafy 🌙</h1>
      {err && <div style={{color:'tomato'}}>{err}</div>}
      <ul>
        {items.map(lb => {
          const name = lb.title ?? lb.originalSongName;
          const user = lb.User?.username ?? 'anonymous';
          return <li key={lb.id}>{name} — {user}</li>;
        })}
      </ul>
    </>
  );
}

