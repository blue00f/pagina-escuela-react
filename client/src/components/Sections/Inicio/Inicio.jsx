import Carousel from '../../Carousel/Carousel.jsx'
import CardInicio from '../../CardInicio/CardInicio'
import {
  PublicationIcon,
  QuestionIcon,
  BriefcaseIcon,
  PdfIcon,
  AuthorityIcon,
  ComputingIcon,
  GaoIcon,
  HistoryIcon,
} from '../../Icons/Icons.jsx'
import './inicio.css'

function Inicio() {
  return (
    <section className="content-container">
      <Carousel />
      <div className="my-8 flex max-2xl:flex-col flex-wrap justify-center items-center">
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Publicaciones'}
            descripcion={
              'Accede a las publicaciones de la escuela para conocer las noticias más recientes.'
            }
            imagen={<PublicationIcon />}
            url={'/publicaciones'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Prácticas Profesionalizantes'}
            descripcion={
              'Conocé los proyectos que realizaron los estudiantes de último año en Computación o Gestión y Administración de las Organizaciones.'
            }
            imagen={<BriefcaseIcon />}
            url={'/practicas-profesionalizantes'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Documentos'}
            descripcion={
              'Si sos un docente o alguien de la comunidad educativa, entrá acá para descargar los PDF.'
            }
            imagen={<PdfIcon />}
            url={'/documentos'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Autoridades'}
            descripcion={
              'Conocé a los rectores, vicerector y secretarias que se encargan de manejar la escuela técnica.'
            }
            imagen={<AuthorityIcon />}
            url={'/autoridades'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Computación'}
            descripcion={
              'Entrá acá para conocer las materias de la especialidad computación.'
            }
            imagen={<ComputingIcon />}
            url={'/computacion'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Gestión y Administración de las Organizaciones'}
            descripcion={
              'Entrá acá para conocer las materias de la especialidad GAO.'
            }
            imagen={<GaoIcon />}
            url={'/gao'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Nuestra historia'}
            descripcion={
              'Conocé la historia del colegio y a la fundadora Dolores Lavalle.'
            }
            imagen={<HistoryIcon />}
            url={'/nuestra-historia'}
          />
        </div>
        <div className="flex xl:w-1/2 flex-wrap justify-center items-center my-2">
          <CardInicio
            titulo={'Preguntas frecuentes'}
            descripcion={
              'Accedé acá por si tenés alguna duda acerca de la inscripción de 1er año.'
            }
            imagen={<QuestionIcon />}
            url={'/preguntas-frecuentes'}
          />
        </div>
      </div>
    </section>
  )
}

export default Inicio
