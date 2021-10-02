const mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  database: 'grocerystore'
});

module.exports = connection;
