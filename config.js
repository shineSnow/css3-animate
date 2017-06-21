var path = require('path')

module.exports = {
    title:'花样砍价会',
    entrys:{
        app:path.join(__dirname,'./app')
    },
    outputPath:path.join(__dirname,'./dist'),
    publicPath:'/p/wedding/Public/wap/m/niceBargain/',
    port: 8080,
    proxyTable:{
        '/p': 'http://admintest.hunliji.com',
    }
}