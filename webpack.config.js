const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const { ModuleFederationPlugin } = webpack.container;
module.exports = {
    entry: './src/index.tsx',
    mode: process.env.NODE_ENV || 'development',
    devServer: {
        client: {
            overlay: {
                errors: true,
                warnings: false
            }
        },
        host: '0.0.0.0',
        hot: true,
        port: 3000,
        open: false,
        historyApiFallback: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
            'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'
        },
        proxy: [
            {
                context: '/remoteApp',
                target: 'http://127.0.0.1:3001'
            },
        ],
    },
    output: {
        publicPath: '/',
        path: path.resolve(__dirname, 'dist'),
        filename: "static/js/[name].js",
        chunkFilename: "static/js/[name].chunk.js",
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            filename: 'remoteEntry.js',
            remotes: {
                remoteApp: 'remoteApp@/remoteApp/remoteEntry.js',
            },
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            publicPath: './'
        }),
    ]
};