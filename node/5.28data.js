const http = require('http');
const fs = require('fs');
let port = 8080;
let sever = http.createServer();
sever.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      res.end(
        JSON.stringify({
          msg: 'home'
        })
      )
      break;
    case '/data':
      res.end(
        JSON.stringify({
          msg: 'hello',
          code: 100
        })
      )
      break;
  }

})











sever.listen(port, '127.0.0.1', () => {
  console.log(`服务已启动，正在监听${port}端口`)
})