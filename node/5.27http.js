const http = require('http');
const url = require('url');


//创建http应用服务实例对象
let sever = http.createServer();

sever.on("request", (req, res) => {
  let { pathname, query } = url.parse(req.url);
  console.log(req.headers);
  res.setHeader("Content-Type", "text/plain;charset=utf-8");
  console.log(666, req.url);
  res.write('lllllllllllllllll');
  res.write('嗯嗯嗯嗯嗯嗯嗯嗯呃');
  res.end();
})

sever.listen(8080, '127.0.0.1', () => {
  console.log(`服务器开始监听！端口是：${8080}`);
})