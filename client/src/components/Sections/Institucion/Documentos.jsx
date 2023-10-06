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
          <CardDocumento
            link={'./ficha-salud.pdf'}
            descripcion={'Ficha salud para educación física.'}
          ></CardDocumento>
          <CardDocumento
            link={'./plan-estudios.pdf'}
            descripcion={'Plan de estudios de todas las especialidades'}
          ></CardDocumento>
        </div>
      </div>
      <div className={styles.seccionDocumentos}>
        <h3 className={styles.subtituloDocumentos}>Docentes</h3>
        <div className={styles.contenedorDocumentos}>
          <CardDocumento
            link={'http://sistemas1.buenosaires.edu.ar/wsad/'}
            descripcion={'Sistema de Gestión Educativa.'}
          ></CardDocumento>
          <CardDocumento
            link={'./informe-personal-docente.pdf'}
            descripcion={'Instrumento de evaluación para docente y profesor.'}
          ></CardDocumento>
          <CardDocumento
            link={'./informe-personal-maestros.pdf'}
            descripcion={
              'Informe de evaluación del desempeño para maestros, ayudantes técnicos, bibliotecarios y ayudante de educación física.'
            }
          ></CardDocumento>
        </div>
        <div className={styles.contenedorDocumentos}>
          <CardDocumento
            link={'./informe-personal-preceptores'}
            descripcion={
              'Informe de evaluación del desempeño para jefe de preceptores, subjefe de preceptores y preceptores.'
            }
          ></CardDocumento>
          <CardDocumento
            link={'./informe-personal-de-conduccion.pdf'}
            descripcion={
              'Informe de evaluación del desempeño del personal para los cargos de conducción.'
            }
          ></CardDocumento>
        </div>
      </div>
    </div>
  )
}

export default Documentos
