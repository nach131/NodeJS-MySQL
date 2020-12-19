const mysql = require('mysql');
const { promisify } = require('util')
const { database } = require('./keys')

const pool = mysql.createPool(database);

pool.getConnection((err, connection) => {
  if (err) {
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      console.error('Se cerro la conexion con la base de datos')
    }
    if (err.code === 'ER_CON_COUNT_ERROR') {
      console.error('DEMASIADAS CONEXIONES A LA BD')
    }
    if (err.code === 'ECONNREFUSED') {
      console.error('LA CONEXION FUE RECHAZADA')
    }
  }
  if (connection) connection.release();
  console.log('Conectado a DB');
  return;
})

pool.query = promisify(pool.query);

module.exports = pool;