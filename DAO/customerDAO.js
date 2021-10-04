const conn = require('../Connection/config');

function registerCustomer(name, cpf, address, phone) {
  const sql = 'INSERT INTO customer(name, cpf, address, phone) VALUES (?, ?, ?, ?)';
  const values = [name, cpf, address, phone];
  return conn.query(sql, values);
}

function deleteCustomer(cpf) {
  const sql = 'DELETE FROM customer WHERE cpf = ?';
  const values = [cpf];
  return conn.query(sql, values);
}

function listCustomers() {
  conn.query("SELECT * FROM customer", function (err, result) {
    if (err) throw err;

    console.log('-------------------------------------------');

    if (result.length == 0) {
      console.log("There are no customers");
    }

    for (var i = 0; i < result.length; i++) {
      let id = result[i].customer_id;
      let name = result[i].name;
      let cpf = result[i].cpf;
      let address = result[i].address;
      let phone = result[i].phone;

      console.log("" + id + " | " + name + " | " + cpf + " | " + address + " | " + phone);

    }
  });
}

module.exports = { registerCustomer, deleteCustomer, listCustomers }