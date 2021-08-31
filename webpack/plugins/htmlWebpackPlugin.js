const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = new HtmlWebpackPlugin({
    template: './src/index.html',
    favicon: "./src/content/statics/favicon.ico"
});
