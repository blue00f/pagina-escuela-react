import { Route, Routes, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';

import Sidebar from '../Sidebar/Sidebar';
import SidebarResponsive from '../SidebarResponsive/SidebarResponsive';
import Footer from '../Footer/Footer';

import LoginLayout from '../LoginLayout/LoginLayout';
import Inicio from '../Sections/Inicio/Inicio.jsx';
import PublicacionesSL from '../Sections/PublicacionesSinLogin/PublicacionesSL.jsx';
import PublicacionesCL from '../Sections/PublicacionesConLogin/PublicacionesCL.jsx';
import NuestraHistoria from '../Sections/NuestraHistoria/NuestraHistoria.jsx';
import Autoridades from '../Sections/Autoridades/Autoridades.jsx';
import Inscripciones from '../Sections/Inscripciones/Inscripciones.jsx';
import Gao from '../Sections/Gao/Gao.jsx';
import PreguntasFrecuentes from '../Sections/PreguntasFrecuentes/PreguntasFrecuentes.jsx';
import Computacion from '../Sections/Computacion/Computacion.jsx';
import CicloBasico from '../Sections/CicloBasico/CicloBasico.jsx';
import NotFound from '../Sections/NotFound/NotFound.jsx';
import './LoginButton.css';
 

function MainLayout() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasRedirected, setHasRedirected] = useState(false);
  const [isLaptopResolution, setIsLaptopResolution] = useState(
    window.innerWidth <= 1470
  );
  function RenderRedirectToPublicacionesCL({ isLoggedIn }) {
    const navigate = useNavigate();
    useEffect(() => {
      if (isLoggedIn && !hasRedirected) {
        navigate('/PublicacionesCL');
        setHasRedirected(true);
      }
    }, [isLoggedIn, navigate, hasRedirected]);
  
    return null;
  }
   
  const handleLogout = () => {
    setIsLoggedIn(false);
    setHasRedirected(false);
    navigate('/'); 
  }
  const handleResize = () => {
    setIsLaptopResolution(window.innerWidth <= 1470);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className="grid-container">
      {isLaptopResolution ? <SidebarResponsive /> : <Sidebar />}
      <RenderRedirectToPublicacionesCL isLoggedIn={isLoggedIn} />
       
       

      <Routes>
    
        <Route exact path="/" element={<Inicio />} />
        <Route exact path="/login" element={<LoginLayout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />

        <Route exact path="/PublicacionesSL" element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />} />
        <Route exact path="/PublicacionesCL" element={isLoggedIn ? <PublicacionesCL /> : <PublicacionesSL />} />
        <Route exact path="/nuestra-historia" element={<NuestraHistoria />} />
        <Route exact path="/autoridades" element={<Autoridades />} />
        <Route exact path="/inscripciones" element={<Inscripciones />} />
        <Route exact path="/gao" element={<Gao />} />
        <Route exact path="/preguntas-frecuentes" element={<PreguntasFrecuentes/>}/>
       <Route exact path="/computacion" element={<Computacion />} />
        <Route exact path="/ciclo-basico" element={<CicloBasico />} />
        
        <Route exact path="*" element={<NotFound />} />
      </Routes>

      <Sidebar isLoggedIn={isLoggedIn} handleLogout={handleLogout} username={username} />
      <SidebarResponsive isLoggedIn={isLoggedIn} handleLogout={handleLogout} username={username} />

      <Footer />
    </div>
  );
}

 
export default MainLayout;
