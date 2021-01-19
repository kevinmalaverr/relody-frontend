require('ignore-styles')

require('@babel/register')({
  presets: [
    ['@babel/preset-env'],
    '@babel/preset-react'
  ],
  plugins: ['react-hot-loader/babel', '@loadable/babel-plugin']
})

require('asset-require-hook')({
  extensions: ['jpg', 'png', 'gif'],
  name: '/assets/[hash].[ext]'
})

require('./server')
