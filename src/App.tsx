import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Dogs from './pages/Dogs';
import Cats from './pages/Cats';

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/perros" element={<Dogs />} />
          <Route path="/gatos" element={<Cats />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}