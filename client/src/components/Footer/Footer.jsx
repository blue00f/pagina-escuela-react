import { InstagramIcon, FacebookIcon } from '../Icons/Icons';
import { Link } from 'react-router-dom';
import './FooterResponsive.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-menus">
        <div className="footer-content-container">
          <img
            className="logo-footer"
            src="/et7.png"
            width="49"
            height="65"
            alt="Logo escuela"
          />
          <p className="item-footer texto-bold">
            Zavaleta 204, Parque Patricios, CABA
          </p>
          <p className="footer-info texto-bold">(011) 4912-0331</p>
          <p className="footer-info texto-bold">(011) 4912-3792</p>
          <p className="footer-info texto-bold">det7@de5@bue.edu.ar</p>
        </div>
        <div className="footer-content-container">
          <span className="menu-title texto-bold">Principal</span>
          <Link to="/" className="menu-item-footer texto-bold">
            Inicio
          </Link>
          <Link to="publicaciones" className="menu-item-footer texto-bold">
            Publicaciones
          </Link>
          <Link to="computacion" className="menu-item-footer texto-bold">
            Computación
          </Link>
          <Link to="gao" className="menu-item-footer texto-bold">
            GAO
          </Link>
        </div>
        <div className="footer-content-container">
          <span className="menu-title texto-bold">Sobre la escuela</span>
          <Link to="nuestra-historia" className="menu-item-footer texto-bold">
            Nuestra historia
          </Link>
          <Link to="autoridades" className="menu-item-footer texto-bold">
            Autoridades
          </Link>
          <Link to="galeria" className="menu-item-footer texto-bold">
            Galería
          </Link>
          <Link to="inscripciones" className="menu-item-footer texto-bold">
            Inscripciones
          </Link>
          <Link
            to="preguntas-frecuentes"
            className="menu-item-footer texto-bold"
          >
            Preguntas frecuentes
          </Link>
        </div>
        <div className="footer-content-container">
          <span className="menu-title texto-bold">Redes sociales</span>

          <div className="social-container">
            <a
              href="https://www.instagram.com/et7.oficial/?hl=es"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/people/Escuela-T%C3%A9cnica-N-7-Dolores-Lavalle-de-Lavalle/100077297452994/"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <span className="copyright">
          Copyright ET7 Dolores Lavalle de Lavalle
        </span>
      </div>
    </footer>
  );
}

export default Footer;
