import mysql from "mysql2";
import "dotenv/config";

const DEFAULT_CONFIG = {
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  port: process.env.DB_PORT ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_DATABASE ,
};

const connectionString = process.env.DATABASE_URL ?? DEFAULT_CONFIG;

const pool = mysql.createPool(connectionString);

export class PostModel {
  static async getAll(req, res) {
    const sql = "SELECT * FROM posts ORDER BY idPost DESC";
    pool.query(sql, (err, result) => {
      if (err) {
        console.error("Error al obtener las publicaciones", err);
        res.status(500).json({ error: "Error al obtener las publicaciones" });
      } else {
        console.log("Publicaciones obtenidas correctamente");
        res.json(result);
      }
    });
  }

  static async create(req, res) {
    const { title, content } = req.body;

    const sql = "INSERT INTO posts (title, content) VALUES (?, ?)";
    pool.query(sql, [title, content], (err, result) => {
      if (err) {
        console.error("Error al insertar en la base de datos", err);
        res
          .status(500)
          .json({ error: "Error al insertar en la base de datos" });
      } else {
        res.json({ message: "Publicación insertada correctamente" });
      }
    });
  }

  static async updateHiddenPost(req, res) {
    const postId = req.params.id;
    const { hidden } = req.body;

    const sql = "UPDATE posts SET hidden = ? WHERE idPost = ?";
    pool.query(sql, [hidden, postId], (err, result) => {
      if (err) {
        console.error(
          "Error al ocultar/mostrar la publicación en la base de datos",
          err
        );
        res.status(500).json({
          error: "Error al ocultar/mostrar la publicación en la base de datos",
        });
      } else {
        res.json({ message: "Publicación ocultada/mostrada correctamente" });
      }
    });
  }

  static async updatePost(req, res) {
    const postId = req.params.id;
    const { title, content } = req.body;

    const sql = "UPDATE posts SET title = ?, content = ? WHERE idPost = ?";
    pool.query(sql, [title, content, postId], (err, result) => {
      if (err) {
        console.error(
          "Error al modificar la publicación en la base de datos",
          err
        );
        res.status(500).json({
          error: "Error al modificar la publicación en la base de datos",
        });
      } else {
        res.json({ message: "Publicación modificada correctamente" });
      }
    });
  }
}

export class LoginModel {
  static async getUser(req, res) {
    const { Username, Password } = req.body;

    const sql =
      "SELECT name, password FROM users WHERE name = ? AND password = ?";
    pool.query(sql, [Username, Password], (err, result) => {
      if (err) {
        console.error("Error al comparar usuarios:", err);
        res
          .status(500)
          .json({ error: "Error al consultar en la base de datos" });
      } else {
        if (result.length > 0) {
          res.json({ message: "Inicio de sesión exitoso" });
        } else {
          res.status(401).json({ error: "Usuario o contraseña incorrectos" });
        }
      }
    });
  }
}
