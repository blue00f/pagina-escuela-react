import { getFormattedDate } from '../../utils/getFormattedDate'

function CardPublicacion({ title, content, dateUploaded }) {
  const formattedDate = getFormattedDate(dateUploaded)
  return (
    <a href="/">
      <div className="contenedor-img">
        <img src="./foto-escuela-2.jpg" alt="Entrada de la escuela" />
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

export default CardPublicacion
