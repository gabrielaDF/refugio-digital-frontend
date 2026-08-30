import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import Adopciones from "./pages/Adopciones";
import Reportes from "./pages/Reportes";
import CrearReporte from "./pages/CrearReporte";
import AcercaDe from "./pages/AcercaDe";
import AuthForm from "./pages/AuthForm";
//import Blog from "./pages/Blog";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopciones" element={<Adopciones />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/crear-reporte" element={<CrearReporte />} />
        <Route path="/acerca-de" element={<AcercaDe />} />
        <Route path="/login" element={<AuthForm />} />
        {/* <Route path="/Blog" element={<Blog />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
