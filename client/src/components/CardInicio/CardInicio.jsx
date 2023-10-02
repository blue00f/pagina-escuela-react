import { Link } from 'react-router-dom'
import './CardInicio.css'

function CardInicio({ titulo, descripcion, imagen, url }) {
  return (
    <Link
      to={url}
      className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div className="contenedor-svg-inicio px-4">{imagen}</div>
      <div className="py-4 px-2">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-texto-violeta">
          {titulo}
        </h5>
        <p className="mb-2 font-normal text-texto-violeta">{descripcion}</p>
      </div>
    </Link>
  )
}

export default CardInicio
