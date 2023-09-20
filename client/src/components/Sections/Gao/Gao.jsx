import './Gao.css';

function Gao() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">
          Gestión y Administración de las Organizaciones
        </h2>
      </div>
      <div className="grid-section">
        <div className="description-1" role="tabpanel">
          <h3>Trayectoria Formativa y Cargas Horarias</h3>
        </div>

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
              <tr>
                <th colSpan="3">Tercer año</th>
              </tr>
              <tr>
                <th>Campo de Formación</th>
                <th>Unidad Curricular</th>
                <th>Hs. por Semana</th>
              </tr>
              <tr>
                <th rowSpan="7">General</th>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lengua y Literatura
                  </a>
                </td>
                <td>4hs.</td>
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
                <td>3hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Historia
                  </a>
                </td>
                <td>3hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Geografía
                  </a>
                </td>
                <td>3hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Educación Ciudadana
                  </a>
                </td>
                <td>2hs.</td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Educación Física
                  </a>
                </td>
                <td>3hs.</td>
              </tr>
              <tr>
                <th rowSpan="5">Científico Tecnológica</th>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=26"
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
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=27"
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
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=28"
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
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=27"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tecnología de la Representación
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a href="https://huergo.edu.ar/docs/perfilprocomputacion_anexo.pdf#page=28">
                    Taller de Informática Aplicada y del Control
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <th>Técnica Específica</th>
                <td>
                  <a href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39">
                    Taller de la especialidad
                  </a>
                </td>
                <td>8hs</td>
              </tr>
              <tr>
                <th colSpan="2">Horas cátedra por semana</th>
                <td>46hs</td>
              </tr>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla2">
            <table width="720px">
              <tr>
                <th colSpan="4">Cuarto año</th>
              </tr>
              <tr>
                <th colSpan="2">Campo de Formación</th>
                <th>Unidad Curricular</th>
                <th>Hs. por Semana</th>
              </tr>
              <tr>
                <th rowSpan="5" colSpan="2">
                  General
                </th>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lengua y Literatura
                  </a>
                </td>
                <td>3hs.</td>
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
                <td>3hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ciudadanía y Trabajo
                  </a>
                </td>
                <td>2hs.</td>
              </tr>

              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Educación Física
                  </a>
                </td>
                <td>3hs.</td>
              </tr>

              <tr>
                <th rowSpan="2" colSpan="2">
                  Científico Tecnológica
                </th>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=26"
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
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=28"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Químmica Aplicada
                  </a>
                </td>
                <td>3hs</td>
              </tr>

              <tr>
                <th rowSpan="7" colSpan="2">
                  Técnica Específica
                </th>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=31"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Computación Aplicada I
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contabilidad I
                  </a>
                </td>
                <td>6hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=31"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Introducción a la Economía
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=32"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Historia de la Industria y el Comercio{' '}
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=32"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Matemática Financiera
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=33"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Teoría de las Organizaciones
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Taller Administrativo-Contable I
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <th colSpan="3">Horas cátedra por semana</th>
                <td>46hs</td>
              </tr>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla3">
            <table width="720px">
              <tr>
                <th colSpan="4">Quinto año</th>
              </tr>
              <tr>
                <th>Campo de Formación</th>
                <th>Unidad Curricular</th>
                <th>Hs. por Semana</th>
              </tr>
              <tr>
                <th rowSpan="4">General</th>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=23"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Lengua y Literatura
                  </a>
                </td>
                <td>3hs.</td>
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
                <td>3hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Educación Física
                  </a>
                </td>
                <td>3hs.</td>
              </tr>

              <tr>
                <th rowSpan="2">Científico Tecnológica</th>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=26"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Matemática
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=29"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Economía y Gestión de las Organizaciones
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <th rowSpan="8">Técnica Específica</th>

                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=33"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Computación Aplicada II
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=33"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Introducción al derecho
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=34"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Geografía Económica Argentina
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Contabilidad II
                  </a>
                </td>
                <td>6hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=34"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Costos
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=34"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Organización de la Producción
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=34"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Psicología de las Organizaciones
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Taller Administrativo-Contable II
                  </a>
                </td>
                <td>4hs</td>
              </tr>

              <tr>
                <th colSpan="2">Horas cátedra por semana</th>
                <td>46hs</td>
              </tr>
            </table>
          </div>

          <div className="tab-pane fade" role="tabpanel" id="tabla4">
            <table width="720px">
              <tr>
                <th colSpan="4">Sexto año</th>
              </tr>
              <tr>
                <th>Campo de Formación</th>
                <th>Unidad Curricular</th>
                <th>Hs. por Semana</th>
              </tr>
              <tr>
                <th rowSpan="4">General</th>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=25"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Ciencia y Tecnología
                  </a>
                </td>
                <td>2hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=22"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Inglés
                  </a>
                </td>
                <td>2hs.</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=21"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Educación Física
                  </a>
                </td>
                <td>3hs.</td>
              </tr>

              <tr>
                <th rowSpan="2">Científico Tecnológica</th>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=27"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Matemática
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=29"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Gestión de los Procesos Productivos
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <th rowSpan="8">Técnica Específica</th>

                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=35"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Computación Aplicada III
                  </a>
                </td>
                <td>2hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=36"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Derecho Comercial Administrativo
                  </a>
                </td>
                <td>2hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=36"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Bancos y Finanzas
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=36"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Estados Contables
                  </a>
                </td>
                <td>5hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=37"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Impuestos
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=37"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Marketing
                  </a>
                </td>
                <td>4hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=38"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Recursos Humanos
                  </a>
                </td>
                <td>3hs</td>
              </tr>
              <tr>
                <td>
                  <a
                    href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf#page=39"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Prácticas Profesionalizantes
                  </a>
                </td>
                <td>9hs</td>
              </tr>

              <tr>
                <th colSpan="2">Horas cátedra por semana</th>
                <td>46hs</td>
              </tr>
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
                {' '}
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
                {' '}
                <p>Técnico en Gestión y Administración de las Organizaciones</p>
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
                    Relevar y sistematizar información generada por las
                    diferentes áreas de la organización.
                  </li>
                  <li>
                    Relacionar datos e información elaborada en un área de la
                    organización (ya sea por él o por otros) con la proveniente
                    de los demás sectores involucrados, asegurando la coherencia
                    e integridad de la gestión administrativa.
                  </li>
                  <li>
                    Ejecutar tareas operativas en la administración de las áreas
                    de compras, comercialización, finanzas, recursos humanos y
                    contabilidad de todo tipo de organizaciones.
                  </li>
                  <li>
                    Auxiliar al/los propietario/s y/o directivo/s mediante el
                    relevamiento, selección y análisis de datos elaborando
                    informes para la toma de decisiones.
                  </li>
                  <li>
                    Asistir a los profesionales del área en las actividades
                    incluidas en su perfil profesional.
                  </li>
                  <li>
                    Actuar con responsabilidad interrelacionando sus actividades
                    con las que se desarrollan en otras áreas de la organización
                    y evaluando sus efectos sobre la organización en su
                    conjunto.
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
                  El Técnico en Gestión y Administración de las Organizaciones
                  está capacitado para manifestar conocimientos, habilidades,
                  destrezas, valores y actitudes en situaciones reales de
                  trabajo, conforme a criterios de profesionalidad propios de su
                  área y de responsabilidad social al:
                </p>
                <details open>
                  <summary>Administrar las compras</summary>
                  <p>
                    La función de Administrar las compras integra las
                    actividades relacionadas con el abastecimiento,
                    almacenamiento y distribución de los insumos (materias
                    primas, materiales, equipamiento, etc.) requeridos por la
                    organización así como al control de los inventarios.
                  </p>
                  <ul>
                    <li>Programar las compras.</li>
                    <li>Operar las compras.</li>
                    <li>Monitorear y negociar las compras.</li>
                    <li>Importar.</li>
                  </ul>
                </details>

                <details open>
                  <summary>Administrar las ventas</summary>
                  <p>
                    Esta función hace referencia a la definición del mercado
                    objetivo, a los mecanismos de promoción, a la programación y
                    gestión comercial, al procesamiento de los pedidos, al
                    almacenamiento de los bienes producidos por la organización
                    y a las operaciones relacionadas con su entrega a los
                    clientes.
                  </p>
                  <ul>
                    <li>
                      Asistir en el estudio del mercado y en la promoción de los
                      productos de la organización
                    </li>
                    <li>Operar las ventas.</li>
                    <li>Coordinar las entregas y el servicio de postventa.</li>
                    <li>Exportar.</li>
                    <li>Operar plataformas de comercio electrónico.</li>
                  </ul>
                </details>

                <details open>
                  <summary>Administrar los recursos financieros</summary>
                  <p>
                    Esta función hace referencia a la gestión y agilización del
                    financiamiento de operaciones de la organización atendiendo
                    a su viabilidad y a la continuidad del proceso productivo.
                  </p>
                  <ul>
                    <li>Preparar información financiera</li>
                    <li>Realizar las cobranzas</li>
                    <li>Realizar los pagos</li>
                    <li>Interactuar con el sistema financiero.</li>
                  </ul>
                </details>

                <details open>
                  <summary>Administrar los recursos humanos</summary>
                  <p>
                    La función de Recursos Humanos incluye actividades
                    vinculadas a la búsqueda, contratación, entrenamiento,
                    desarrollo y remuneración del personal así como a la gestión
                    de los conflictos y la generación de ambientes cooperativos
                    de trabajo.
                  </p>
                  <ul>
                    <li>
                      Colaborar en la preselección y contratación de los
                      recursos humanos.
                    </li>
                    <li>
                      Asistir en la capacitación y el desarrollo del personal.
                    </li>
                    <li>Operar en la administración de personal.</li>
                  </ul>
                </details>

                <details open>
                  <summary>Registrar contablemente</summary>
                  <p>
                    Esta función incluye el registro contable y fiscal del
                    conjunto de operaciones de la organización ya sea para su
                    uso interno como para el cumplimiento de formas y plazos
                    legales demandados por terceros.
                  </p>
                  <ul>
                    <li>
                      Registrar las operaciones de los distintos sectores de la
                      organización.
                    </li>
                    <li>Registrar en los libros contables.</li>
                    <li>
                      Cumplimentar las obligaciones fiscales, laborales y
                      legales.
                    </li>
                    <li>Calcular y elaborar información de costos.</li>
                  </ul>
                </details>

                <p>
                  Cada uno de estos puntos en los ámbitos de producción, de
                  servicios, comercialización, asesoramiento, verificación,
                  proyecto, y gestión de emprendimientos, actuando en relación
                  de dependencia o en forma independiente. Será capaz de
                  interpretar las definiciones estratégicas surgidas de los
                  estamentos técnicos y jerárquicos pertinentes, gestionar sus
                  actividades específicas, realizar y controlar la totalidad de
                  las actividades requeridas hasta su efectiva concreción,
                  teniendo en cuenta los criterios de seguridad, impacto
                  ambiental, relaciones humanas, calidad y productividad.
                </p>
                <a
                  href="https://ade.et16esp.edu.ar/wp-content/uploads/2015/06/res_megc_2758_14a-ADE.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Más información aquí.
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Gao;
