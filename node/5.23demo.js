//使用fs实现小型数据库操作功能
const fs = require('fs');

let stu = {
  name: '张峰',
  number: '007',
}

//判断文件是否存在
let isExist = fs.existsSync('./data1.json');

if (!isExist) {

  //文件不存在，就创建
  try {
    fs.writeFileSync('./data1.json', '[]', err => {
      console.log('初始化成功');
    })
  } catch (err) {
    throw err
  }
}

//读取内容并跟新
fs.readFile('./data1.json', 'utf-8', (err, data) => {
  if (err) throw err;
  else {
    let infoArr = JSON.parse(data);
    infoArr.push(stu);
    let finnalstr = JSON.stringify(infoArr);
    fs.writeFile('./data1.json', finnalstr, (err, data) => {
      if (err) throw err;
      else {
        console.log('更新成功');

        try {
          let res = fs.readFileSync('./data1.json', 'utf-8');
          console.log(`当前班级人数:`, JSON.parse(res).length);
        } catch (err) {
          throw err
        }
      }
    })
  }
})

