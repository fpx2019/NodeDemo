//创建服务器
let http = require('http');
http.createServer(function (request, response) {
  //发送http头部
  //hhtp：状态值：200：ok
  //内容类型：text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  //发送响应数据helloworld
  response.end('Hello Node\n');
}).listen(8080);
//终端打印以下信息
console.log('Server running at http://127.0.0.1:8080/');