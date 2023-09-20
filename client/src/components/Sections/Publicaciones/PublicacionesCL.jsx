import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'
import CardPublicacion from '../../CardPublicacion/CardPublicacion'
import './Publicaciones.css'

const URL_POSTS = 'http://localhost:3001'
//const URL_POSTS = 'https://pagina-escuela-react-production.up.railway.app'

function PublicacionesCL() {
  const [publicaciones, setPublicaciones] = useState([])
  const [shouldFetch, setShouldFetch] = useState(false)

  useEffect(() => {
    fetch(`${URL_POSTS}/posts`)
      .then((res) => res.json())
      .then((data) => {
        setPublicaciones(data)
        setShouldFetch(false) // Restablecer el estado para que no se ejecute nuevamente
      })
      .catch((error) => {
        console.error('Error al obtener las publicaciones: ', error)
      })
  }, [])
  useEffect(() => {
    if (shouldFetch) {
      fetch(`${URL_POSTS}/posts`)
        .then((res) => res.json())
        .then((data) => {
          setPublicaciones(data)
          setShouldFetch(false) // Restablecer el estado para que no se ejecute nuevamente
        })
        .catch((error) => {
          console.error('Error al obtener las publicaciones: ', error)
        })
    }
  }, [shouldFetch])

  const handleAddPostClick = () => {
    Swal.fire({
      title: 'Nueva publicación',
      html:
        '<input type="text" id="title" class="swal2-input" placeholder="Título">' +
        '<textarea id="content" class="swal2-textarea" placeholder="Contenido"></textarea>',
      focusConfirm: false,
      preConfirm: () => {
        const title = Swal.getPopup().querySelector('#title').value
        const content = Swal.getPopup().querySelector('#content').value
        return { title, content }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, content } = result.value

        if (!title || !content) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos antes de agregar la publicación.',
          })
          return
        }

        fetch(`${URL_POSTS}/posts`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error(
                'Error al realizar la solicitud POST: ' + response.statusText
              )
            }
          })
          .then((data) => {
            console.log(data.message)
            setPublicaciones((prevPublicaciones) =>
              prevPublicaciones.concat({
                idPost: data.idPost,
                title,
                content,
                dateUploaded: new Date().toISOString(),
              })
            )
            setShouldFetch(true)
          })
          .catch((error) => {
            console.error('Error al realizar la solicitud POST:', error)
          })
      }
    })
  }

  const handleEditPost = (publicacion) => {
    console.log('publicacion.idPost:', publicacion.idPost)
    Swal.fire({
      title: 'Editar publicación',
      html:
        '<input type="text" id="title" class="swal2-input" placeholder="Título" value="' +
        publicacion.title +
        '">' +
        '<textarea id="content" class="swal2-textarea" placeholder="Contenido">' +
        publicacion.content +
        '</textarea>',
      focusConfirm: false,
      preConfirm: () => {
        const title = Swal.getPopup().querySelector('#title').value
        const content = Swal.getPopup().querySelector('#content').value
        return { title, content }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, content } = result.value

        if (!title || !content) {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos antes de editar la publicación.',
          })
          return
        }

        fetch(`${URL_POSTS}/posts/edit/${publicacion.idPost}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, content }),
        })
          .then((response) => {
            if (response.ok) {
              return response.json()
            } else {
              throw new Error(
                'Error al editar la publicación: ' + response.statusText
              )
            }
          })
          .then((data) => {
            console.log(data.message)
            // Actualizar el estado local de publicaciones para reflejar la edición.
            setPublicaciones((prevPublicaciones) =>
              prevPublicaciones.map((pub) =>
                pub.idPost === publicacion.idPost
                  ? { ...pub, title, content }
                  : pub
              )
            )
          })
          .catch((error) => {
            console.error('Error al editar la publicación:', error)
          })
      }
    })
  }

  const handleHidePost = (postId, isHidden) => {
    const newHiddenState = !isHidden

    fetch(`${URL_POSTS}/posts/hide/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hidden: newHiddenState }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error(
            'Error al ocultar/mostrar la publicación: ' + response.statusText
          )
        }
      })
      .then((data) => {
        console.log(data.message)

        setPublicaciones((prevPublicaciones) =>
          prevPublicaciones.map((pub) =>
            pub.idPost === postId ? { ...pub, hidden: newHiddenState } : pub
          )
        )
      })
      .catch((error) => {
        console.error('Error al ocultar/mostrar la publicación:', error)
      })
  }

  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Publicaciones</h2>
      </div>
      <div className="container-buttons">
        <button className="container-add-delete" onClick={handleAddPostClick}>
          <p className="texto-violeta texto-semibold">Nueva publicación</p>
        </button>
      </div>
      <div className="contenedor-grid">
        {publicaciones.map((publicacion, index) => (
          <div
            key={index}
            className={`${publicacion.hidden ? 'hidden-post' : ''}`}
          >
            <CardPublicacion
              title={publicacion.title}
              content={publicacion.content}
              dateUploaded={publicacion.dateUploaded}
            />

            <div className="tab-container">
              <button
                className="btn btn-primary button-tab  "
                onClick={() => handleEditPost(publicacion)}
              >
                Modificar
              </button>
              <button
                className="btn btn-primary button-tab"
                onClick={() =>
                  handleHidePost(publicacion.idPost, publicacion.hidden)
                }
              >
                {publicacion.hidden ? 'Mostrar' : 'Ocultar'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PublicacionesCL
