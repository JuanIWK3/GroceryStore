const stockDAO = require('../DAO/stockDAO')

function addProduct() {
  addBoo = true;
  while (addBoo) {
    const prompt = require('prompt-sync')({ sigint: true });

    console.log('-------------------------------------------');

    console.log('Code: ');
    let code = prompt('> ');

    console.log('Quantity:');
    let quantity = prompt('> ');

    stockDAO.addProduct(code, quantity);

    // console.log('-------------------------------------------');
    // console.log('Product added to shopping cart!');
    // console.log('-------------------------------------------');

    console.log('Add another product? 1-Yes 2-No');
    let another = prompt('> ');

    if (another == 2) {
      addBoo = false;
    }
  }
}

function finishSell() {
  console.log('\n------------------Invoice------------------');
  console.log('|  Name  |  Price  |  Quantity  |  Total  |\n');

  stockDAO.finishSell();
}

function listCart() {
  stockDAO.listCart();
}

module.exports = { addProduct, finishSell, listCart };