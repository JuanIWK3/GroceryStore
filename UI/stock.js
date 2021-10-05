const stockDAO = require('../DAO/stockDAO')

function addProduct() {
  const prompt = require('prompt-sync')({ sigint: true });

  console.log('Code: ');
  let code = prompt('> ');

  console.log('Quantity:');
  let quantity = prompt('> ');

  stockDAO.addProduct(code, quantity);

  console.log('Product added to shopping cart!');
}

function finishSell() {
  stockDAO.finishSell();
}

function listCart() {
  stockDAO.listCart();
}

module.exports = { addProduct, finishSell, listCart };