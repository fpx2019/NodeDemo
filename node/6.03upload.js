const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
// 引入multer来解决上传图片的问题
const multer = require('multer');

const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 声明multer的配置，方便存贮图片
const storage = multer.diskStorage({
  // 文件保存的路径
  destination: (req, file, cb) => {
    cb(null, path.resolve("files/images"));
  },
  // 文件名和后缀名
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})
// let upload = multer({dest: "./files/images"}); // 基础版的配置方式，有一些问题1.文件名是随机的，不方便读取2.没有后缀名，不能直接查看。所以改为storage的配置方式
let upload = multer({ storage });

const port = 3000

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/upload', upload.single('myFile'), (req, res) => {
  let jsonObj = {
    msg: '保存成功',
    filepath: '/images/' + path.basename(req.file.path)
  }
  res.send(JSON.stringify({ jsonObj }))
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))