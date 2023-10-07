function ControladorAnios({ idTabla, anio }) {
  const defaultYear = anio === '3° Año' ? 'active' : ''
  return (
    <a
      className={`list-group-item list-group-item-action ${defaultYear}`}
      data-bs-toggle="list"
      href={idTabla}
      role="tab"
    >
      {anio}
    </a>
  )
}

export default ControladorAnios
