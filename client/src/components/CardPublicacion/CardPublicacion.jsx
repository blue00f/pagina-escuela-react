import PropTypes from 'prop-types'

function formatDate(dateStr) {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', options)
}

function CardPublicacion({ title, content, dateUploaded }) {
  const formattedDate = formatDate(dateUploaded)
  return (
    <a href="#">
      <div className="contenedor-img">
        <img src="./fotoEscuela.jpg" alt="Entrada de la escuela" />
        <div className="descripcion-superior-div">
          <h3 className="texto-bold">{title}</h3>
          <p className="texto-regular">{content}</p>
        </div>
        <div className="descripcion-inferior-div">
          <p className="texto-bold">{formattedDate}</p>
          <p className="texto-bold">ET N° 07</p>
        </div>
      </div>
    </a>
  )
}

CardPublicacion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  dateUploaded: PropTypes.string,
}

export default CardPublicacion
