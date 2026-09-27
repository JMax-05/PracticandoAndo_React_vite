import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';

export default function App() {
  const location = useLocation();

  // Verificamos si la ruta actual es exactamente la página principal "/"
  const showNavbar = location.pathname === "/";

  return (
    <div className="App-layout">
      {/* Solo se renderiza la Navbar si showNavbar es true */}
      {showNavbar && <Navbar />}

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perros" element={<Dogs />} />
          <Route path="/gatos" element={<Cats />} />
        </Routes>
      </main>
    </div>
  );
}