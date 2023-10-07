import ControladorAnios from './ControladorAnios'
import TablaMaterias from './TablaMaterias.jsx'

import './especialidades.css'

function CicloBasico() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Ciclo Básico</h2>
      </div>
      <div className="flex-plan-estudio">
        <div className="lista_e_info">
          <div className="list-group" id="myList" role="tablist">
            <ControladorAnios idTabla={'#tabla1'} anio={'1° Año'} />
            <ControladorAnios idTabla={'#tabla2'} anio={'2° Año'} />
          </div>

          <div className="mas-info">
            <a
              href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=11"
              target="_blank"
              rel="noreferrer"
            >
              Clickeá para más información.
            </a>
          </div>
        </div>

        <div className="tab-content">
          <div
            className="tab-pane fade show active"
            role="tabpanel"
            id="tabla1"
          >
            <TablaMaterias especialidad="Ciclo Básico" anio="1° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <TablaMaterias especialidad="Ciclo Básico" anio="2° Año" />
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
