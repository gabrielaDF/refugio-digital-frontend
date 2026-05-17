import "./Adopciones.css";
import CardMascota from "../components/cardMascota/CardMascota";

const mascotas = [
  {
    id: 1,
    nombre: "Max",
    edad: "2 años",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/perro_1_ifno0z.jpg",
  },

  {
    id: 2,
    nombre: "Luna",
    edad: "3 meses",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/perro_2_y8qnwd.jpg",
  },
  {
    id: 3,
    nombre: "Lola y Nala",
    edad: "3 meses",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/perro_3_y9kjuc.jpg",
  },
  {
    id: 4,
    nombre: "Charlie",
    edad: "5 meses",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978276/perro_4_bwyzrl.jpg",
  },
  {
    id: 5,
    nombre: "Toby",
    edad: "5 meses",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978276/perro_5_v0q3wq.jpg",
  },
  {
    id: 6,
    nombre: "Sasha",
    edad: "4 meses",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978276/perro_6_dsdbmh.jpg",
  },
  {
    id: 7,
    nombre: "Nico",
    edad: "5 meses",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978276/perro_7_amjfco.jpg",
  },
  {
    id: 8,
    nombre: "Axel",
    edad: "3 años",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978276/perro_8_hlfibe.jpg",
  },
  {
    id: 9,
    nombre: "Zeus",
    edad: "1 año",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978274/gato_1_xkuhyn.jpg",
  },
  {
    id: 10,
    nombre: "Oliver",
    edad: "2 años",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978274/gato_2_bqrq6e.jpg",
  },
  {
    id: 11,
    nombre: "Kim",
    edad: "1 año",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/gato_3_tkv7km.jpg",
  },
  {
    id: 12,
    nombre: "Tony",
    edad: "9 meses",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/gato_4_i7qwhs.jpg",
  },
  {
    id: 13,
    nombre: "Stela",
    edad: "3 meses",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/gato_5_jdceyf.jpg",
  },
  {
    id: 14,
    nombre: "Akira",
    edad: "2 meses",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978274/gato_6_id0hey.jpg",
  },
  {
    id: 15,
    nombre: "Nieve",
    edad: "3 meses",
    genero: "Masculino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/gato_7_fc5f36.jpg",
  },
  {
    id: 16,
    nombre: "Sabrina",
    edad: "1 año",
    genero: "Femenino",
    imagen:
      "https://res.cloudinary.com/dyuirdazt/image/upload/v1778978275/gato_8_dogyg1.jpg",
  },
];

function Adopciones() {
  return (
    <div className="adopciones-page">
      <section className="hero-adopciones">
        <div className="overlay">
          <h1>¿Quisieras adoptar?</h1>

          <p>
            ¡Tenemos a algunos amigos que de seguro estarán felices a tu lado!
          </p>
          <br/>
          <p>
            En esta sección encontrarás información más detallada de cada uno de
            nuestros animalitos.
          </p>
        </div>
      </section>

      <section className="filters">
        <input type="text" placeholder="Buscar nombre..." />

        <select>
          <option>Especie</option>
          <option>Perro</option>
          <option>Gato</option>
        </select>

        <select>
          <option>Edad</option>
          <option>Cachorro</option>
          <option>Adulto</option>
        </select>
      </section>

      <section className="pets-container">
        {mascotas.map((mascota) => (
          <CardMascota key={mascota.id} mascota={mascota} />
        ))}
      </section>
    </div>
  );
}

export default Adopciones;
