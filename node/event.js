//事件驱动程序

//引入event模块
let events = require('events');
// 创建 eventEmitter 对象
let eventEmitter = new events.EventEmitter();
//创建事件处理程序
let conectHeandler = function connected() {
  console.log('连接成功');
  // 触发 data_received 事件 
  eventEmitter.emit('data_received');
}
//绑定connection事件处理程序
eventEmitter.on('connection', conectHeandler);
//使用匿名函数绑定data_received事件
eventEmitter.on('data_received', function () {
  console.log('数据接收成功')
});
// 触发 connection 事件 
eventEmitter.emit('connection');

console.log('程序执行完毕');