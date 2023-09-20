import { RectangleIcon } from '../Icons/Icons.jsx'
import { Link } from 'react-router-dom'

function SidebarTop() {
  return (
    <>
      <Link className="container-logo" to="/">
        <img src="/et7.png" width={49} height={65} alt="Logo escuela" />
        <RectangleIcon />
        <p className="texto-bold texto-violeta">
          ESCUELA TÉCNICA DOLORES LAVALLE DE LAVALLE
        </p>
      </Link>
    </>
  )
}

export default SidebarTop
