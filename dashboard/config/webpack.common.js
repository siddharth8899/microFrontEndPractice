const { vueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].[contenthash].js'
    },
    resolve: {
        extensions: ['.vue', '.js']
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i, // for importing different fonts and images in vueJS dashBoard
                use: [
                    { loader: 'file-loader'}
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue=loader'
            },
            {
                test: /\.scss|\.css$/,
                use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
    plugins: [new vueLoaderPlugin(),  
        new HtmlWebpackPlugin({
            template: './public/index.html',
    }),]
};