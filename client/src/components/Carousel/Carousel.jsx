import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './Carousel.css'

function Carousel() {
  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner md:w-full md:h-full">
        <div className="carousel-item active">
          <img
            src="./foto-escuela-1.jpg"
            className="w-full"
            alt="SUM del colegio"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./foto-escuela-2.jpg"
            className="w-full"
            alt="Entrada del colegio"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./foto-escuela-3.jpg"
            className="w-full"
            alt="Puente del colegio"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./foto-escuela-4.jpg"
            className="w-full"
            alt="Buffet del colegio"
          />
        </div>
        <div className="carousel-item">
          <img
            src="./foto-escuela-5.jpg"
            className="w-full"
            alt="Secretaría del colegio"
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Carousel
