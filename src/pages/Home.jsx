import "./Home.css";

export default function Home() {
  return (
    <main className="home">
      {/* HERO */}
      <section className="hero">
        <div className="overlay"></div>

        <div className="hero-content">
          <h1>Bienvenido a</h1>

          <h2>Refugio Digital</h2>

          <p className="Parrafo-1">
            En nuestro refugio, cada huella cuenta una historia y cada mirada
            busca un hogar. Aquí encontrarás perros y gatos que esperan con
            ilusión a esa persona especial que les brinde amor y cuidado.
          </p>

          <div className="hero-buttons">
            <button className="btn-orange">Ver mascotas &gt;</button>

            <button className="btn-outline">Acerca de &gt;</button>
          </div>
        </div>
      </section>

      {/* SABIAS QUE */}
      <section className="sabias">
        <div className="sabias-text">
          <h2>¿Sabias que...?</h2>

          <p>
            Mientras los perros tienen una huella de nariz única, como nosotros
            tenemos huellas dactilares, los gatos tienen patrones únicos en su
            pelaje.
          </p>

          <button className="btn-blog">Ver más datos curiosos</button>
        </div>

        <div className="sabias-img">
          <img
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761692511/refugio%20digital/perro_1_n3qroc.png"
            alt="Perro"
          />
        </div>
      </section>

      {/* ADOPCIONES */}
      <section className="adopciones">
        <div className="overlay"></div>

        <div className="adopciones-content">
          <div className="adopciones-title">
            <h2>¿En qué animal está interesado?</h2>

            <div className="line"></div>
          </div>

          <div className="cards">
            {/* PERROS */}
            <div className="card">
              <div className="emoji"><img src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761869165/refugio%20digital/icono_perro_s4ancd.png" alt="Perro" /></div>

              <h3>Perros</h3>

              <button className="btn-orange">Ir ➤</button>
            </div>

            {/* GATOS */}
            <div className="card">
              <div className="emoji"><img className="gato-img" src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761869164/refugio%20digital/icono_gato_aqoxs4.png" alt="gato" /></div>

              <h3>Gatos</h3>

              <button className="btn-orange">Ir ➤</button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="video-section">
        <h2>¿Qué es Refugio Digital?</h2>

        <div className="video-container">
        <iframe width="1000" height="700" src="https://www.youtube.com/embed/so9FXn5vZS4?si=ZzvB3PQ-9T6kKwDn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        Tu navegador no soporta videos.

        </div>
      </section>

      {/* AYUDA */}
      <section className="ayuda">
        <div className="ayuda-images">

          <img
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1778808006/foto_decoracion_kp9u01.png"
            alt="Perro"
            className="img-big"
          />

        </div>

        <div className="ayuda-content">
          <h2>¿Te gustaría ayudarnos?</h2>

          <div className="help-buttons">
            <button className="help-card">

              <div><img className="botonesdyr" src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761692527/refugio%20digital/reportar_icono_jvfl2l.png" alt="reportarimg" /></div>
            </button>

            <button className="help-card">

              <div><img className="botonesdyr" src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761692505/refugio%20digital/donar_icono_tsqvya.png" alt="donarimg" /></div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}