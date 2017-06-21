var express = require('express')
var app = express()
var path = require('path')
var {port=3000,proxyTable={}} = require('./config')
const proxy = require('http-proxy-middleware')
var webpack = require('webpack'),
    webpackDevMiddleware = require('webpack-dev-middleware'),
    webpackHotMiddleware = require('webpack-hot-middleware'),
    webpackDevConfig = require('./webpack/webpack.config.dev');

var compiler = webpack(webpackDevConfig);

Object.keys(proxyTable).forEach((context)=> {
    let options = proxyTable[context]
    if (typeof options === 'string') {
        options = {
            target: options,
            changeOrigin: true,
        }
    }
    app.use(proxy(context, options))
})

app.use(webpackDevMiddleware(compiler,{
    hot: true,
    publicPath: "/dist",
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static(
    path.join(__dirname,'/')
))

app.listen(port,()=>{
    console.log(port+',you know!')
})