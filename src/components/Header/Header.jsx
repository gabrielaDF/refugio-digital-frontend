import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="header">
      <div className="logo-container">
        <img src="/logo-huella.png" alt="Logo Refugio Digital" className="logo" />
        <h1 className="titulo">Refugio Digital</h1>
      </div>

      {/* Icono menú móvil */}
      <button
        className="menu-icono"
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label="Abrir menú"
      >
        ☰
      </button>

      {/* Navegación */}
      <nav className={`nav ${menuAbierto ? "activo" : ""}`}>
        <Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link>
        <Link to="/adopciones" onClick={() => setMenuAbierto(false)}>Adopciones</Link>
        <Link to="/reportes" onClick={() => setMenuAbierto(false)}>Reportes</Link>
        <Link to="/historias" onClick={() => setMenuAbierto(false)}>Historias</Link>
      </nav>
    </header>
  );
}

export default Header;