var webpack = require('webpack')
var path = require('path')
var config = require('../config')
var __HELPER__=require('./helper')
var ENV = process.env.NODE_ENV!=='production'
var Px2rem  = require('postcss-px2rem')

var __global__={
    __DEV__:JSON.stringify(ENV)
}

var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports={
    entry:__HELPER__.getEntrys(config.entrys),
    output:{
        filename:__HELPER__.masterName('app'),
        path:config.outputPath
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                exclude:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader?module&localIdentName=[name]__[local]___[hash:base64:5]',
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer'),
                                        require('cssnano'),
                                        Px2rem({
                                            remUnit:64
                                        })
                                    ];
                                }
                            }
                        }
                    ]
                })
            },
            {
                test:/\.css$/,
                include:[
                    path.join(__dirname,'../node_modules'),
                    path.join(__dirname,'../assets/font'),
                ],
                loader:'style-loader!css-loader'
            },
            { test: /\.(png|jpg|gif)$/, loader: 'url-loader?limit=8192' },
            {
                test:/\.jsx?/,
                loader:'babel-loader'
            },
            {
                test: /\.(svg|woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: 'url-loader?limit=10240'
            }
        ]
    },
    resolve:{
        extensions:['.css','.js','.jsx'],
        alias:{
            ASSETS:path.join(__dirname,'../assets'),
            CMP:path.join(__dirname,'../app/component'),
            APIPath:path.join(__dirname,'../app/api')
        }
    },
    plugins:[
        new ExtractTextPlugin(__HELPER__.masterName('css')),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin(__global__),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            filename: __HELPER__.masterName('vendor'),
            minChunks: Infinity
        })
    ]

}