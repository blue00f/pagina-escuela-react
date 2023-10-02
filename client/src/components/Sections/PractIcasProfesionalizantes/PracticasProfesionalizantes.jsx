/* eslint-disable react/no-unescaped-entities */
function PracticasProfesionalizantes() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Prácticas Profesionalizantes</h2>
      </div>
      <div className="my-5 md:mx-20 px-10 py-3 bg-white">
        <div className="my-3">
          <h2 className="mb-2 text-4xl font-medium text-texto-violeta">
            ¿Qué es?
          </h2>
          <p className="text-texto-violeta">
            Las PRÁCTICAS PROFESIONALIZANTES tienen como propósito que los/las
            estudiantes consoliden, integren y/o amplíen las capacidades y
            saberes que se corresponden con el perfil profesional.
            <br />
            <br />
            Las Prácticas Profesionalizantes tienen como objetivo la aplicación,
            consolidación, integración de todos los conocimientos y habilidades
            que fueron adquiriendo a lo largo de su formación.
            <br />
            <br />
            Todas las actividades que se llevan a cabo en las Prácticas, se
            realizan siempre en función de las competencias del perfil
            profesional de cada una de las especialidades.
          </p>
        </div>
        <div className="my-3">
          <h2 className="mb-2 text-4xl font-medium text-texto-violeta">
            Empresas de prácticas
          </h2>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="m-2 flex flex-wrap content-center justify-center items-center">
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-20 w-fit object-contain object-center"
                    src="https://www.construar.com.ar/wp-content/uploads/2018/10/AUSA-logo.png"
                  />
                </div>
              </div>
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-24 w-fit object-contain object-center"
                    src="https://nqn3.com/galeria/empresas/2021/11/30/o_o_5565.jpg"
                  />
                </div>
              </div>
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-40 w-fit object-contain object-center"
                    src="https://exo.com.ar/wp-content/uploads/2020/01/logo-exo.png"
                  />
                </div>
              </div>
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-fit w-fit object-contain object-center"
                    src="https://www.gruponucleo.com.ar/Temp/App_WebSite/App_PictureFiles/logo.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-3">
          <h2 className="mb-2 text-4xl font-medium text-texto-violeta">
            Proyectos
          </h2>
          <h3 className="mb-2 text-2xl font-medium text-texto-violeta">
            Página de la escuela
          </h3>
          <p className="text-texto-violeta">
            En el contexto del proyecto de Innovación, se ha desarrollado y
            lanzado la página web oficial del colegio. Esta plataforma se ha
            concebido con el propósito de brindar información actualizada y
            relevante a estudiantes, docentes y familias. La página web
            proporciona las más recientes novedades y comunicados de la
            institución.
          </p>
        </div>
        <div className="my-3">
          <h2 className="mb-2 text-4xl font-medium text-texto-violeta">
            Capacitaciones
          </h2>
          <p className="text-texto-violeta">
            A lo largo del año, como parte de nuestras prácticas
            profesionalizantes, hemos ofrecido diversas capacitaciones en el
            Centro Cultural y de Desarrollo (CCD), situado en la dirección
            Algarrobo 1041, Barracas. Entre estas formaciones, se incluyen
            temáticas como desarrollo personal, emprendedurismo, arte en el
            ámbito laboral y el programa "Mujeres Emprendedoras Veolia".
            <br />
            <br />
            Además, el CCD es un espacio que facilita la realización de cursos
            auspiciados por entidades tanto públicas como privadas. Al finalizar
            estos cursos, los alumnos reciben una certificación y un diploma que
            valida su participación y adquisición de habilidades. Este
            compromiso con la formación y el desarrollo profesional refleja
            nuestro interés en brindar oportunidades de crecimiento a la
            comunidad que servimos.
          </p>
          <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
            <div className="m-1 flex flex-wrap flex-col md:flex-row content-center md:-m-2">
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-fit w-fit rounded-lg object-cover object-center"
                    src="./ccd-foto-1.jpg"
                  />
                </div>
              </div>
              <div className="flex md:w-1/2 flex-wrap content-center justify-center items-center">
                <div className="p-1 md:p-2 my-4 md:my-0">
                  <img
                    alt="gallery"
                    className="block h-fit w-fit rounded-lg object-cover object-center"
                    src="./ccd-foto-2.jpg"
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

export default PracticasProfesionalizantes
