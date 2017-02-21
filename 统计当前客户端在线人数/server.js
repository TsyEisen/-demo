var net = require('net');
var config = require('./config');
var curOnlinePerson = 0;
net.createServer(function(socket){
	//监听客户端连接事件 
	console.log('客户端连接上了');
	curOnlinePerson += 1;
	console.log('统计当前客户端的在线人数 '+curOnlinePerson);
	socket.write('hello');//发给客户端
	socket.on('data',function(data){
		data = data.toString();
		console.log('来自客户端数据');
	}).on('error',function(){
		console.log('有客户端异常退出了');
		curOnlinePerson -= 1;
		console.log('统计当前客户端的在线人数 '+curOnlinePerson);
	})
}).listen(config.port,config.host,function(){
	console.log('server is runnig at port'+config.port)
})