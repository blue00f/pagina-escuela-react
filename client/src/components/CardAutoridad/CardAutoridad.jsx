import styles from './CardAutoridad.module.css'

function CardAutoridad({ foto, cargo, nombre }) {
  return (
    <div className={styles.contenedorImgAutoridad}>
      <img className={styles.imagenAutoridad} src={foto} alt="Foto usuario" />
      <p className="texto-semibold">{cargo}</p>
      <p className="texto-regular">{nombre}</p>
    </div>
  )
}

export default CardAutoridad
