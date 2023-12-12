const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@scss': path.resolve(__dirname, 'src/components/scss'),
      '@img': path.resolve(__dirname, 'src/assets/img'),
    },
  },
};