const dotenv = require('dotenv').config({ path: '../../.env' });

const { PORT, USE_PROXY } = process.env;

console.log(dotenv.parsed);
console.log('Checkout app:', { PORT, USE_PROXY });

module.exports = {
  basePath: '/checkout'
};
