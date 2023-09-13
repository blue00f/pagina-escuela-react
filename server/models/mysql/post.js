import mysql from 'mysql2';
import 'dotenv/config';

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  port: process.env.DB_PORT,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
};

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const connection = mysql.createConnection(connectionString);

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos', err);
  } else {
    console.log('Conexion exitosa a la base de datos');
  }
});

export class PostModel {
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

export class LoginModel {
  static async getUser(req, res) {
    const { Username, Password } = req.body;

    const sql =
      'SELECT name, password FROM users WHERE name = ? AND password = ?';
    connection.query(sql, [Username, Password], (err, result) => {
      if (err) {
        console.error('Error al comparar usuarios:', err);
        res
          .status(500)
          .json({ error: 'Error al consultar en la base de datos' });
      } else {
        if (result.length > 0) {
          res.json({ message: 'Inicio de sesión exitoso' });
        } else {
          res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
        }
      }
    });
  }
}
