import './NuestraHistoria.css'

function NuestraHistoria() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Nuestra historia</h2>
      </div>
      <div className="contenedor-inscripcion">
        <div className="contenedor-texto">
          <h3 className="texto-violeta">Origen</h3>
          <p className="texto-violeta">
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
        </div>
        <div className="contenedor-img-nuestra-historia">
          <img src="./fotoRetrato.jpg " alt="" />
        </div>
      </div>
    </section>
  )
}

export default NuestraHistoria
