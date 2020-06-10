const path = require('path');

//1.解析路径 path.parse
console.log('path.parse:', path.parse(__filename));

//2.获取路径名 path.basename
console.log('path.basename:', path.basename(__filename));

//3.路径名 path.dirname
console.log('path.dirname:', path.dirname(__dirname));

//4.文件后缀名 path.extname
console.log('path.extname:', path.extname(__filename));
