const path = require('path');

module.exports = {
    mode: "development",
    entry: {
        public: path.resolve(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "index.js",
    },
    optimization: {
        minimize: true
    },
    devServer: {
        port: 3020,
        contentBase: path.resolve(__dirname, "./build"),
        hot: true,
        open: true,
        watchContentBase: true,
        watchOptions: {
            ignored: /node_modules/
        },
        writeToDisk: filePath => {
            return /(index.html$)|(bundle.js$)|(style.css$)/.test(filePath)
        }
    },
}