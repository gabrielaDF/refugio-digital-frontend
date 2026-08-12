import { useState } from "react";
import "./AcercaDe.css";

function AcercaDe() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    correo: "",
    asunto: "",
    mensaje: "",
  });

  const manejarCambio = (e) => {
    const { name, value } = e.target;

    setFormulario({
      ...formulario,
      [name]: value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    console.log("Mensaje enviado:", formulario);

    alert("¡Gracias por contactarnos! Hemos recibido tu mensaje.");

    setFormulario({
      nombre: "",
      correo: "",
      asunto: "",
      mensaje: "",
    });
  };

  return (
    <main className="acerca-page">
      {/* =========================================
          ENCABEZADO
      ========================================= */}

      <section
        className="acerca-header"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn6wibef0/image/upload/v1761693061/refugio%20digital/Imagen20_yu4txe.jpg')",
        }}
      >
        <div className="acerca-header-overlay"></div>

        <div className="acerca-header-content">
          <h1>Acerca de Refugio Digital</h1>

          <p>
            Un espacio creado para conectar mascotas que necesitan un hogar con
            personas dispuestas a brindarles una segunda oportunidad.
          </p>
        </div>
      </section>

      {/* =========================================
          MISIÓN Y VISIÓN
      ========================================= */}

      <section className="mision-vision">
        {/* MISIÓN */}

        <article className="info-card">
          <div className="info-icon">🐾</div>

          <h2>Misión</h2>

          <p>
            En Refugio Digital trabajamos para conectar perros y gatos en busca
            de un hogar con personas dispuestas a brindarles amor, cuidado y
            respeto. Promovemos la adopción responsable, fomentamos el bienestar
            animal y creemos en el poder de las segundas oportunidades para
            transformar vidas, tanto humanas como peludas.
          </p>
        </article>

        {/* VISIÓN */}

        <article className="info-card">
          <div className="info-icon">🏠</div>

          <h2>Visión</h2>

          <p>
            Ser un puente confiable entre animales en situación de
            vulnerabilidad y familias que deseen brindarles un hogar lleno de
            amor. Aspiramos a que, algún día, cada perro y gato tenga un lugar
            seguro donde vivir, libres de abandono y maltrato, formando parte de
            comunidades más compasivas y responsables.
          </p>
        </article>
      </section>

      {/* =========================================
          CONTACTANOS
      ========================================= */}

      <section className="contactanos-section">
        {/* TEXTO */}

        <div className="contactanos-texto">
          <h2>Contáctanos</h2>

          <p>
            ¿Tienes alguna pregunta, sugerencia o quieres saber más sobre
            Refugio Digital? Escríbenos.
          </p>

          <p>
            Estaremos felices de escucharte y seguir construyendo juntos una
            comunidad comprometida con el bienestar animal.
          </p>
        </div>

        {/* FORMULARIO */}

        <form className="contactanos-form" onSubmit={manejarSubmit}>
          {/* NOMBRE */}

          <div className="campo-contacto">
            <label htmlFor="nombre">Nombre</label>

            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={manejarCambio}
              placeholder="Escribe tu nombre"
              required
            />
          </div>

          {/* CORREO */}

          <div className="campo-contacto">
            <label htmlFor="correo">Correo electrónico</label>

            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={manejarCambio}
              placeholder="ejemplo@correo.com"
              required
            />
          </div>

          {/* ASUNTO */}

          <div className="campo-contacto">
            <label htmlFor="asunto">Asunto</label>

            <input
              type="text"
              id="asunto"
              name="asunto"
              value={formulario.asunto}
              onChange={manejarCambio}
              placeholder="¿En qué podemos ayudarte?"
              required
            />
          </div>

          {/* MENSAJE */}

          <div className="campo-contacto">
            <label htmlFor="mensaje">Mensaje</label>

            <textarea
              id="mensaje"
              name="mensaje"
              value={formulario.mensaje}
              onChange={manejarCambio}
              placeholder="Escribe tu mensaje..."
              rows="5"
              required
            ></textarea>
          </div>

          {/* BOTÓN */}

          <button type="submit" className="btn-enviar-contacto">
            Enviar mensaje
          </button>
        </form>
      </section>
    </main>
  );
}

export default AcercaDe;
