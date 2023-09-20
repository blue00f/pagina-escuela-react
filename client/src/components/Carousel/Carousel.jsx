import { ArrowCarouselRight } from '../Icons/Icons'
import { ArrowCarouselLeft } from '../Icons/Icons'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Carousel.css'

function Carousel() {
  return (
    <div className="content d-flex justify-content-center">
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators carousel-buttons-down">
          <button
            className="boton-carousel active"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="boton-carousel"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="boton-carousel"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            className="boton-carousel"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./fotoEscuela.jpg"
              className="d-block w-100"
              alt="Foto escuela"
            />
            <div className="alineamiento carousel-caption d-none d-md-block">
              <h5 className="texto-bold">
                ESCUELA TÉCNICA N°07
                <br />
                DOLORES LAVALLE DE LAVALLE
              </h5>
              <p className="texto-regular">
                Somos una institución educativa comprometida en brindar una
                formación técnica de calidad para preparar a los estudiantes en
                el mundo laboral actual. Contamos con docentes calificados,
                instalaciones modernas y tecnología avanzada. Promovemos el
                desarrollo integral y valores como responsabilidad, trabajo en
                equipo y espíritu emprendedor.
              </p>
            </div>
            <div className="boton-inicio">
              <Link to="nuestra-historia" className="boton1">
                <span className="texto-semibold">Ver más</span>
              </Link>
              <Link to="preguntas-frecuentes" className="boton2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                  <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
                  <rect x="11" y="17" width="2" height="2" rx="1" />
                </svg>
                <span className="textoBoton2 texto-semibold">Ayuda</span>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./fotoComputacion.jpg"
              className="d-block w-100"
              alt="Computación"
            />
            <div className="alineamiento carousel-caption d-none d-md-block">
              <h5 className="texto-bold">COMPUTACIÓN</h5>
              <p className="texto-regular">
                La computación ofrece a los estudiantes habilidades técnicas,
                pensamiento lógico y creativo, preparación para el mercado
                laboral y alfabetización digital, fundamentales para el éxito en
                nuestra sociedad digital en constante evolución.
              </p>
            </div>
            <div className="boton-inicio">
              <Link to="computacion" className="boton1">
                <span className="texto-semibold">Ver más</span>
              </Link>
              <Link to="preguntas-frecuentes" className="boton2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                  <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
                  <rect x="11" y="17" width="2" height="2" rx="1" />
                </svg>
                <span className="textoBoton2 texto-semibold">Ayuda</span>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./fotoGAO.jpg"
              className="d-block w-100"
              alt="Gestión y administración de las organizaciones"
            />
            <div className="alineamiento carousel-caption d-none d-md-block">
              <h5 className="texto-bold">
                GESTIÓN Y ADMINISTRACIÓN DE LAS ORGANIZACIONES
              </h5>
              <p className="texto-regular">
                La administración de empresas brinda habilidades gerenciales,
                conocimientos empresariales, liderazgo y gestión eficiente de
                recursos, fundamentales para el éxito empresarial.
              </p>
            </div>
            <div className="boton-inicio">
              <Link to="gao" className="boton1">
                <span className="texto-semibold">Ver más</span>
              </Link>
              <Link to="preguntas-frecuentes" className="boton2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="44"
                  height="44"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                  <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
                  <rect x="11" y="17" width="2" height="2" rx="1" />
                </svg>
                <span className="textoBoton2 texto-semibold">Ayuda</span>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="./fotoInscripcion.jpg"
              className="d-block w-100"
              alt="Inscripciones"
            />
            <div className="alineamiento carousel-caption d-none d-md-block">
              <h5 className="texto-bold">INSCRIPCIONES</h5>
              <p className="texto-regular">
                ¡Prepara tu futuro técnico inscribiéndote en la Escuela Técnica
                N°07 Dolores Lavalle de Lavalle! Experimenta una formación de
                excelencia en un entorno moderno y equipado con tecnología de
                última generación. Nuestro equipo docente altamente calificado
                estará a tu lado, guiándote en el camino hacia el éxito
                profesional.
              </p>
            </div>
            <div className="boton-inicio">
              <Link to="inscripciones" className="boton1">
                <span className="texto-semibold">Ver más</span>
              </Link>
              <Link to="preguntas-frecuentes" className="boton2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  width="44"
                  height="44"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                  <path d="M12.717,5.063A4,4,0,0,0,8,9a1,1,0,0,0,2,0,2,2,0,0,1,2.371-1.967,2.024,2.024,0,0,1,1.6,1.595,2,2,0,0,1-1,2.125A3.954,3.954,0,0,0,11,14.257V15a1,1,0,0,0,2,0v-.743a1.982,1.982,0,0,1,.93-1.752,4,4,0,0,0-1.213-7.442Z" />
                  <rect x="11" y="17" width="2" height="2" rx="1" />
                </svg>
                <span className="textoBoton2 texto-semibold">Ayuda</span>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <ArrowCarouselLeft />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <ArrowCarouselRight />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
