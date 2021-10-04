const productDAO = require('../DAO/productDAO');

function registerProduct() {
  const prompt = require('prompt-sync')({ sigint: true });

  console.log('Code: ');
  let code = prompt('> ');
  console.log('Name:');
  let name = prompt('> ');
  console.log('Price:');
  let price = prompt('> ');
  console.log('Quantity:');
  let quantity = prompt('> ');

  productDAO.registerProduct(code, name, price, quantity);

  console.log('Product registered successfully');
}

function deleteProduct() {
  const prompt = require('prompt-sync')({ sigint: true })

  console.log("Product's code:");

  let code = prompt('> ');

  productDAO.deleteProduct(code);
  console.log('Product deleted successfully!');
}

function listProducts() {
  productDAO.listProducts();
}


module.exports = { registerProduct, deleteProduct, listProducts };