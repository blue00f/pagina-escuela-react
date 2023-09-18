export const getFormattedDate = (dateStr) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' }
  const date = new Date(dateStr)
  return date.toLocaleDateString('es-ES', options)
}
