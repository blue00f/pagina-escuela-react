import datosMaterias from './datosMaterias'

function TablaMaterias({ especialidad, anio }) {
  // Encontrar la especialidad correspondiente en los datos
  const especialidadData = datosMaterias.find((esp) =>
    esp.especialidades.some((esp) => esp.nombre === especialidad)
  )

  if (!especialidadData || !especialidadData.especialidades) {
    return (
      <div>
        No se encontraron materias para la especialidad y el año seleccionados.
      </div>
    )
  }

  const anioData = especialidadData.especialidades
    .find((esp) => esp.nombre === especialidad)
    ?.anios.find((a) => a.nombre === anio)

  if (!anioData) {
    return (
      <div>
        No se encontraron materias para la especialidad y el año seleccionados.
      </div>
    )
  }

  return (
    <table className="text-base text-center m-auto">
      <thead className="text-xs text-texto-violeta uppercase bg-gray-50">
        <tr>
          <th scope="col" className="text-xl py-2">
            Unidad curricular
          </th>
          <th scope="col" className="text-xl py-2 head-horas-por-semana">
            Horas por semana
          </th>
        </tr>
      </thead>
      <tbody>
        {anioData.materias.map((materia, index) => (
          <tr key={index} className="bg-white">
            <th
              scope="row"
              className="font-medium text-base text-texto-violeta"
            >
              {materia.nombreMateria}
            </th>
            <td className="text-base text-texto-violeta head-horas-por-semana">
              {materia.horasSemana}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default TablaMaterias
