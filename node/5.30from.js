const http = require('http');
const fs = require('fs');
const url = require('url');
// 引入qs，处理post请求
let querystring = require('querystring');

let sever = http.createServer();

sever.on('request', (req, res) => {
  // 通过url模块的parse方法解析路径，记得将第二个参数设置为true
  let { pathname, query } = url.parse(req.url, true);
  switch (pathname) {
    case '/':
      fs.readFile('./login.html', 'utf8', (err, data) => {
        if (err) {
          throw err
        } else {
          res.write(data)
          res.end();
        }
      })
      break;
    case '/login.css':
      fs.readFile('./login.css', (err, data) => {
        if (err) {
          throw err
        } else {
          res.end(data);
        }
      })
      break;
    case '/login':
      // 解决页面中的中文
      res.setHeader("Content-Type", "text/plain;charset=utf-8");
      res.write(`
        欢迎你, ${query.username},
        初始密码是：${query.pwd},
        本次登陆时间为：${new Date()}
      `);
      res.end();
      break;
    // login2是post请求
    case '/login2':
      // 解决页面中的中文
      res.setHeader("Content-Type", "text/plain;charset=utf-8");
      if (req.method.toLowerCase() === 'post') {
        let reqBody = '';
        req.on('data', data => {
          console.log(decodeURIComponent(data));
          reqBody += data
        })
        req.on('end', () => {
          let dataObj = querystring.parse(reqBody.toString());
          res.write(`
            欢迎你，${dataObj.username},
            初识密码为：${dataObj.pwd},
            本次登陆时间是：${new Date()}
          `);
          res.end();
        })
      }
      break;
    default:
      break;
  }
})

sever.listen(8080, '127.0.0.1', () => {
  console.log('OK!')
  console.log('127.0.0.1:8080')
})