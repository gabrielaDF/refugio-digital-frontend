import "./cardMascota.css";

function CardMascota({ mascota }) {
  return (
    <div className="pet-card">
      <img src={mascota.imagen} alt={mascota.nombre} />

      <div className="pet-info">
        <h2>{mascota.nombre}</h2>

        <p>
          <strong>Edad:</strong> {mascota.edad}
        </p>
        <p>
          <strong>Genero:</strong> {mascota.genero}
        </p>

        <button>Adoptar</button>
      </div>
    </div>
  );
}

export default CardMascota;
