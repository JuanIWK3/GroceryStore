const conn = require('../Connection/config');

function listProducts() {
  conn.query("SELECT * FROM product", function (err, result) {
    if (err) throw err;

    console.log('-------------------------------------------');

    for (var i = 0; i < result.length; i++) {
      let id = result[i].id;
      let name = result[i].name;
      let price = result[i].price;
      let amount = result[i].amount;

      console.log("" + id + " | " + name + " | R$ " + price + " | " + amount + " un");
    }
  });
}

module.exports = { listProducts }