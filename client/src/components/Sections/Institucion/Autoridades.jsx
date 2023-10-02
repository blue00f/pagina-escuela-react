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
          cargo={'Rectora'}
          nombre={'María Laura Torres'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Vicerrectora'}
          nombre={'Patricia Capello'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rector TM'}
          nombre={'Juan de Abreu'}
        />
      </div>
      <div className={styles.contenedorImagenes}>
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Rector TT'}
          nombre={"Silvina De'Aquino"}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Secretaria'}
          nombre={'Andrea Torres'}
        />
      </div>
    </section>
  )
}

export default Autoridades
