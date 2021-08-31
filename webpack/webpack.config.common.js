const path = require('path');

const plugins = require("./plugins")

const rules = require("./rules")

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.[hash].js',
        publicPath: '/',
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
        },
    },
    module: {
        rules: rules
    },
    plugins: plugins
};
