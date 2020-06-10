const fs = require('fs');

let writeObj = {
  name: 'Pony',
  age: 20
}
let writeContent = JSON.stringify(writeObj);
console.log('异步写入开始');
fs.writeFile('./data.json', writeContent, (err) => {
  if (err) {
    console.log(err)
  }
  let data = fs.readFileSync('./data.json', 'utf8')
  console.log(`你写入的内容是：${data}`)
});
console.log('异步写入结束');