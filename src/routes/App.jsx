import { Link, Outlet } from 'react-router-dom';

export default function App(){
  return (
    <>
      <nav style={{padding:12, borderBottom:'1px solid #333'}}>
        <Link to="/" style={{marginRight:12}}>Home</Link>
        <Link to="/login" style={{marginRight:12}}>Login</Link>
        <Link to="/create">Create Lullaby</Link>
      </nav>
      <main style={{padding:16}}>
        <Outlet/>
      </main>
    </>
  );
}

