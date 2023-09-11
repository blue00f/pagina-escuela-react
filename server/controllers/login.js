import connection from '../models/mysql/post.js';

export class LoginController {
  static async getUser(req, res) {
    const { Username, Password } = req.body; // Utiliza req.body en lugar de req.query

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
