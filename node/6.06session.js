const express = require('express')
const cookie = require('cookie-parser');
const session = require('express-session');
const app = express()
app.use(cookie());
app.use(session({
  secret: '123abcABC',
  cookie: {
    maxAge: 20 * 1000
  }
}));
const port = 3000

app.get('/count', (req, res) => {
  if (!req.session.count) {
    req.session.count = 1
  }
  req.session.count++
  res.send(`count:${req.session.count}`)
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))