import { useState, useEffect } from 'react';
import CardPublicacion from '../../CardPublicacion/CardPublicacion';
import './Publicaciones.css';

const URL_POSTS = 'http://localhost:3001/posts';

function PublicacionesSL() {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    fetch(URL_POSTS)
      .then((res) => res.json())
      .then((data) => {
        setPublicaciones(data);
      })
      .catch((error) => {
        console.error('Error al obtener las publicaciones: ', error);
      });
  }, []);

  const handleHidePost = (postId, isHidden) => {
    const newHiddenState = !isHidden;

    fetch(`http://localhost:3001/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ hidden: newHiddenState }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(
            'Error al ocultar/mostrar la publicación: ' + response.statusText
          );
        }
      })
      .then((data) => {
        console.log(data.message);

        setPublicaciones((prevPublicaciones) =>
          prevPublicaciones.map((pub) =>
            pub.idPost === postId ? { ...pub, hidden: newHiddenState } : pub
          )
        );
      })
      .catch((error) => {
        console.error('Error al ocultar/mostrar la publicación:', error);
      });
  };

  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Publicaciones</h2>
      </div>

      <div className="contenedor-grid">
        {publicaciones.map((publicacion) => (
          <div
            key={publicacion.idPost}
            className={`estilos-div ${publicacion.hidden ? 'hidden' : ''}`}
          >
            <CardPublicacion
              title={publicacion.title}
              content={publicacion.content}
              dateUploaded={publicacion.dateUploaded}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default PublicacionesSL;
