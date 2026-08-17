import { useState } from "react";
import { Link } from "react-router-dom";
import "./Reportes.css";

const slides = [
  {
    id: 1,
    titulo: "Reporta",
    texto:
      "Cada reporte aumenta las posibilidades de encontrar una mascota. Comparte la información del caso y permite que más personas se unan a la búsqueda.",
    boton: "Crear Reporte",
    imagen:
      "https://res.cloudinary.com/dn6wibef0/image/upload/v1761694431/refugio%20digital/reportes_wfdcqa.jpg",
    clase: "slide-reporta",
  },
  {
    id: 2,
    titulo: "Ver Reportes",
    texto:
      "Explora los casos más recientes de perros y gatos extraviados. Tu ayuda puede marcar la diferencia para que una mascota vuelva al hogar donde la esperan.",
    boton: "Explorar reportes",
    imagen:
      "https://res.cloudinary.com/dn6wibef0/image/upload/v1761694428/refugio%20digital/login_cflekx.jpg",
    clase: "slide-ver-reportes",
  },
];

const reportes = [
  {
    id: 1,
    nombre: "Max",
    edad: "3 años",
    sexo: "Macho",
    ubicacion: "Barrio El Bosque, Cali",
    fecha: "28 de junio de 2026",
    caracteristicas:
      "Labrador color miel, collar rojo y una mancha blanca en el pecho.",
    estado: "Extraviado",
    imagen:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    nombre: "Luna",
    edad: "1 año",
    sexo: "Hembra",
    ubicacion: "Barrio Ciudad Jardín, Cali",
    fecha: "29 de julio de 2026",
    caracteristicas:
      "Pelaje blanco con manchas negras, orejas caídas y cola larga.",
    estado: "Extraviada",
    imagen:
      "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    nombre: "Mia",
    edad: "2 meses",
    sexo: "Hembra",
    ubicacion: "Parque del Barrio San Fernando, Jamundí",
    fecha: "28 de julio de 2026",
    caracteristicas:
      "Gatita de pelaje naranja atigrado, ojos azules y tamaño pequeño.",
    estado: "Encontrada",
    imagen:
      "https://images.unsplash.com/photo-1519052537078-e6302a4968d4?auto=format&fit=crop&w=600&q=80",
  },
];

function Reportes() {
  const [slideActual, setSlideActual] = useState(0);

  const siguienteSlide = () => {
    setSlideActual((actual) => (actual === slides.length - 1 ? 0 : actual + 1));
  };

  const anteriorSlide = () => {
    setSlideActual((actual) => (actual === 0 ? slides.length - 1 : actual - 1));
  };

  return (
    <main className="reportes-page">
      {/* =========================================
          CARRUSEL
      ========================================= */}

      <section
        className={`reportes-slider ${slides[slideActual].clase}`}
        style={{
          backgroundImage: `url(${slides[slideActual].imagen})`,
        }}
      >
        {/* Capa sobre la imagen */}
        <div className="slider-overlay"></div>

        {/* Flecha izquierda */}
        <button
          className="slider-arrow slider-arrow-left"
          onClick={anteriorSlide}
          aria-label="Slide anterior"
        >
          ‹
        </button>

        {/* Contenido */}
        <div className="slider-content">
          <h1>{slides[slideActual].titulo}</h1>

          {slideActual === 0 && <div className="slider-line"></div>}

          <p>{slides[slideActual].texto}</p>

          {/* Botón del slide */}
          {slideActual === 0 ? (
            <Link to="/crear-reporte" className="btn-reportes">
              Crear Reporte
            </Link>
          ) : (
            <a href="#reportes" className="btn-reportes">
              Explorar reportes
            </a>
          )}
        </div>

        {/* Flecha derecha */}
        <button
          className="slider-arrow slider-arrow-right"
          onClick={siguienteSlide}
          aria-label="Siguiente slide"
        >
          ›
        </button>

        {/* Indicadores */}
        <div className="slider-indicators">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              className={`slider-indicator ${
                slideActual === index ? "active" : ""
              }`}
              onClick={() => setSlideActual(index)}
              aria-label={`Ir al slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

      {/* =========================================
          BLOQUE 1 - ¿CÓMO AYUDAR?
      ========================================= */}

      <section className="bloque-como-ayudar">
        <div className="bloque-como-ayudar-imagen">
          <img
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1786751881/Sin_t%C3%ADtulo-2_ji197o.png"
            alt="Persona ayudando a un perro"
          />
        </div>

        <div className="bloque-como-ayudar-texto">
          <h2>¿Cómo ayudar?</h2>

          <p>
            Sabemos que puede ser complicado saber exactamente qué hacer cuando
            encuentras a un animal en no muy buenas condiciones, por eso, con
            tan solo contactarnos, nuestro equipo se dirigirá al lugar en donde
            esté el pequeño y se encargará de llevarlo a donde pueda tener los
            cuidados necesarios.
          </p>
        </div>
      </section>

      {/* =========================================
          BLOQUE 2 - ¡EMPIEZA AQUÍ!
      ========================================= */}

      <section className="bloque-empieza">
        <div className="bloque-empieza-texto">
          <h2>¡Empieza aquí!</h2>

          <p>A continuación te dejamos las opciones de reporte:</p>

          <ul>
            <li>
              Para reporte inmediato, llama a este número
              <strong> (1234567890)</strong>
            </li>

            <li>
              Para dar registro del reporte, dale click al botón{" "}
              <strong>“Empezar”</strong> y llena el formulario.
            </li>
          </ul>
        </div>

        <div className="bloque-empieza-imagen">
          <Link to="/crear-reporte">
            <img
              src="https://res.cloudinary.com/dn6wibef0/image/upload/v1786751881/Sin_t%C3%ADtulo-1_fs2gtk.png"
              alt="Perro"
            />
          </Link>
        </div>
      </section>

      {/* =========================================
          BLOQUE 3 - ¿CUÁL ES EL PROCESO?
      ========================================= */}

      <section className="bloque-proceso">
        <h2>¿Cuál es el proceso?</h2>

        <div className="bloque-proceso-contenido">
          <div className="bloque-proceso-imagenes">
            <img
              className="proceso-imagen-grande"
              src="https://res.cloudinary.com/dn6wibef0/image/upload/v1786751882/Sin_t%C3%ADtulo-3_rjfoof.png"
              alt="Animales"
            />
          </div>

          <div className="bloque-proceso-texto">
            <p>
              ¿Te interesa saber cuál es el proceso? te lo explicamos. Una vez
              haces el reporte, nuestro equipo se encarga de revisar al animal
              para verificar su condición y acto seguido se lleva a una
              veterinaria para darle atención médica si se requiere. Luego nos
              enfocamos en su aseo, alimentación y cuidado hasta que alguien
              decida adoptarlo.
            </p>

            <p>
              Siempre procuramos tener en cuenta su bienestar y comodidad hasta
              que llegue su próximo dueño. El objetivo es brindarles un lugar
              seguro en donde puedan sentirse a salvo.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          MASCOTAS REPORTADAS
      ========================================= */}

      <section className="ayuda-section">
        <h2>Ayuda a buscarlos</h2>

        <div id="reportes" className="reportes-container">
          {reportes.map((reporte) => (
            <article className="reporte-card" key={reporte.id}>
              {/* Imagen */}
              <div className="reporte-imagen-container">
                <img
                  src={reporte.imagen}
                  alt={`Mascota ${reporte.nombre}`}
                  className="reporte-imagen"
                />
              </div>

              {/* Información */}
              <div className="reporte-info">
                <p>
                  🐾 <strong>{reporte.nombre}</strong>
                </p>

                <p>
                  🗓️ <strong>Edad:</strong> {reporte.edad}
                </p>

                <p>
                  ⚥ <strong>Sexo:</strong> {reporte.sexo}
                </p>

                <p>
                  📍 <strong>Última ubicación:</strong> {reporte.ubicacion}
                </p>

                <p>
                  🗓️ <strong>Fecha de extravío:</strong> {reporte.fecha}
                </p>

                <p>
                  🐾 <strong>Características:</strong> {reporte.caracteristicas}
                </p>

                <p className="estado">
                  <span
                    className={
                      reporte.estado === "Encontrada"
                        ? "estado-verde"
                        : "estado-rojo"
                    }
                  ></span>
                  <strong>Estado:</strong> {reporte.estado}
                </p>

                <button className="btn-contactar" type="button">
                  Contactar
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Reportes;
