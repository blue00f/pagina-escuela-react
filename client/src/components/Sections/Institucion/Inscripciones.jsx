import './Inscripciones.css'

function Inscripciones() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Inscripciones</h2>
      </div>
      <div className="contenedor-inscripcion">
        <div className="contenedor-texto">
          <h3 className="texto-violeta">Información</h3>
          <p className="texto-violeta">
            Principalmente para poder anotar al estudiante en nuestra
            institución, se requiere verificar la fecha en las cuales comienzan
            las inscripciones para el respectivo curso del estudiante.
            <br />
            <br />
            Si el estudiante es anotado en 1er año, como requisito para proceder
            con la inscripción, se necesitará:
          </p>
          <ul>
            <li className="texto-violeta">
              La documentación de la terminación de la escuela primaria
              terminada.
            </li>
            <li className="texto-violeta">
              La fotocopia del D.N.I (Parte delantera y trasera).
            </li>
            <li className="texto-violeta">La boleta del domicilio.</li>
          </ul>
          <p className="texto-violeta">
            En caso de que el estudiante quiera inscribirse a cualquiera de los
            otros cursos, una vez concurrido 1er año, se le guardará su vacante
            respectiva y se revisará su boletín para verificar que todo esté en
            orden, una vez hecho todo el trámite, el alumno pasará a promocionar
            para el siguiente año correspondiente.
          </p>
        </div>
        <div className="contenedor-fechas">
          <h3>Fechas</h3>
          <ul className="texto-semibold">
            <li className="texto-violeta">
              22/02/2024 - Miércoles de 7.30 a 11.50 o 13.00 a 16.00
            </li>
            <li className="texto-violeta">
              23/02/2024 - Jueves de 7.30 a 11.50 o 13.00 a 16.00
            </li>
            <li className="texto-violeta">
              24/02/2024 - Viernes de 13.00 a 16.00
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Inscripciones
