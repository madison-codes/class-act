const path = require('path');

module.exports = {
  entry: {
    main: "./entry.js",
  },
  output: {
    path: __dirname,
    filename: "bundle.js"
  }
}
