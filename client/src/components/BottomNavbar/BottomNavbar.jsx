import './BottomNavbar.css'
import { Link } from 'react-router-dom'

import { useState, useEffect } from 'react'
import {
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  HomeIcon,
  BriefcaseIcon,
} from '../Icons/Icons.jsx'

import '../SidebarResponsive/SidebarResponsive.css'
function BottomNavbar() {
  const [isOffCanvasOpen, setIsOffCanvasOpen] = useState(false)

  const toggleOffCanvas = () => {
    setIsOffCanvasOpen(!isOffCanvasOpen)
  }
  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0)
    }

    window.addEventListener('hashchange', handleRouteChange)

    return () => {
      window.removeEventListener('hashchange', handleRouteChange)
    }
  }, [])

  return (
    <nav className="bottom-navbar">
      <ul className="items">
        <li className="container-items-navbar">
          <button onClick={toggleOffCanvas} className="icon-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="bi bi-grid-3x3-gap-fill icon-navbar"
              viewBox="0 0 16 16"
            >
              <path d="M1 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2zM1 7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V7zM1 12a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2zm5 0a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2z" />
            </svg>
          </button>
        </li>
      </ul>

      {isOffCanvasOpen && (
        <div className="off-canvas-overlay">
          <div className="off-canvas open">
            <ul>
              <Link to="/" onClick={() => setIsOffCanvasOpen(false)}>
                <li className="container-item-individual texto-semibold">
                  <HomeIcon />
                  <p className="texto-violeta">Inicio</p>
                </li>
              </Link>
              <Link
                to="publicaciones"
                onClick={() => setIsOffCanvasOpen(false)}
              >
                <li className="container-item-individual texto-semibold">
                  <PublicationIcon />
                  <p className="texto-violeta">Publicaciones</p>
                </li>
              </Link>
              <Link>
                <li className="container-item-individual texto-semibold">
                  <InstitutionIcon />
                  <p className="texto-violeta">Institución</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="nuestra-historia"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Nuestra historia
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="autoridades"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Autoridades
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="documentos"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Documentos
                    </Link>
                  </li>
                </ul>
              </Link>

              <Link
                to="practicas-profesionalizantes"
                onClick={() => setIsOffCanvasOpen(false)}
              >
                <li className="container-item-individual texto-semibold">
                  <BriefcaseIcon />
                  <p className="texto-violeta">Prácticas Profesionalizantes</p>
                </li>
              </Link>

              <Link>
                <li className="container-item-individual texto-semibold">
                  <BookIcon />
                  <p className="texto-violeta">Plan de estudio</p>
                </li>
                <ul className="container-subitems">
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="computacion"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Computación
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="gao"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      GAO
                    </Link>
                  </li>
                  <li className="fondo">
                    <Link
                      className="subitem texto-semibold texto-violeta py-0 pl-4"
                      to="ciclo-basico"
                      onClick={() => setIsOffCanvasOpen(false)}
                    >
                      Ciclo básico
                    </Link>
                  </li>
                </ul>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  )
}

export default BottomNavbar
