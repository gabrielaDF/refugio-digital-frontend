import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import Adopciones from "./pages/Adopciones";
//import Reportes from "./pages/Reportes";
//import Historias from "./pages/Historias";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopciones" element={<Adopciones />} />

        {/* <Route path="/reportes" element={<Reportes />} />

        <Route path="/historias" element={<Historias />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;