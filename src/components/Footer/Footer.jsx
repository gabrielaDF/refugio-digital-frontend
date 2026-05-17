import "./Footer.css";
 
function Footer() {
  return (
<footer className="footer">
<div className="footer-container">
        {/* LOGO */}
<div className="footer-logo">
<img
            src="https://res.cloudinary.com/dn6wibef0/image/upload/v1761692506/refugio%20digital/logo_refugio_digital_ytkc5v.png"
            alt="Refugio Digital"
          />
<h2>Refugio Digital</h2>
 
          <p className="footer-texto">
            Conectamos mascotas con hogares llenos de amor 🐾
</p>
</div>
 
        {/* REDES SOCIALES */}
<div className="footer-redes">
<h3>Síguenos</h3>
 
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
>
            Facebook
</a>
 
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
>
            Instagram
</a>
 
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
>
            YouTube
</a>
 
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
>
            TikTok
</a>
</div>
 
        {/* CONTACTO */}
<div className="footer-contacto">
<h3>Contacto</h3>
 
          <p>📍 Colombia</p>
<p>📧 refugiodigital@gmail.com</p>
<p>📞 +57 300 000 0000</p>
</div>
</div>
 
      {/* COPYRIGHT */}
<div className="footer-copy">
<p>© 2025 Refugio Digital - Todos los derechos reservados.</p>
</div>
</footer>
  );
}
 
export default Footer;