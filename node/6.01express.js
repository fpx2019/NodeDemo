const express = require('express');

const path = require('path');

let app = express();

//使用app.use方法来使用中间件
//express.static处理静态资源
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {

  res.send('Hello World');
})

let server = app.listen(8080, (host, port) => {

  host = server.address().address
  port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})