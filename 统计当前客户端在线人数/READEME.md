###开启客户端telnet构建客户端

开始-控制面板-程序--打开或者关闭windows功能--找到telnet客户端打上对勾

###打开客户端
1.打开终端 输入telnet 127.0.0.1 3000开启客户端；
2.或者浏览器中输入127.0.0.1:3000;
上述两种方式都可以建立连接（触发connection事件）
###nodemon 可以帮忙自动重启服务器，不用每次手动重启
npm install nodemon -g
nodemon server.js

###使用代码构建客户端