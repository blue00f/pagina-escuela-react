import CardAutoridad from '../../CardAutoridad/CardAutoridad';

function Autoridades() {
  return (
    <section className="content-container">
      <div className="contenedor-titulo">
        <h2 className="titulo-seccion">Autoridades</h2>
      </div>
      <div className="contenedor-imagenes">
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente'}
          nombre={'Ferreyra'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Preceptor'}
          nombre={'Irigoyen'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente'}
          nombre={'Ferreyra'}
        />
      </div>
      <div className="contenedor-imagenes">
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente'}
          nombre={'Fereyra'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Preceptor'}
          nombre={'Irigoyen'}
        />
        <CardAutoridad
          foto={'./fotoUser.webp'}
          cargo={'Regente'}
          nombre={'Fereyra'}
        />
      </div>
    </section>
  );
}

export default Autoridades;
