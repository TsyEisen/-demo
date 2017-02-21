var net = require('net');
var config = require('./config')

 net.createConnection(config.port,config.host,function(){
 	console.log('客户端和服务端连接上了');
 }).on('data',function(data){
 	data = data.toString();
 	console.log('接收服务端数据' + data);
 })
