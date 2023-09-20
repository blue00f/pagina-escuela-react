import "./BottomNavbar.css";
import { Link } from "react-router-dom";
 
import React, { useState, useEffect } from "react";
import {
  CloseIcon,
  HomeIcon,
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  QuestionIcon,
  HamburguerIcon,
} from '../Icons/Icons.jsx';

import '../SidebarResponsive/SidebarResponsive.css';
function BottomNavbar() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false);
 
  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen);
  };
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0); // Hace scroll al principio de la página al cambiar de ruta
    };

    // Agrega un escuchador de eventos para el cambio de ruta
    window.addEventListener('hashchange', handleRouteChange);

    // Limpia el escuchador cuando el componente se desmonta
    return () => {
      window.removeEventListener('hashchange', handleRouteChange);
    };
  }, []);
   

  return (
    <nav class="bottom-navbar">
      <ul class="items">
        <li class="container-items-navbar">
          <Link to="preguntas-frecuentes">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="bi bi-question-circle icon-navbar"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
            </svg>
          </Link>
        </li>

        <li class="container-items-navbar">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="bi bi-house-door-fill icon-navbar"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          </Link>
        </li>

        <li className="container-items-navbar">
            
          <button onClick={toggleOffCanvas}   className="icon-button">

            <svg xmlns="http://www.w3.org/2000/svg" className="bi bi-grid-3x3-gap-fill" viewBox="0 0 16 16">
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>

          </button>
        </li>
      </ul>

      {isOffCanvasOpen && (
        <div className="off-canvas-overlay">
          <div className="off-canvas open">
            
            <ul>
               
              <Link to="publicacionesSL " onClick={() => setIsOffCanvasOpen(false)}>
                <li className="container-item-individual texto-semibold">
                  <PublicationIcon />
                  <p className="texto-violeta">Publicaciones</p>
                </li> 
              </Link>
              <Link  >
                <li className="container-item-individual texto-semibold">
                  <InstitutionIcon />
                  <p className="texto-violeta">Institución</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="nuestra-historia"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Nuestra historia
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="autoridades"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Autoridades
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="galeria"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Galería
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="inscripciones"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Inscripciones
                    </Link>
                  </li>
                </ul>
              </Link>

              <a  >
                <li className="container-item-individual texto-semibold">
                  <BookIcon />
                  <p className="texto-violeta">Plan de estudio</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="computacion"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Computación
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="gao"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      GAO
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta"
                      to="ciclo-basico"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Ciclo básico
                    </Link>
                  </li>
                </ul>
              </a>

               
            </ul>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default BottomNavbar;
