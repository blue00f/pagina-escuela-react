import Carousel from '../../Carousel/Carousel'
import CardInicio from '../../CardInicio/CardInicio'
import './inicio.css'

function Inicio() {
  return (
    <section className="content-container">
      <Carousel />
      <div className="grid grid-cols-2 gap-6">
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Publicaciones'}
            descripcion={'LasdadaadadadLasdadaadadadLasdadaadadad'}
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Autoridades'}
            descripcion={'LasdadaadadadLasdadaadadadLasdadaadadad'}
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Galería'}
            descripcion={'LasdadaadadadLasdadaadadadLasdadaadadad'}
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Computación'}
            descripcion={'LasdadaadadadLasdadaadadadLasdadaadadad'}
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Gestión y Administración de las Organizaciones'}
            descripcion={'LasdadaadadadLasdadaadadadLasdadaadadad'}
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
        <div className="mx-auto m-2">
          <CardInicio
            titulo={'Creadores de la página'}
            descripcion={
              'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta).'
            }
            imagen={'fotoSecretaria.jpg'}
          />
        </div>
      </div>
    </section>
  )
}

export default Inicio
