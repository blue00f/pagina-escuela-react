import connection from '../models/mysql/post.js';

export class PostController {
  static async getAll(req, res) {
    const sql = 'SELECT * FROM posts ORDER BY idPost DESC';
    connection.query(sql, (err, result) => {
      if (err) {
        console.error('Error al obtener las publicaciones', err);
        res.status(500).json({ error: 'Error al obtener las publicaciones' });
      } else {
        console.log('Publicaciones obtenidas correctamente');
        res.json(result);
      }
    });
  }

  static async create(req, res) {
    const { title, content } = req.body;

    const sql = 'INSERT INTO posts (title, content) VALUES (?, ?)';
    connection.query(sql, [title, content], (err, result) => {
      if (err) {
        console.error('Error al insertar en la base de datos', err);
        res
          .status(500)
          .json({ error: 'Error al insertar en la base de datos' });
      } else {
        res.json({ message: 'Publicación insertada correctamente' });
      }
    });
  }

  static async update(req, res) {
    const postId = req.params.id;
    const { hidden } = req.body; // Asegúrate de que estás obteniendo el campo hidden del cuerpo de la solicitud

    const sql = 'UPDATE posts SET hidden = ? WHERE idPost = ?';
    connection.query(sql, [hidden, postId], (err, result) => {
      if (err) {
        console.error(
          'Error al ocultar/mostrar la publicación en la base de datos',
          err
        );
        res.status(500).json({
          error: 'Error al ocultar/mostrar la publicación en la base de datos',
        });
      } else {
        res.json({ message: 'Publicación ocultada/mostrada correctamente' });
      }
    });
  }
}
