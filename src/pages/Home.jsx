export default function Home() {
  return (
    <main className="bg-[#ECECEC] min-h-screen">
      {/* HERO */}
      <section
        className="relative h-[400px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dn6wibef0/image/upload/v1761692532/refugio%20digital/portada_refugio_digital_hthzv3.png')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Contenido */}
        <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-16 text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Bienvenido a
          </h1>

          <h2 className="text-5xl md:text-7xl font-extrabold text-[#F28C28] mb-4">
            Refugio Digital
          </h2>

          <p className="text-sm md:text-lg mb-6">
            En nuestro refugio, cada huella cuenta una historia y cada mirada
            busca un hogar. Aquí encontrarás perros y gatos que esperan con
            ilusión a esa persona especial que les brinde amor y cuidado.
          </p>

          <div className="flex gap-4 flex-wrap">
            <button className="bg-[#F28C28] hover:bg-orange-600 transition px-5 py-2 rounded-md font-semibold">
              Ver mascotas &gt;
            </button>

            <button className="border border-white hover:bg-white hover:text-black transition px-5 py-2 rounded-md font-semibold">
              Acerca de &gt;
            </button>
          </div>
        </div>
      </section>

      {/* SABIAS QUE */}
      <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-lg">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6">
            ¿Sabias que...?
          </h2>

          <p className="text-lg font-medium text-black mb-6">
            Mientras los perros tienen una huella de nariz única, como nosotros
            tenemos huellas dactilares, los gatos tienen patrones únicos en su
            pelaje.
          </p>

          <button className="border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition">
            Ver más datos curiosos
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=800&auto=format&fit=crop"
            alt="Perro"
            className="w-72 h-72 object-cover rounded-full"
          />
        </div>
      </section>

      {/* ADOPCIONES */}
      <section
        className="relative py-24 px-6 md:px-16 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1400&auto=format&fit=crop')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-md">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              ¿En qué animal está interesado?
            </h2>

            <div className="w-40 h-1 bg-[#F28C28] mt-4"></div>
          </div>

          <div className="flex gap-6 flex-wrap justify-center">
            {/* PERROS */}
            <div className="bg-white rounded-3xl p-6 w-52 shadow-xl text-center">
              <div className="text-7xl mb-4">🐶</div>

              <h3 className="text-4xl font-semibold mb-6">Perros</h3>

              <button className="bg-[#F28C28] hover:bg-orange-600 text-white px-8 py-2 rounded-lg font-bold">
                Ir ➤
              </button>
            </div>

            {/* GATOS */}
            <div className="bg-white rounded-3xl p-6 w-52 shadow-xl text-center">
              <div className="text-7xl mb-4">🐱</div>

              <h3 className="text-4xl font-semibold mb-6">Gatos</h3>

              <button className="bg-[#F28C28] hover:bg-orange-600 text-white px-8 py-2 rounded-lg font-bold">
                Ir ➤
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-20 px-6 md:px-16 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
          ¿Qué es Refugio Digital?
        </h2>

        <div className="bg-black h-[400px] max-w-5xl mx-auto rounded-lg flex items-center justify-center">
          <button className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-5xl hover:scale-110 transition">
            ▶️
          </button>
        </div>
      </section>

      {/* AYUDA */}
      <section className="py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-16">
        {/* IMAGENES */}
        <div className="flex items-end gap-4 relative">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-gray-400 rounded-full"></div>

          <img
            src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=600&auto=format&fit=crop"
            alt="Perro"
            className="w-40 h-56 object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=600&auto=format&fit=crop"
            alt="Perro"
            className="w-40 h-72 object-cover rounded-2xl"
          />
        </div>

        {/* BOTONES */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-center">
            ¿Te gustaría ayudarnos?
          </h2>

          <div className="flex gap-8 flex-wrap justify-center">
            {/* REPORTAR */}
            <button className="bg-white shadow-xl rounded-3xl p-8 w-48 hover:-translate-y-2 transition">
              <h3 className="font-bold text-2xl mb-4">Reportar</h3>

              <div className="text-6xl">📢</div>
            </button>

            {/* DONAR */}
            <button className="bg-white shadow-xl rounded-3xl p-8 w-48 hover:-translate-y-2 transition">
              <h3 className="font-bold text-2xl mb-4">Donar</h3>

              <div className="text-6xl">🤲</div>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}