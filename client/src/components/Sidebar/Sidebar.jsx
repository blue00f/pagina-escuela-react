import { Link } from 'react-router-dom';

import {
  HomeIcon,
  PublicationIcon,
  InstitutionIcon,
  BookIcon,
  QuestionIcon,
} from '../Icons/Icons.jsx';

import SidebarTop from './SidebarTop.jsx';
import SidebarLink from './SidebarLink.jsx';
import './Sidebar.css';

const sections = [
  {
    icon: <HomeIcon />,
    label: 'Inicio',
    url: '/',
    hasSubsections: false,
    subsections: [],
  },
  {
    icon: <PublicationIcon />,
    label: 'Publicaciones',
    url: 'publicacionesSL',
    hasSubsections: false,
    subsections: [],
  },
  {
    icon: <InstitutionIcon />,
    label: 'Institución',
    hasSubsections: true,
    subsections: [
      { label: 'Nuestra historia', url: 'nuestra-historia' },
      { label: 'Autoridades', url: 'autoridades' },
      // { label: 'Galería', url: 'galeria' },
      { label: 'Inscripciones', url: 'inscripciones' },
    ],
  },
  {
    icon: <BookIcon />,
    label: 'Plan de estudio',
    hasSubsections: true,
    subsections: [
      { label: 'Computación', url: 'computacion' },
      { label: 'GAO', url: 'gao' },
      { label: 'Ciclo básico', url: 'ciclo-basico' },
    ],
  },
  {
    icon: <QuestionIcon />,
    label: 'Preguntas frecuentes',
    url: 'preguntas-frecuentes',
    hasSubsections: false,
    subsections: [],
  },
];

function Sidebar({ isLoggedIn, handleLogout  }) {
  return (
    <div className="sidebar-container">
      <SidebarTop />
      
        {isLoggedIn ? (
          <div className="container-button-login"> 
            <button className="btn btn-primary" onClick={handleLogout}>
              Cerrar sesión
            </button>
          </div>
        ) : (
          <div className="container-button-login">
          <Link to="login" className="btn btn-primary">
            Iniciar sesión
          </Link>
          </div>
        )}
     
      <nav className="container-items">
        <ul className="items">
          {sections.map((section, index) => (
            <SidebarLink
              key={index}
              icon={section.icon}
              label={section.label}
              url={section.url}
              hasSubsections={section.hasSubsections}
              subsections={section.subsections}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
