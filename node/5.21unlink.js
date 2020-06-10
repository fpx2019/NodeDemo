const fs = require('fs');

fs.unlink('./e.json', (err) => {
  if (err) {
    throw err;
  } else {
    console.log('delate!');
  }
});

try {
  let res = fs.unlinkSync('./c.json');
  console.log(`同步删除文件:${res}`)
} catch (err) {
  throw err
}
