const express = require('express')
const path = require('path');
const bodyParser = require('body-parser');
// 引入支持跨域的第三方包
const cors = require('cors');

const app = express()
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// 通过中间件，支持跨域
// app.use(cors()); // 这种方式不友好，一旦使用，所有的接口全都允许跨域，不安全
const port = 3000
// 初始化用户列表，用于保存新增的用户
let userList = [
  { username: '马云', phone: '111', pwd: '11', pwd2: '11' },
  { username: '马超', phone: '000', pwd: '11', pwd2: '11' },
  { username: '赵云', phone: '001', pwd: '11', pwd2: '11' }
];


app.get('/', (req, res) => res.send('Hello World!'))

// post请求，注册的接口，新增用户
app.post('/register', (req, res) => {
  console.log(req.body);
  userList.push(req.body);
  console.log(userList)
  console.log('用户列表：', userList);
  res.send('666');
})

// get请求，用于展示用户信息
// 指定某一个接口跨域，其他接口仍然不允许跨域
app.get('/userinfo', cors(), (req, res) => {
  console.log(req.query);
  let info = '';
  userList.forEach(item => {
    if (item.username === req.query.name) {
      info = item.phone;
    }
  })
  res.send(JSON.stringify({ phone: info }));
});

app.listen(port, () => console.log(`Example app listening on port port!`))