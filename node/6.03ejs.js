const express = require('express')
const path = require('path');
const app = express()
app.use(express.static(path.join(__dirname, 'public')));
//指定模板的位置
app.set('views', path.join(path.join(__dirname, 'views')));
//设置模板引擎的格式
app.set('view engine', 'ejs');
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/ejs', (req, res) => {
  res.render('index');
})
app.listen(port, () => console.log(`Example app listening on port port!`))