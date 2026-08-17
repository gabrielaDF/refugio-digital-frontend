import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AuthNavButton.css";

/**
 * AuthNavButton
 * Botón para el header que:
 *  - Si NO hay sesión activa -> enlaza a /login (donde vive <AuthForm />)
 *  - Si SÍ hay sesión activa -> muestra "Mi cuenta" y enlaza a /perfil
 *
 * Por ahora el estado de sesión es un valor de prueba local (`isLoggedIn`).
 * Cuando tengas tu contexto/estado global de auth, reemplaza esa línea por:
 *   const { isLoggedIn } = useAuth();
 * o por la lectura de tu token (localStorage, cookie, etc).
 */
export default function AuthNavButton({ onNavigate }) {
  // --- Valor de prueba: cámbialo a true para ver el estado "logueado" ---
  const [isLoggedIn] = useState(false);

  if (isLoggedIn) {
    return (
      <Link
        to="/perfil"
        className="auth-nav-btn auth-nav-btn--account"
        onClick={onNavigate}
      >
        Mi cuenta
      </Link>
    );
  }

  return (
    <Link to="/login" className="auth-nav-btn" onClick={onNavigate}>
      Iniciar sesión
    </Link>
  );
}
