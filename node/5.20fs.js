const fs = require('fs');
// console.log(fs);
// 开始异步读取文件
console.log('开始异步读取文件');
fs.readFile('../node-demo/class1/temp.txt', (error, data) => {
  console.log(`您要读取的内容是：${data}`)
});
console.log('异步读取文件结束');

// 使用try-catch捕获同步错误
try {
  let res = fs.readFileSync('./input.txt');
  console.log(`try:您要读取的内容是-${res}`)
} catch (error) {
  console.log(error)
}
// =============
console.log('开始同步读取文件');
let res = fs.readFileSync('./input.txt');
console.log(`您要读取的内容是——————${res}`);
console.log('同步读取文件结束');