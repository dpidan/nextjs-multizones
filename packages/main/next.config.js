const dotenv = require('dotenv').config({ path: '../../.env' });

const { APP_HOST_CHECKOUT, PORT, USE_PROXY } = process.env

module.exports = {
  rewrites() {
    return [
      {
        source: '/:path*',
        destination: `/:path*`,
      },
      {
        source: '/checkout',
        destination: `${APP_HOST_CHECKOUT}/checkout`,
      },
      {
        source: '/checkout/:path*',
        destination: `${APP_HOST_CHECKOUT}/checkout/:path*`,
      },
    ];
  }
};
