var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpackConfig = require('./webpack.config.base')
var config = require('../config')
webpackConfig.output.publicPath = config.publicPath
webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        title:config.title,
        filename:'index.html',
        template:'ASSETS/template/index.html',
        inject:'body'
    })
)
module.exports = webpackConfig