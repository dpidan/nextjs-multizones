const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dotenv = require('dotenv').config({ path: '../../.env' });
const { PROXY_PORT = 9000, USE_PROXY } = process.env;

if (USE_PROXY) {
  const app = express();

  app.use('/checkout', createProxyMiddleware({
    target: 'http://localhost:3001',
    changeOrigin: true,
  }));

  // TODO: set these up via shared configs
  app.use('/', createProxyMiddleware({
    target: 'http://localhost:3000',
    changeOrigin: true,
  }));

  app.listen(PROXY_PORT, () => {
    console.log(`Proxy server listening on port ${PROXY_PORT}`);
  });
}
