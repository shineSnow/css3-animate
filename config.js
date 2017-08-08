var path = require('path')

module.exports = {
    title:'',
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
