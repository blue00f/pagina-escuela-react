import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Sidebar from '../Sidebar/Sidebar.jsx'
import SidebarResponsive from '../SidebarResponsive/SidebarResponsive.jsx'
import BottomNavbar from '../BottomNavbar/BottomNavbar.jsx'
import Footer from '../Footer/Footer'

import LoginLayout from '../LoginLayout/LoginLayout'
import Inicio from '../Sections/Inicio/Inicio.jsx'
import PublicacionesSL from '../Sections/Publicaciones/PublicacionesSL.jsx'
import PublicacionesCL from '../Sections/Publicaciones/PublicacionesCL.jsx'

import NuestraHistoria from '../Sections/Institucion/NuestraHistoria.jsx'
import Autoridades from '../Sections/Institucion/Autoridades.jsx'
import Documentos from '../Sections/Institucion/Documentos.jsx'

import PracticasProfesionalizantes from '../Sections/PractIcasProfesionalizantes/PracticasProfesionalizantes.jsx'

import CicloBasico from '../Sections/PlanDeEstudio/CicloBasico.jsx'
import Gao from '../Sections/PlanDeEstudio/Gao.jsx'
import Computacion from '../Sections/PlanDeEstudio/Computacion.jsx'

import PreguntasFrecuentes from '../Sections/PreguntasFrecuentes/PreguntasFrecuentes.jsx'
import NotFound from '../Sections/NotFound/NotFound.jsx'
import './LoginButton.css'

function MainLayout() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [hasRedirected, setHasRedirected] = useState(false)

  const [isLaptopResolution, setIsLaptopResolution] = useState(
    window.innerWidth <= 1470
  )
  const [isCellResolution, setIsCellResolution] = useState(
    window.innerWidth <= 480
  )

  function RenderRedirectToPublicacionesCL({ isLoggedIn }) {
    const navigate = useNavigate()
    useEffect(() => {
      if (isLoggedIn && !hasRedirected) {
        navigate('/publicaciones-logged-in')
        setHasRedirected(true)
      }
    }, [isLoggedIn, navigate])

    return null
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setHasRedirected(false)
    navigate('/')
  }
  const handleResize = () => {
    const currentWindowWidth = window.innerWidth

    if (currentWindowWidth <= 480) {
      setIsLaptopResolution(false)
      setIsCellResolution(true)
    } else if (currentWindowWidth <= 1470) {
      setIsLaptopResolution(true)
      setIsCellResolution(false)
    } else {
      setIsLaptopResolution(false)
      setIsCellResolution(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.addEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="grid-container">
      {isLaptopResolution ? (
        <SidebarResponsive
          isLoggedIn={isLoggedIn}
          handleLogout={handleLogout}
        />
      ) : (
        <Sidebar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      )}
      <RenderRedirectToPublicacionesCL isLoggedIn={isLoggedIn} />

      <Routes>
        <Route exact path="/" element={<Inicio />} />
        <Route
          exact
          path="/login"
          element={
            <LoginLayout
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        />

        <Route
          exact
          path="/publicaciones"
          element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />}
        />
        <Route
          exact
          path="/publicaciones-logged-in"
          element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />}
        />
        <Route exact path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route exact path="/autoridades" element={<Autoridades />} />
        <Route exact path="/documentos" element={<Documentos />} />

        <Route
          exact
          path="/practicas-profesionalizantes"
          element={<PracticasProfesionalizantes />}
        />

        <Route exact path="/computacion" element={<Computacion />} />
        <Route exact path="/gao" element={<Gao />} />
        <Route exact path="/ciclo-basico" element={<CicloBasico />} />
        <Route
          exact
          path="/preguntas-frecuentes"
          element={<PreguntasFrecuentes />}
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default MainLayout
