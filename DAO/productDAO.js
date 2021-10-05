const conn = require('../Connection/config');

function registerProduct(code, name, price, quantity) {
  const sql = 'INSERT INTO stock(code, name, price, quantity) VALUES (?, ?, ?, ?)';
  const values = [code, name, price, quantity];
  return conn.query(sql, values);
}

function deleteProduct(code) {
  const sql = 'DELETE FROM stock WHERE code = ?';
  const values = [code];
  return conn.query(sql, values);
}

function listProducts() {
  conn.query("SELECT * FROM stock", function (err, result) {
    if (err) throw err;

    console.log('-------------------------------------------');

    if (result.length == 0) {
      console.log("There are no products");
      console.log('-------------------------------------------');
    }

    for (var i = 0; i < result.length; i++) {
      let id = result[i].id;
      let name = result[i].name;
      let price = result[i].price;
      let quantity = result[i].quantity;

      console.log("" + id + " | " + name + " | $ " + price + " | " + quantity + " un");
    }
  });
}

module.exports = { registerProduct, deleteProduct, listProducts }