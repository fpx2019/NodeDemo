const http = require('http');
const fs = require('fs');

let port = 8080;
let sever = http.createServer();

sever.on('request', (req, res) => {
  // res.setHeader("Content-Type", "text/html;charset=utf-8");
  switch (req.url) {
    case '/':
      res.write('首页');
      res.end();
      break;
    case '/login.html':
      // res.write('登录页');
      fs.readFile('./login.html', 'utf8', (err, data) => {
        if (err) {
          throw err
        } else {
          res.write(data);
          res.end();
        }
      })
      break;
    case '/login.css':
      // res.write('登录页');
      fs.readFile('./login.css', 'utf8', (err, data) => {
        if (err) {
          throw err
        } else {
          res.end(data);
        }
      })
      break;
    case '/node.jpg':
      // res.write('登录页');
      fs.readFile('./node.jpg', (err, data) => {
        if (err) {
          throw err
        } else {
          res.end(data);
        }
      })
      break;
    default:
      res.writeHead(404, 'not found', {
        "Content-Type": "text/plain;charset=utf-8"
      })
      res.end();
      break;
  }
});

sever.listen(port, '127.0.0.1', () => {
  console.log(`服务已启动，正在监听${port}端口`)
})