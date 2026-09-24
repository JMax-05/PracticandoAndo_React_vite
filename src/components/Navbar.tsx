import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <Link to="/">🐾 Maryx Animals</Link>
      </div>
      <nav className="navbar-links">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active-link' : '')} end>
          Inicio
        </NavLink>
        <NavLink to="/perros" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Perros 🐶
        </NavLink>
        <NavLink to="/gatos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
          Gatos 🐱
        </NavLink>
      </nav>
    </header>
  );
}
export default Navbar;