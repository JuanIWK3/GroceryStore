const conn = require('../Connection/config');

function listCart() {

  conn.query("SELECT * FROM shopping_cart", function (err, result) {
    if (err) throw err;

    console.log('-------------------------------------------');

    if (result.length == 0) {
      console.log("There are no items in the cart!");
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

function addProduct(code, quantity) {


  const sql = 'SELECT * FROM shopping_cart WHERE code = ?';
  const values = [code];
  conn.query(sql, values, function (err, result) {
    if (err) throw err;

    if (result.length == 0) {
      const sql = 'SELECT * FROM stock WHERE code = ?';
      const values = [code];
      conn.query(sql, values, function (err, result) {
        if (err) throw err;

        if (result.length == 0) {
          console.log('-------------------------------------------');
          console.log('There are no products with code ' + code + '!');
          console.log('-------------------------------------------');
        }

        let name = result[0].name;
        let price = result[0].price;
        price += quantity * price;

        const sql = 'INSERT INTO shopping_cart (code, name, price, quantity) VALUES (?, ?, ?, ?)';
        const values = [code, name, price, quantity];
        return conn.query(sql, values);
      });
    }

    else {
      const sql = 'SELECT * FROM shopping_cart WHERE code = ?';
      const values = [code];
      conn.query(sql, values, function (err, result) {
        if (err) throw err;

        if (result.length == 0) {
          console.log('-------------------------------------------');
          console.log('There are no products with code ' + code + '!');
          console.log('-------------------------------------------');
        }

        let name = result[0].name;
        let price = result[0].price;
        price += quantity * price;
        quantity += result[0].quantity;

        const sql = 'UPDATE shopping_cart ';
        const values = [code, name, price, quantity];
        return conn.query(sql, values);
      });

    }
  });

  //Checar se o produto está no carrinho {

  //Se não estiver {

  //Puxar os dados do produto no estoque{

  //Inserir no carrinho cod, nome, preco, quantidade;

  //Se estiver {

  //Puxar os dados do produto no carrinho{

  ///Atualizar no carrinho preco e quantidade;

}

module.exports = { addProduct, listCart }