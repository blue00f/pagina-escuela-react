import styles from './CardDocumento.module.css'

function CardDocumento() {
  return (
    <>
      <div className={styles.contenedorFotosGrid}>
        <a className={styles.links} href="#">
          <div className={styles.contenedorFoto}>
            <div className={styles.contenedorVistaPdf}>
              <iframe
                className={styles.vistaPdf}
                src="https://drive.google.com/file/d/1SCmNKA1-nCF90re7jThDVRsUD9wvIczx/preview"
                width="440"
                height="280"
                allow="autoplay"
              ></iframe>
            </div>
            <div className={styles.contenedorTexto}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
                sequi rerum pariatur quis dignissimos minima repellat facilis,
                officia a soluta quidem reiciendis dicta quaerat? Error corporis
                iste eveniet esse cum optio dolorum at necessitatibus facere
                expedita dicta, laudantium illum. Eligendi aperiam voluptas rem
                ipsa quasi repellendus ex! Temporibus ab sapiente eos officia
                est nulla, perspiciatis maxime, dicta repellat dolor animi illo,
                sint blanditiis. Exercitationem aliquid architecto tempora
                dolore est temporibus ullam itaque nisi animi ipsum? Ea
                inventore voluptate omnis unde impedit aperiam atque quas,
                necessitatibus odit maiores, ad reiciendis! Iure.
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </>
  )
}

export default CardDocumento
