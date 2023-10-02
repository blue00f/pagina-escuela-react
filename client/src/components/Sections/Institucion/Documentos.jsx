import CardDocumento from '../../CardDocumento/CardDocumento'
import styles from './Documentos.module.css'

function Documentos() {
  return (
    <div className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Documentos</h2>
      </div>
      <div className={styles.seccionDocumentos}>
        <h3 className={styles.subtituloDocumentos}>Comunidad educativa</h3>
        <div className={styles.contenedorDocumentos}>
          <CardDocumento></CardDocumento>
          <CardDocumento></CardDocumento>
          <CardDocumento></CardDocumento>
        </div>
      </div>
      <hr />
      <div className={styles.seccionDocumentos}>
        <h3 className={styles.subtituloDocumentos}>Docentes</h3>
        <div className={styles.contenedorDocumentos}>
          <CardDocumento></CardDocumento>
          <CardDocumento></CardDocumento>
          <CardDocumento></CardDocumento>
        </div>
      </div>
    </div>
  )
}

export default Documentos
