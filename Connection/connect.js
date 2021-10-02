const connection = require('./config');

connection.connect(function (err) {
  if (err) throw err;
  console.log('Connected');
});