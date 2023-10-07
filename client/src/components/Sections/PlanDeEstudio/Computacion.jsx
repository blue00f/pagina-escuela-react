/* eslint-disable react/no-unescaped-entities */
import ControladorAnios from './ControladorAnios.jsx'
import TablaMaterias from './TablaMaterias.jsx'
import './especialidades.css'

function Computacion() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Computación</h2>
      </div>
      <div className="flex-plan-estudio">
        <div className="lista_e_info">
          <div className="list-group" id="myList" role="tablist">
            <ControladorAnios idTabla={'#tabla1'} anio={'3° Año'} />
            <ControladorAnios idTabla={'#tabla2'} anio={'4° Año'} />
            <ControladorAnios idTabla={'#tabla3'} anio={'5° Año'} />
            <ControladorAnios idTabla={'#tabla4'} anio={'6° Año'} />
          </div>
          <div className="mas-info">
            <a
              href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#7"
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
            <TablaMaterias especialidad="Computación" anio="3° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <TablaMaterias especialidad="Computación" anio="4° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla3">
            <TablaMaterias especialidad="Computación" anio="5° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla4">
            <TablaMaterias especialidad="Computación" anio="6° Año" />
          </div>
        </div>
      </div>
      <div className="description">
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
              <button
                className="accordion-button collapsed text-texto-violeta"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Título que Otorga
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-texto-violeta">Técnico en Computación</p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
              <button
                className="accordion-button collapsed text-texto-violeta"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                Duración Total del Diseño Curricular Jurisdiccional.
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-texto-violeta">
                  4 años que conjuntamente con el primer ciclo de la modalidad
                  técnico profesional de 2 años de duración, conforman los 6
                  años requeridos por las normativas nacionales vigentes.
                </p>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
              <button
                className="accordion-button collapsed text-texto-violeta"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Habilitaciones Profesionales
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p className="text-texto-violeta">
                  El Técnico en Gestión y Administración de las Organizaciones
                  de nivel Secundario será capaz de:
                </p>

                <ul className="list-disc text-texto-violeta">
                  <li className="ml-8">
                    Proyectar, producir, adaptar, implantar y mantener
                    aplicaciones informáticas.
                  </li>
                  <li className="ml-8">
                    Proyectar, instalar, configurar y mantener sistemas
                    informáticos.
                  </li>
                  <li className="ml-8">
                    Realizar la documentación técnica y la de los usuarios de
                    acuerdo con los requerimientos funcionales y técnicos de las
                    aplicaciones y sistemas.
                  </li>
                  <li className="ml-8">
                    Asistir y asesorar a los usuarios para la elección,
                    adquisición, instalación y personalización de aplicaciones
                    de equipos y sistemas
                  </li>
                  <li className="ml-8">
                    Actuar en todos los casos bajo las normativas de seguridad
                    vigentes.
                  </li>
                  <li className="ml-8">
                    Desempeñarse profesionalmente en relación de dependencia o
                    mediante emprendimientos económicos-productivos en forma
                    individual o asociativa.
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

export default Computacion
