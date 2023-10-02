import { Link } from 'react-router-dom'

import SidebarTop from './SidebarTop.jsx'
import SidebarLink from './SidebarLink.jsx'
import { sections } from '../../utils/setSections.jsx'
import './Sidebar.css'

function Sidebar({ isLoggedIn, handleLogout }) {
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
  )
}

export default Sidebar
