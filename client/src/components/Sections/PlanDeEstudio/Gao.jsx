import ControladorAnios from './ControladorAnios'
import TablaMaterias from './TablaMaterias'
import './especialidades.css'

function Gao() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">
          Gestión y Administración de las Organizaciones
        </h2>
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
            <TablaMaterias especialidad="GAO" anio="3° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <TablaMaterias especialidad="GAO" anio="4° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla3">
            <TablaMaterias especialidad="GAO" anio="5° Año" />
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla4">
            <TablaMaterias especialidad="GAO" anio="6° Año" />
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
                <p className="text-texto-violeta">
                  Técnico en Gestión y Administración de las Organizaciones
                </p>
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
                className="accordion-button collapsed"
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
                <p>
                  El Técnico en Gestión y Administración de las Organizaciones
                  de nivel Secundario será capaz de:
                </p>

                <ul className="list-disc text-texto-violeta">
                  <li className="ml-8">
                    Relevar y sistematizar información generada por las
                    diferentes áreas de la organización.
                  </li>
                  <li className="ml-8">
                    Relacionar datos e información elaborada en un área de la
                    organización (ya sea por él o por otros) con la proveniente
                    de los demás sectores involucrados, asegurando la coherencia
                    e integridad de la gestión administrativa.
                  </li>
                  <li className="ml-8">
                    Ejecutar tareas operativas en la administración de las áreas
                    de compras, comercialización, finanzas, recursos humanos y
                    contabilidad de todo tipo de organizaciones.
                  </li>
                  <li className="ml-8">
                    Auxiliar al/los propietario/s y/o directivo/s mediante el
                    relevamiento, selección y análisis de datos elaborando
                    informes para la toma de decisiones.
                  </li>
                  <li className="ml-8">
                    Asistir a los profesionales del área en las actividades
                    incluidas en su perfil profesional.
                  </li>
                  <li className="ml-8">
                    Actuar con responsabilidad interrelacionando sus actividades
                    con las que se desarrollan en otras áreas de la organización
                    y evaluando sus efectos sobre la organización en su
                    conjunto.
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

export default Gao
