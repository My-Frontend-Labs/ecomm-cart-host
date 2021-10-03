const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    devServer: {
        port: 8082,
    },
    mode: 'development',
    plugins: [
        new ModuleFederationPlugin({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './modules': './src/bootstrap.js',
            },
            shared: ['faker']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
};