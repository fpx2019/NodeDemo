//以追加的方式增加文件
const fs = require('fs');

let user_info = [
  {
    name: 'sun',
    age: 20,
    phone: '111'
  },
  {
    name: 'zun',
    age: 21,
    phone: '222'
  },
  {
    name: 'xun',
    age: 22,
    phone: '333'
  },

];
let userInfo = JSON.stringify(user_info, "", "\t");

console.log('开始异步写入文件')
//a以追加的方式写入，如果不存在，就创建
fs.writeFile('./a.json', userInfo, { flag: 'a' }, (err) => {
  if (err) {
    throw err
  } else {
    console.log('写入成功');

    let res = fs.readFileSync('./a.json', 'utf-8');

    console.log(`最新内容是:${res}`);
  }
})
