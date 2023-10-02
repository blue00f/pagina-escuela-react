/* eslint-disable react/no-unescaped-entities */
import './NuestraHistoria.css'

function NuestraHistoria() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Nuestra historia</h2>
      </div>
      <div className="my-5 md:mx-20 px-10 py-3 bg-white">
        <div className="my-3">
          <h2 className="mb-2 text-4xl font-medium text-texto-violeta">
            Origen
          </h2>
          <p className="text-texto-violeta">
            La escuela se creó en 1894 como "Fundación Santa Marta". El 18 de
            octubre cumplieron 102 años de la imposición del nombre "Dolores
            Lavalle de Lavalle", que se realizó en 1908.
            <br />
            <br />
            Dolores Lavalle de Lavalle es el nombre de la fundadora. Ella era
            hija del famoso general Juan Lavalle. Era una dama de la sociedad,
            concertista de piano, una mujer muy culta y dedicada a tareas de
            beneficencia. Colaboró con la Fundación del Hospital de Niños
            “Ricardo Gutiérrez” y con la creación de la Casa Cuna.
            <br />
            <br />
            En el hall de entrada de nuestra escuela se encuentra su retrato.
            Ella pensaba que las mujeres de menores recursos tenían que aprender
            algún oficio y tener algún conocimiento que les permitiera trabajar,
            defenderse económicamente en la vida. Su idea era brindarles una
            opción más de educación, y por eso fundó una sociedad llamada “Santa
            Marta”, en la cual se enseñaba, entre otras, disciplinas
            consideradas del género femenino en aquella época, corte y
            confección.
          </p>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="m-1 flex flex-wrap flex-col md:flex-row content-center md:-m-2">
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-96 w-fit rounded-lg object-cover object-center"
                    src="./foto-dolores-1.jpg"
                  />
                </div>
              </div>
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-96 w-fit rounded-lg object-cover object-center"
                    src="./foto-dolores-2.jpg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NuestraHistoria
