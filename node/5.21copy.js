const fs = require('fs');

fs.copyFile('./a.json', './b.json', (err) => {
  if (err) {
    throw err
  } else {
    console.log('复制且重命名成功！')
  }
})

// ========================
try {
  let res1 = fs.copyFileSync('./a.json', './c.json');
  console.log(`0: ${res1}`)
} catch (error) {
  throw error
}

// 如果新文件已存在，则拷贝操作将失败
try {
  let res1 = fs.copyFileSync('./a.json', './c1.json', fs.constants.COPYFILE_EXCL);
  console.log(`fs.constants.COPYFILE_EXCL: ${res1}`)
} catch (error) {
  throw error
}

// 拷贝操作将尝试创建写时拷贝（copy-on-write）链接。如果平台不支持写时拷贝，则使用后备的拷贝机制。
try {
  let res1 = fs.copyFileSync('./a.json', './d.json', fs.constants.COPYFILE_FICLONE);
  console.log(`fs.constants.COPYFILE_EXCL: ${res1}`)
} catch (error) {
  throw error
}

// 拷贝操作将尝试创建写时拷贝链接。如果平台不支持写时拷贝，则拷贝操作将失败。
try {
  let res1 = fs.copyFileSync('./a.json', './e.json', fs.constants.COPYFILE_FICLONE_FORCE);
  console.log(`fs.constants.COPYFILE_EXCL: ${res1}`)
} catch (error) {
  throw error
}