import React, { useState } from "react";
import "./AuthForm.css";

/**
 * AuthForm
 * Formulario único de inicio de sesión / registro para Refugio Digital.
 * Cambia de contenido según el modo, sin desmontar el layout general
 * (mismo bloque de texto a la izquierda + tarjeta naranja a la derecha).
 *
 * Props:
 *  - onLogin({ identifier, password }) => void
 *  - onRegister({ username, password, email }) => void
 */
export default function AuthForm({ onLogin, onRegister }) {
  const [mode, setMode] = useState("login"); // "login" | "register"

  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [errors, setErrors] = useState({});

  const isLogin = mode === "login";

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleRegisterChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};

    if (isLogin) {
      if (!loginData.identifier.trim()) {
        newErrors.identifier = "Ingresa tu usuario o correo.";
      }
      if (!loginData.password) {
        newErrors.password = "Ingresa tu contraseña.";
      }
    } else {
      if (!registerData.username.trim()) {
        newErrors.username = "Elige un nombre de usuario.";
      }
      if (!registerData.password || registerData.password.length < 6) {
        newErrors.password = "La contraseña debe tener al menos 6 caracteres.";
      }
      if (!/^\S+@\S+\.\S+$/.test(registerData.email)) {
        newErrors.email = "Ingresa un correo válido.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    if (isLogin) {
      onLogin?.(loginData);
    } else {
      onRegister?.(registerData);
    }
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
    setErrors({});
  };

  return (
    <section className="auth-section">
      <div className="auth-intro">
        <img
          className="auth-intro__title-img"
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1786751881/Sin_t%C3%ADtulo-5_dynmnx.png"
          alt="¡Regístrate o inicia sesión aquí!"
        />
        <img
          className="auth-intro__pets"
          src="https://res.cloudinary.com/dn6wibef0/image/upload/v1786751881/Sin_t%C3%ADtulo-4_rikuba.png"
          alt="Gato y perros del refugio esperando ser adoptados"
        />
      </div>

      <div className="auth-card">
        <div className="auth-card__logo" aria-hidden="true">
          <span className="auth-card__paw">
            <img
              src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761692506/refugio%20digital/logo_refugio_digital_ytkc5v.png"
              alt="Logo Huella"
            />
          </span>
        </div>

        <div className="auth-card__tabs">
          <button
            type="button"
            className={`auth-card__tab ${isLogin ? "is-active" : ""}`}
            onClick={() => switchMode("login")}
          >
            Iniciar sesión
          </button>
          <button
            type="button"
            className={`auth-card__tab ${!isLogin ? "is-active" : ""}`}
            onClick={() => switchMode("register")}
          >
            Registrarme
          </button>
        </div>

        <form className="auth-card__form" onSubmit={handleSubmit} noValidate>
          {isLogin ? (
            <>
              <div className="auth-field">
                <input
                  type="text"
                  name="identifier"
                  placeholder="Usuario o e-mail..."
                  value={loginData.identifier}
                  onChange={handleLoginChange}
                  className={errors.identifier ? "has-error" : ""}
                />
                {errors.identifier && (
                  <span className="auth-field__error">{errors.identifier}</span>
                )}
              </div>

              <div className="auth-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña..."
                  value={loginData.password}
                  onChange={handleLoginChange}
                  className={errors.password ? "has-error" : ""}
                />
                {errors.password && (
                  <span className="auth-field__error">{errors.password}</span>
                )}
              </div>
            </>
          ) : (
            <>
              <div className="auth-field">
                <input
                  type="text"
                  name="username"
                  placeholder="Nombre de usuario..."
                  value={registerData.username}
                  onChange={handleRegisterChange}
                  className={errors.username ? "has-error" : ""}
                />
                {errors.username && (
                  <span className="auth-field__error">{errors.username}</span>
                )}
              </div>

              <div className="auth-field">
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña..."
                  value={registerData.password}
                  onChange={handleRegisterChange}
                  className={errors.password ? "has-error" : ""}
                />
                {errors.password && (
                  <span className="auth-field__error">{errors.password}</span>
                )}
              </div>

              <div className="auth-field">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail..."
                  value={registerData.email}
                  onChange={handleRegisterChange}
                  className={errors.email ? "has-error" : ""}
                />
                {errors.email && (
                  <span className="auth-field__error">{errors.email}</span>
                )}
              </div>
            </>
          )}

          <button type="submit" className="auth-card__submit">
            Enviar
          </button>
        </form>

        <p className="auth-card__switch">
          {isLogin ? (
            <>
              ¿No tienes cuenta?{" "}
              <button type="button" onClick={() => switchMode("register")}>
                Regístrate
              </button>
            </>
          ) : (
            <>
              ¿Ya tienes cuenta?{" "}
              <button type="button" onClick={() => switchMode("login")}>
                Inicia sesión
              </button>
            </>
          )}
        </p>
      </div>
    </section>
  );
}
