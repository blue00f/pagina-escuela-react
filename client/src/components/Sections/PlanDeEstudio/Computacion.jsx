import './especialidades.css'

function Computacion() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Computación</h2>
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
               <p>3°</p>
            </a>

            <a
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#tabla2"
              role="tab"
            >
              <p>4°</p>
            </a>

            <a
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#tabla3"
              role="tab"
            >
               <p>5°</p>
            </a>

            <a
              className="list-group-item list-group-item-action"
              data-bs-toggle="list"
              href="#tabla4"
              role="tab"
            >
               <p>6°</p>
            </a>
          </div>

          <div className="mas-info">
            <a
              href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#7"
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
                  <th colSpan="4">Tercer año</th>
                </tr>
                <tr>
                  <th>Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="7">General</th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=22"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lengua y Literatura
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://buenosaires.gob.ar/areas/educacion/curricula/dle_web.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inglés
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=16"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Historia
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=17"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Geografía
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=17"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Educación Ciudadana
                    </a>
                  </td>
                  <td>2hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=18"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Educación Física
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>

                <tr>
                  <th rowSpan="6">Científico Tecnológica</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=27"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Matemática
                    </a>
                  </td>
                  <td>5hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=29"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Física
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=30"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Química
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=31"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Taller Tecnología y Control
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=30"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Tecnología de la Representación
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
                <tr />
                <tr>
                  <th>Técnica Específica</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=36"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Taller
                    </a>
                  </td>
                  <td>8hs</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2">Horas cátedra por semana</th>
                  <td>46hs</td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <table width="720px">
              <thead>
                <tr>
                  <th colSpan="4">Cuarto año</th>
                </tr>
                <tr>
                  <th colSpan="2">Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="6" colSpan="2">
                    General
                  </th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=22"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lengua y Literatura
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://buenosaires.gob.ar/areas/educacion/curricula/dle_web.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inglés
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=16"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Historia
                    </a>
                  </td>
                  <td>2hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=17"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Geografía
                    </a>
                  </td>
                  <td>2hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=18"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Educación Física
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>

                <tr>
                  <th rowSpan="1" colSpan="2">
                    Científico Tecnológica
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=27"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Matemática
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>

                <tr>
                  <th rowSpan="5">Técnica Específica</th>
                  <th rowSpan="2" colSpan="1">
                    Desarrollo de Productos Informáticos
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=36"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Laboratorio de Algoritmos y Estructura de datos
                    </a>
                  </td>
                  <td>9hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=36"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Base de Datos
                    </a>
                  </td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <th rowSpan="2">Equipos, Instalaciones y Sistemas</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=38"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Organización de las Computadoras
                    </a>
                  </td>
                  <td>7hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=39"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lógica Computacional
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <th>Proyecto</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=41"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Proyecto I
                    </a>
                  </td>
                  <td>4hs</td>
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

          <div className="tab-pane fade" role="tabpanel" id="tabla3">
            <table width="720px">
              <thead>
                <tr>
                  <th colSpan="4">Quinto año</th>
                </tr>
                <tr>
                  <th colSpan="2">Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="4" colSpan="2">
                    General
                  </th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=22"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Lengua y Literatura
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://buenosaires.gob.ar/areas/educacion/curricula/dle_web.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inglés
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=18"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Educación Física
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>

                <tr>
                  <th rowSpan="3" colSpan="2">
                    Científico Tecnológica
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=27"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Matemática
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=32"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Economía y Gestión de las Organizaciones
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr />
                <tr>
                  <th rowSpan="6">Técnica Específica</th>
                  <th rowSpan="3" colSpan="1">
                    Desarrollo de Productos Informáticos
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=37"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Administración y Gestión de Base de datos
                    </a>
                  </td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=37"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Laboratorio de Programación Orientada a Objetos
                    </a>
                  </td>
                  <td>9hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=37"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Análisis de Sistemas
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
                <tr>
                  <th>Equipos, Instalaciones y Sistemas</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=37"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Redes
                    </a>
                  </td>
                  <td>7hs</td>
                </tr>

                <tr>
                  <th>Proyecto</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=41"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Proyecto II
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <th colSpan="3">Horas cátedra por semana</th>
                  <td>46hs</td>
                </tr>
              </thead>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla4">
            <table width="720px">
              <thead>
                <tr>
                  <th colSpan="4">Sexto año</th>
                </tr>
                <tr>
                  <th colSpan="2">Campo de Formación</th>
                  <th>Unidad Curricular</th>
                  <th>Hs. por Semana</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th rowSpan="5" colSpan="2">
                    General
                  </th>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=21"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ciudadanía y Trabajo
                    </a>
                  </td>
                  <td>2hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://buenosaires.gob.ar/areas/educacion/curricula/dle_web.pdf"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Inglés
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=24"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Ciencia y Tecnología
                    </a>
                  </td>
                  <td>2hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=18"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Educación Física
                    </a>
                  </td>
                  <td>3hs</td>
                </tr>

                <tr>
                  <th rowSpan="3" colSpan="2">
                    Científico Tecnológica
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=27"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Matemática
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>

                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=32"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Gestión de los Procesos Productivos
                    </a>
                  </td>
                  <td>4hs</td>
                </tr>
                <tr />
                <tr>
                  <th rowSpan="4">Técnica Específica</th>
                  <th rowSpan="2" colSpan="1">
                    Desarrollo de Productos Informáticos
                  </th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=38"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Desarrollo de Sistemas
                    </a>
                  </td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=38"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Programación sobre Redes
                    </a>
                  </td>
                  <td>6hs</td>
                </tr>
                <tr>
                  <th>Equipos, Instalaciones y Sistemas</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=40"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Administración de Sistemas y Redes
                    </a>
                  </td>
                  <td>7hs</td>
                </tr>
                <tr>
                  <th>PP</th>
                  <td>
                    <a
                      href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=11"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Practicas Profesionalizantes
                    </a>
                  </td>
                  <td>9hs</td>
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
                <p>Técnico en Computación</p>
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
                <p>
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

                <ol>
                  <li>
                    Proyectar, producir, adaptar, implantar y mantener
                    aplicaciones informáticas.{' '}
                  </li>
                  <li>
                    Proyectar, instalar, configurar y mantener sistemas
                    informáticos.
                  </li>
                  <li>
                    Realizar la documentación técnica y la de los usuarios de
                    acuerdo con los requerimientos funcionales y técnicos de las
                    aplicaciones y sistemas.
                  </li>
                  <li>
                    Asistir y asesorar a los usuarios para la elección,
                    adquisición, instalación y personalización de aplicaciones
                    de equipos y sistemas
                  </li>
                  <li>
                    Actuar en todos los casos bajo las normativas de seguridad
                    vigentes.
                  </li>
                  <li>
                    Desempeñarse profesionalmente en relación de dependencia o
                    mediante emprendimientos económicos-productivos en forma
                    individual o asociativa.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Funciones que Ejerce el Profesional
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  En forma conjunta, procesos tecnológicos y capacidades técnico
                  profesionales constituyen las áreas de especialización que
                  para un Técnico en Computación son las siguientes:
                </p>
                <details open>
                  <summary>Desarrollo de productos informáticos</summary>
                  <p>
                    El área tiene por objeto particular el proceso general de
                    desarrollo de aplicaciones o productos informáticos
                    (software), el cual se organiza en los subprocesos de
                    análisis, diseño, producción y verificación de aplicaciones
                    y productos informáticos, e integra las siguientes técnicas
                    y conocimientos tecnológicos específicos: Técnicas de
                    modelización de datos, procesos y flujos de información;
                    Técnicas de programación de sistemas mediante paradigmas de
                    programación estructurada y orientada a objetos; Técnicas de
                    pruebas de programas; Asistencia al usuario final: técnicas
                    para la elaboración de programas, guías y manuales para la
                    utilización del sistema y las aplicaciones. Las capacidades
                    del área son las siguientes:
                  </p>
                  <ul>
                    <li>
                      Realizar el diseño general de aplicaciones y productos
                      "software" de mediana complejidad, relevando los
                      requerimientos técnicos y funcionales a resolver,
                      elaborando alternativas de diseño de aplicaciones que
                      cumplan con las especificaciones funcionales establecidas.
                    </li>
                    <li>
                      Realizar el diseño detallado de todo tipo de aplicaciones
                      y productos "software", de acuerdo con los requerimientos
                      técnicos y funcionales especificados, aplicando las
                      técnicas adecuadas de modelización de procesos, datos y
                      flujos de información, y elaborando la documentación
                      técnica de diseño.
                    </li>
                    <li>
                      Elaborar aplicaciones informáticas de acuerdo con
                      requerimientos funcionales y diseño detallado
                      especificados, realizando la programación mediante los
                      lenguajes y técnicas adecuados, y elaborando la
                      documentación técnica de las aplicaciones utilizando
                      simbología adecuada, ejecutando las pruebas de unidad
                      según normas de calidad vigentes e incluyendo la
                      información requerida para posteriores revisiones,
                      modificaciones o adecuaciones del producto.
                    </li>
                    <li>
                      Adaptar aplicaciones informáticas a usuarios y entornos
                      específicos, realizando las modificaciones y/o
                      personalizaciones de producto más adecuadas a los
                      requisitos técnicos, funcionales y operativos
                      especificados.
                    </li>
                    <li>
                      Instalar, poner en funcionamiento y mantener aplicaciones
                      informáticas, asistiendo al usuario para el uso óptimo de
                      las aplicaciones, detectando y corrigiendo fallos de
                      aplicaciones, y elaborando guías, manuales y/o
                      presentaciones para usuarios, empleando los lenguajes y
                      soportes adecuados.
                    </li>
                  </ul>
                </details>

                <details open>
                  <summary>Equipos y Sistemas</summary>
                  <p>
                    El área tiene por objeto todo lo referido a instalación,
                    puesta en marcha y mantenimiento de equipos de computación,
                    redes, componentes para los mismos, impresoras, sistemas de
                    impresión, programas y sistemas o funcionalidades
                    adicionales para los mismos. Además, particularmente, el
                    proceso general de implantación y explotación de equipos y
                    sistemas, el cual se organiza en los subprocesos de diseño,
                    instalación, mantenimiento y administración de sistemas
                    informáticos y redes, e integra las siguientes técnicas y
                    conocimientos tecnológicos específicos: Proyecto,
                    instalación y configuración de equipos y programas en
                    sistemas informáticos y redes: tecnología de equipos,
                    interconexión, sistemas operativos y "software" de
                    aplicación, periféricos e impresoras; Organización y
                    administración de los recursos de sistemas informáticos y
                    redes: técnicas para establecer seguridad en el sistema y la
                    información; Supervisión del mantenimiento y rendimiento de
                    sistemas informáticos: técnicas de diagnóstico; Asistencia
                    al usuario final: técnicas para la elaboración de programas,
                    guías y manuales para la utilización de sistemas
                    informáticos. Las capacidades del área son las siguientes:
                  </p>
                  <ul>
                    <li>
                      Proyectar y Diseñar sistemas informáticos y redes locales
                      de mediana complejidad, relevando los recursos disponibles
                      y los requisitos técnicos y funcionales a cubrir,
                      realizando la especificación detallada de los recursos de
                      hardware y software a utilizar, el estudio de costos y de
                      factibilidad, y elaborando la documentación técnica
                      correspondiente.
                    </li>
                    <li>
                      Instalar, configurar y verificar sistemas informáticos y
                      redes, realizando su montaje y conexionado de acuerdo con
                      especificaciones técnicas y normativa de seguridad
                      vigente, instalando el software operativo y de aplicación,
                      realizando las modificaciones, adaptaciones y
                      personalizaciones adecuadas a usuarios y entornos
                      específicos,técnicos, funcionales y operativos
                      especificados.
                    </li>
                    <li>
                      Administrar redes locales de mediana complejidad,
                      organizando los recursos y garantizando su disponibilidad
                      a los usuarios, gestionando la conexión a redes extensas
                      en función de necesidades de información de los usuarios.
                    </li>
                    <li>
                      Mantener sistemas informáticos y redes locales, asistiendo
                      a los usuarios para el uso óptimo de los sistemas,
                      diagnosticando fallos de hardware y software y realizando
                      las reparaciones y correcciones requeridas aplicando
                      técnicas de seguridad e integridad de sistema e
                      información.
                    </li>
                  </ul>
                </details>

                <p>
                  Cada uno de estos puntos en los ámbitos de producción, de
                  servicios, mantenimiento, reparación de componentes,
                  comercialización, asesoramiento, verificación, proyecto,
                  ensayo, y gestión de emprendimientos, actuando en relación de
                  dependencia o en forma independiente. Será capaz de
                  interpretar las definiciones estratégicas surgidas de los
                  estamentos técnicos y jerárquicos pertinentes, gestionar sus
                  actividades específicas, realizar y controlar la totalidad de
                  las actividades requeridas hasta su efectiva concreción,
                  teniendo en cuenta los criterios de seguridad, impacto
                  ambiental, relaciones humanas, calidad y productividad. Además
                  sus desempeños están dedicados no sólo a instalar equipos,
                  software y componentes de sistemas de computación y redes,
                  sino también a solucionar problemas operativos relativamente
                  puntuales, tanto de hardware y conectividad como de software,
                  que se le suelen presentar al usuario en el ámbito de la
                  informática profesional y personal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Computacion
