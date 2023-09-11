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

export default connection;
