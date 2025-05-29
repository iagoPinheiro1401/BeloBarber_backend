// db.js
import mysql from 'mysql2/promise';

// Configurações do banco — altere para o seu ambiente
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',       // ex: 'root'
  password: 'Liceu2020.',     // sua senha do MySQL
  database: 'Barbearia',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;