import { useState } from "react";
import "./CrearReporte.css";

function CrearReporte() {
  const [formulario, setFormulario] = useState({
    nombre: "",
    tipo: "",
    genero: "",
    edad: "",
    ubicacion: "",
    fecha: "",
    caracteristicas: "",
    estado: "Extraviado",
    imagen: null,
  });

  const manejarCambio = (e) => {
    const { name, value, files } = e.target;

    setFormulario({
      ...formulario,
      [name]: files ? files[0] : value,
    });
  };

  const manejarSubmit = (e) => {
    e.preventDefault();

    console.log("Reporte:", formulario);

    alert("Reporte creado correctamente");
  };

  return (
    <main className="crear-reporte">
      <section className="formulario-header">
        <h1>Crear Reporte</h1>

        <p>
          Comparte la información de una mascota extraviada para ayudar a
          encontrarla.
        </p>
      </section>

      <section className="formulario-contenedor">
        <form onSubmit={manejarSubmit} className="reporte-form">
          <div className="formulario-grid">
            {/* NOMBRE */}

            <div className="campo">
              <label htmlFor="nombre">Nombre de la mascota</label>

              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={manejarCambio}
                placeholder="Ej. Max"
                required
              />
            </div>

            {/* TIPO */}

            <div className="campo">
              <label htmlFor="tipo">Tipo de mascota</label>

              <select
                id="tipo"
                name="tipo"
                value={formulario.tipo}
                onChange={manejarCambio}
                required
              >
                <option value="">Selecciona una opción</option>

                <option value="Perro">Perro</option>

                <option value="Gato">Gato</option>
              </select>
            </div>

            {/* GENERO */}

            <div className="campo">
              <label htmlFor="genero">Género</label>

              <select
                id="genero"
                name="genero"
                value={formulario.genero}
                onChange={manejarCambio}
                required
              >
                <option value="">Selecciona una opción</option>

                <option value="Macho">Macho</option>

                <option value="Hembra">Hembra</option>
              </select>
            </div>

            {/* EDAD */}

            <div className="campo">
              <label htmlFor="edad">Edad</label>

              <input
                type="text"
                id="edad"
                name="edad"
                value={formulario.edad}
                onChange={manejarCambio}
                placeholder="Ej. 3 años"
                required
              />
            </div>

            {/* UBICACIÓN */}

            <div className="campo campo-completo">
              <label htmlFor="ubicacion">Última ubicación</label>

              <input
                type="text"
                id="ubicacion"
                name="ubicacion"
                value={formulario.ubicacion}
                onChange={manejarCambio}
                placeholder="Ej. Barrio El Bosque, Cali"
                required
              />
            </div>

            {/* FECHA */}

            <div className="campo">
              <label htmlFor="fecha">Fecha de extravío</label>

              <input
                type="date"
                id="fecha"
                name="fecha"
                value={formulario.fecha}
                onChange={manejarCambio}
                required
              />
            </div>

            {/* ESTADO */}

            <div className="campo">
              <label htmlFor="estado">Estado</label>

              <select
                id="estado"
                name="estado"
                value={formulario.estado}
                onChange={manejarCambio}
              >
                <option value="Extraviado">Extraviado</option>

                <option value="Encontrado">Encontrado</option>
              </select>
            </div>

            {/* CARACTERÍSTICAS */}

            <div className="campo campo-completo">
              <label htmlFor="caracteristicas">
                Características de la mascota
              </label>

              <textarea
                id="caracteristicas"
                name="caracteristicas"
                value={formulario.caracteristicas}
                onChange={manejarCambio}
                placeholder="Describe el color, tamaño, collar, manchas u otras características..."
                rows="5"
                required
              ></textarea>
            </div>

            {/* IMAGEN */}

            <div className="campo campo-completo">
              <label htmlFor="imagen">Fotografía de la mascota</label>

              <input
                type="file"
                id="imagen"
                name="imagen"
                accept="image/*"
                onChange={manejarCambio}
                required
              />
            </div>
          </div>

          {/* BOTÓN */}

          <div className="formulario-acciones">
            <button type="submit" className="btn-crear-reporte">
              Crear Reporte
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default CrearReporte;
