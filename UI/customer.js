const customerDAO = require('../DAO/customerDAO');

function registerCustomer() {
  const prompt = require('prompt-sync')({ sigint: true });

  console.log('Name: ');
  let name = prompt('> ');
  console.log('Cpf:');
  let cpf = prompt('> ');
  console.log('Address:');
  let address = prompt('> ');
  console.log('Phone:');
  let phone = prompt('> ');

  customerDAO.registerCustomer(name, cpf, address, phone);

  console.log('Customer registered successfully!');
}

function deleteCustomer() {
  const prompt = require('prompt-sync')({ sigint: true })

  console.log("Customer's cpf:");

  let cpf = prompt('> ');

  customerDAO.deleteCustomer(cpf);
  console.log('Customer deleted successfully!');
}

function listCustomers() {
  customerDAO.listCustomers();
}

module.exports = { registerCustomer, deleteCustomer, listCustomers };