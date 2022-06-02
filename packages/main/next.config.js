const dotenv = require('dotenv').config({ path: '../../.env' });

const { APP_URL_ACCOUNT, APP_URL_CHECKOUT, PORT, USE_PROXY } = process.env

console.log('Main app:', { APP_URL_CHECKOUT, PORT, USE_PROXY });

module.exports = {
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/checkout',
        destination: `${APP_URL_CHECKOUT}/checkout`,
      },
      {
        source: '/checkout/:path*',
        destination: `${APP_URL_CHECKOUT}/checkout/:path*`,
      },
      {
        source: '/account',
        destination: `${APP_URL_ACCOUNT}/account`,
      },
      {
        source: '/account/:path*',
        destination: `${APP_URL_ACCOUNT}/account/:path*`,
      },
    ];
  }
};
