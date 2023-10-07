function CardDocumento({ link, descripcion }) {
  return (
    <>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="block max-w-[18rem] px-3 my-4 rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <img
            className="rounded-t-lg"
            src="./fondo-pdf.png"
            alt="Fondo PDF del informe para docentes"
          />
        </div>
        <div className="p-6">
          <p className="font-semibold text-blue-600 hover:text-blue-400">
            {descripcion}
          </p>
        </div>
      </a>
    </>
  )
}

export default CardDocumento
