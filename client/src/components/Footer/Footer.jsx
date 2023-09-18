import { InstagramIcon, FacebookIcon } from '../Icons/Icons'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerMenus}>
        <div className={styles.footerContentContainer}>
          <img
            className={styles.logoFooter}
            src="/et7.png"
            width="49"
            height="65"
            alt="Logo escuela"
          />
          <p className={`${styles.itemFooter} texto-bold`}>
            Zavaleta 204, Parque Patricios, CABA
          </p>
          <p className={`${styles.footerInfo} texto-bold`}>(011) 4912-0331</p>
          <p className={`${styles.footerInfo} texto-bold`}>(011) 4912-3792</p>
          <p className={`${styles.footerInfo} texto-bold`}>
            det7@de5@bue.edu.ar
          </p>
        </div>
        <div className={styles.footerContentContainer}>
          <span className={`${styles.menuTitle} texto-bold`}>Principal</span>
          <Link to="/" className={`${styles.menuItemFooter} texto-bold`}>
            Inicio
          </Link>
          <Link
            to="publicaciones"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Publicaciones
          </Link>
          <Link
            to="computacion"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Computación
          </Link>
          <Link to="gao" className={`${styles.menuItemFooter} texto-bold`}>
            GAO
          </Link>
        </div>
        <div className={styles.footerContentContainer}>
          <span className={`${styles.menuTitle} texto-bold`}>
            Sobre la escuela
          </span>
          <Link
            to="nuestra-historia"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Nuestra historia
          </Link>
          <Link
            to="autoridades"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Autoridades
          </Link>
          <Link to="galeria" className={`${styles.menuItemFooter} texto-bold`}>
            Galería
          </Link>
          <Link
            to="inscripciones"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Inscripciones
          </Link>
          <Link
            to="preguntas-frecuentes"
            className={`${styles.menuItemFooter} texto-bold`}
          >
            Preguntas frecuentes
          </Link>
        </div>
        <div className={styles.footerContentContainer}>
          <span className={`${styles.menuTitle} texto-bold`}>
            Redes sociales
          </span>

          <div className={styles.socialContainer}>
            <a
              href="https://www.instagram.com/et7.oficial/?hl=es"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.facebook.com/people/Escuela-T%C3%A9cnica-N-7-Dolores-Lavalle-de-Lavalle/100077297452994/"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
