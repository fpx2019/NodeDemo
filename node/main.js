//阻塞代码实例
let fs = require("fs");
let data = fs.readFileSync('input.txt');
console.log(data.toString());
console.log("程序执行结束!");


//非阻塞代码实例
//首先创建input.txt文件，其次创建main.js文件
let fs = require('fs');
fs.readFile('input.txt', function (err, data) {
  if (err) return console.error(err);
  console.log(data.toString());
});
console.log("程序执行结束!");