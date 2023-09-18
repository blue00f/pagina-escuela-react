import CardAutoridad from '../../CardAutoridad/CardAutoridad'
import styles from './Autoridades.module.css'

function Autoridades() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Autoridades</h2>
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente'}
          nombre={'Cosme Fulanito'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Vicerrectora'}
          nombre={'Cosme Fulanito'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rector TM'}
          nombre={'Cosme Fulanito'}
        />
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rector TT'}
          nombre={'Cosme Fulanito'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Jefe General de Enseñanza Práctica'}
          nombre={'Cosme Fulanito'}
        />
      </div>
    </section>
  )
}

export default Autoridades
