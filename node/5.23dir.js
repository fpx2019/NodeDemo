const fs = require('fs');
//异步创建
// fs.mkdir('./class1', err => {
//   if (err) throw err;
//   console.log('创建成功！')
// })

//同步创建

// try {
//   let res = fs.mkdirSync('./two');
//   console.log(res);
// } catch (err) {
//   throw err;
// }

//读取目录

// fs.readdir('./ly', (err, dir) => {
//   if (err) throw err;
//   console.log(dir);
// })

//异步读取

// try {
//   let res = fs.readdirSync('./ly');
//   console.log(res);
// } catch (err) {
//   throw err;
// }

//删除目录

// fs.rmdir('./two', err => {
//   if (err) throw err;
//   console.log('删除成功');
// })

//异步删除
try {
  let res = fs.rmdirSync('./class1');
  console.log(res);
} catch (err) {
  throw err;
}