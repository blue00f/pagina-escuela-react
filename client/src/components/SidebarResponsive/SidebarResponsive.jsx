import { Link } from 'react-router-dom';
import {
  CloseIcon,
  HomeIcon,
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  QuestionIcon,
  HamburguerIcon,
} from '../Icons/Icons.jsx';
import './SidebarResponsive.css';

function SidebarResponsive({isLoggedIn,handleLogout,username}) {
  return (
    <div className="header">
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
      >
        <HamburguerIcon />
      </button>
      <Link className="container-logo" to="/">
        <img src="et7.png" width="45" height="61" alt="Logo escuela" />
        <p className="texto-bold texto-violeta">
          ESCUELA TÉCNICA DOLORES LAVALLE DE LAVALLE 
        </p>
      </Link>
      <div className="container-button-login">
        {isLoggedIn ? (
          <div className="user-info-responsive">
            <p>Bienvenido, {username}</p>
            <button className="btn btn-primary" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <Link to="login" className="btn btn-primary">
            Iniciar sesión
          </Link>
        )}
      </div>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        tabIndex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div className="offcanvas-header">
          <button
            className="btn"
            type="button"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
        <div className="offcanvas-body">
          <nav className="container-items">
            <ul className="items">
              <Link to="/">
                <li className="container-item-individual texto-semibold">
                  <HomeIcon />
                  <p className="texto-violeta">Inicio</p>
                </li>
              </Link>
              <Link to="publicacionesSL">
                <li className="container-item-individual texto-semibold">
                  <PublicationIcon />
                  <p className="texto-violeta">Publicaciones</p>
                </li>
              </Link>
              <Link href="#">
                <li className="container-item-individual texto-semibold">
                  <InstitutionIcon />
                  <p className="texto-violeta">Institución</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="nuestra-historia"
                    >
                      Nuestra historia
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="autoridades"
                    >
                      Autoridades
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="galeria"
                    >
                      Galería
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="inscripciones"
                    >
                      Inscripciones
                    </Link>
                  </li>
                </ul>
              </Link>

              <a href="#">
                <li className="container-item-individual texto-semibold">
                  <BookIcon />
                  <p className="texto-violeta">Plan de estudio</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="computacion"
                    >
                      Computación
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="gao"
                    >
                      GAO
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="ciclo-basico"
                    >
                      Ciclo básico
                    </Link>
                  </li>
                </ul>
              </a>

              <Link to="preguntas-frecuentes">
                <li className="container-item-individual texto-semibold">
                  <QuestionIcon />
                  <p className="texto-violeta">Preguntas frecuentes</p>
                </li>
              </Link>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default SidebarResponsive;
