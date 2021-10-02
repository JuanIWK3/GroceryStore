const customer = require('./DAO/customerDAO')
const product = require('./DAO/productDAO')
const customerUI = require('./UI/customer')

function menu(opt) {
  switch (opt) {
    case 1:
      prompt = require('prompt-sync')({ sigint: true });

      foundCorrectNumber = false;

      while (!foundCorrectNumber) {
        console.log('-------------------------------------------');
        console.log('\n1-Register \n2-Delete \n3-Update \n4-List');
        let opt = prompt('> ');

        opt = Number(opt);

        if (opt == 1 || opt == 2 || opt == 3 || opt == 4) {
          switch (opt) {
            case 1: customerUI.registerCustomer();
              break;
            case 2: customerUI.deleteCustomer();
              break;
            case 3: console.log("Customer updated");
              break;
            case 4: customer.listCustomers();
              break;
          }
          foundCorrectNumber = true;
        } else {
          console.log('Invalid option!');
        }
      }
      break;
    case 2:
      prompt = require('prompt-sync')({ sigint: true });

      foundCorrectNumber = false;

      while (!foundCorrectNumber) {
        console.log('-------------------------------------------');
        console.log('\n1-Register \n2-Delete \n3-Update \n4-List');
        let opt = prompt('> ');

        opt = Number(opt);

        if (opt == 1 || opt == 2 || opt == 3 || opt == 4) {
          switch (opt) {
            case 1: console.log("Product registered");
              break;
            case 2: console.log("Product deleted");
              break;
            case 3: console.log("Product updated");
              break;
            case 4: product.listProducts();
              break;
          }
          foundCorrectNumber = true;
        } else {
          console.log('Invalid option!');
        }
      }
      break;
  }
}

function section() {
  const prompt = require('prompt-sync')({ sigint: true });

  let foundCorrectNumber = false;

  while (!foundCorrectNumber) {
    console.log('-------------------------------------------');
    console.log('\n1-Customer \n2-Product \n3-Sales \n0-Exit');

    let option = prompt('> ');

    option = Number(option);

    if (option === 1 || option === 2 || option === 3) {
      menu(option);
      foundCorrectNumber = true;
    } else {
      console.log('Invalid Section!');
    }
  }
}

module.exports = { section, menu };