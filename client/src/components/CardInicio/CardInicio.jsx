import { Link } from 'react-router-dom'
import './CardInicio.css'

function CardInicio({ titulo, descripcion, imagen, url }) {
  return (
    <Link
      to={url}
      className="flex flex-col items-center bg-white rounded-lg shadow sm:flex-row sm:max-w-xl"
    >
      <div className="contenedor-svg-inicio px-4">{imagen}</div>
      <div className="contenedor-card-inicio py-4 px-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-texto-violeta">
          {titulo}
        </h5>
        <p className="mb-2 font-normal text-texto-violeta">{descripcion}</p>
      </div>
    </Link>
  )
}

export default CardInicio
