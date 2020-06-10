const express = require('express')
const cookieParser = require('cookie-parser');

const app = express()
app.use(cookieParser())
const port = 3000

app.get('/showcookie', (req, res) => {
  // 获取前端请求中带来的cookie
  let cookies = req.cookies;
  // 清楚指定cookie
  // res.clearCookie('uname')
  res.send(cookies);
})

app.get('/add/cookie', (req, res) => {
  let uname = req.query.uname;
  let uage = req.query.uage;
  // 设置cookie的格式：res.cookie(key, val)
  res.cookie('uname', uname);
  // 设置过期时间，过期后cookie自动删除
  res.cookie('uage', uage, {
    maxAge: 60 * 1000
  });
  res.send('设置完成！')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))