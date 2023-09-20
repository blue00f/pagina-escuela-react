import './especialidades.css'

function CicloBasico() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Ciclo Básico</h2>
      </div>

      <div className="description-1" role="tabpanel">
        <h3>Trayectoria formativa y cargas horarias</h3>
      </div>
      <div className="flex-plan-estudio">
        <div className="lista_e_info">
          <div className="list-group" id="myList" role="tablist">
            <a
              className="list-group-item list-group-item-action active"
              data-bs-toggle="list"
              href="#tabla1"
              role="tab"
            >
              <p>1°</p>
            </a>

            <a
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#tabla2"
              role="tab"
            >
              <p>2°</p>
            </a>
          </div>

          <div className="mas-info">
            <a
              href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=11"
              target="_blank"
              rel="noreferrer"
            >
              Más información aquí.
            </a>
          </div>
        </div>

        <div className="tab-content" width="720px">
          <div
            className="tab-pane fade show active"
            role="tabpanel"
            id="tabla1"
          >
            <table width="720px">
              <thead>
                <tr>
                  <th colSpan="4">Primer año</th>
                </tr>
                <tr>
                  <th colSpan="2">Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="9" colSpan="2">
                    General
                  </th>
                </tr>
                <tr>
                  <td>Lengua y Literatura</td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Historia</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Geografía</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Educación Ciudadana</td>
                  <td>2hs</td>
                </tr>
                <tr>
                  <td>Educación Artística</td>
                  <td>2hs</td>
                </tr>
                <tr>
                  <td>Educación Física</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Biología</td>
                  <td>2hs</td>
                </tr>
                <tr>
                  <th rowSpan="3">Científico Tecnológica</th>
                  <th rowSpan="1">Área de Ciencias Básicas y Matemática</th>
                  <td>Matemática</td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <th rowSpan="2">Área de Tecnologías Generales</th>
                  <td>Tecnología de la Representación</td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <td>Taller</td>
                  <td>12hs</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="3">Horas cátedra por semana</th>
                  <td>44hs</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <table width="720px">
              <thead>
                <tr>
                  <th colSpan="4">Segundo año</th>
                </tr>
                <tr>
                  <th colSpan="2">Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="8" colSpan="2">
                    General
                  </th>
                </tr>
                <tr>
                  <td>Lengua y Literatura</td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <td>Inglés</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Historia</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Geografía</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Educación Ciudadana</td>
                  <td>2hs</td>
                </tr>

                <tr>
                  <td>Educación Física</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Biología</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <th rowSpan="4">Científico Tecnológica</th>
                  <th rowSpan="2">Área de Ciencias Básicas y Matemática</th>
                  <td>Matemática</td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <td>Física</td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <th rowSpan="2">Área de Tecnologías Generales</th>
                  <td>Tecnología de la Representación</td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>Taller</td>
                  <td>12hs</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="3">Horas cátedra por semana</th>
                  <td>46hs</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
      <div className="description">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Definición
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  El “Primer Ciclo de la Modalidad Técnico Profesional de Nivel
                  Secundario”, se implementó en todas las Escuelas Técnicas
                  dependientes del Ministerio de Educación, también llamado
                  Ciclo Básico. En este período ademas de las materias teóricas
                  tradicionales, se prepara al alumnado y se les muestra
                  mediante los distintos talleres prácticas de cada orientación,
                  para que al culminar su segundo año en nuestra escuela puedan
                  elegir la especialidad que mas les gusta.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Capacidades
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  Al finalizar el taller del ciclo básico técnico los alumnos
                  deberán haber desarrollado capacidades para:
                </p>

                <ul>
                  <li>
                    Conocer los sistemas socio-productivos locales, su
                    constitución histórica y actual e interpretando la
                    estructura de productos y procesos tecnológicos, en el marco
                    del enfoque sistémico, identificando componentes y sus
                    relaciones.
                  </li>
                  <li>
                    Abordar y resolver situaciones problemáticas de orden
                    técnico y tecnológico,considerando el alcance de las mismas.
                  </li>
                  <li>
                    Buscar, seleccionar y clasificar la información tecnológica
                    representada por diversos medios, comunicándose de forma
                    oral y escrita con el lenguaje tecnológico apropiado.
                  </li>
                  <li>
                    Organizar, gestionar y desempeñarse dentro de un equipo de
                    trabajo.
                  </li>
                  <li>
                    Diseñar y construir objetos, servicios y/o mecanismos
                    planificando los procesos y tomando decisiones en función de
                    la predicción de los resultados.
                  </li>
                  <li>
                    Seleccionar y utilizar correctamente las herramientas,
                    máquinas, materiales e instrumentos, en relación con la
                    problemática a resolver.
                  </li>
                  <li>
                    Prever los riesgos personales y ambientales, poniendo en
                    práctica las normas de seguridad e higiene.
                  </li>
                  <li>
                    Gestionar su propio aprendizaje de forma organizada y
                    metódica, respetando las características propias para el
                    abordaje de cada área del conocimiento.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CicloBasico
