**Setup Babel:

npm install --save-dev babel-core babel-preset-es2015 babel-preset-react

**Create webpack.config.js with below content:

const path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(\_\_dirname, 'public')
  }
};

**Install Webpack:

npm install --save-dev webpack webpack-cli webpack-dev-server
