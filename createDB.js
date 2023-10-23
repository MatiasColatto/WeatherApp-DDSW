const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PASSWORD',
});

const databaseName = 'nestdbou';

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }

  console.log('Conexión exitosa a MySQL.');

  connection.query(`CREATE DATABASE IF NOT EXISTS ${databaseName}`, (err, result) => {
    if (err) {  
      console.error('Error al crear la base de datos:', err);
      connection.end();
      return;
    }

    console.log(`Base de datos "${databaseName}" creada correctamente.`);
    connection.end();
  });
});
