const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  user: 'alepereira',
  password: 'eskalol0123',
  host: 'localhost',
  database: 'model_example'
});

module.exports = connection;