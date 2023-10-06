import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <>
      <div className="mx-20 my-10 flex items-center justify-center bg-white">
        <div className="flex flex-col">
          <div className="flex flex-col items-center">
            <div className="text-texto-violeta font-bold text-7xl">404</div>

            <div className="font-semibold text-3xl xl:text-7xl lg:text-6xl md:text-5xl mt-10">
              La página no existe
            </div>

            <div className="text-blue-500 hover:text-blue-300 font-medium text-sm md:text-xl lg:text-2xl mt-8">
              <Link to="/">
                <p>Hacé click acá para volver al inicio.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NotFound
