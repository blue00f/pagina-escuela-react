import './CardAutoridad.css'
import PropTypes from 'prop-types'

function CardAutoridad({ foto, cargo, nombre }) {
  return (
    <div className="contenedor-img-autoridad">
      <img className="imagen-autoridad" src={foto} alt="Foto usuario" />
      <p className="texto-semibold">{cargo}</p>
      <p className="texto-regular">{nombre}</p>
    </div>
  )
}

CardAutoridad.propTypes = {
  foto: PropTypes.string,
  cargo: PropTypes.string,
  nombre: PropTypes.string,
}

export default CardAutoridad
