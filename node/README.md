# Node.js
- 使用var声明变量，会出现变量提升的情况
- 使用const的两个场景：声明常量；这个值只能在定义处修改
- __filename当前运行的脚本文件名,__dirname当前运行的脚本所在的目录
- emit触发，on绑定
## Express模块(框架)
- Express是Node.JS第三方库
- Express可以处理各种HTTP请求
- Express是目前最流行的基于Node.js的Web开发框架，
- Express框架建立在node.js内置的http模块上，可以快速地搭建一个Web服务器

## HTTP

- HTTP： Hyper Text Trannfer Protocol 超文本传输协议
- TCP： Transmission Control Protocol 传输控制协议
- URL： uniform resource location
- TS: TypeScript
- HTTP是一个无状态的协议，无状态的意思是：这一次的结果不受上一次状态的影响


- 第一次握手：建立连接时，由客户端发起，想服务器发送syn包，并进入SYN_SENT状态；
- 第二次握手：服务器收到syn包，发送自己的syn包给客户端，服务器进入SYN_RECV状态；
- 第三次握手：客户端收到服务器发来的包，向服务器发送确认包，进入ESTABLISHED状态，服务端收到后也进入ESTABLISHED状态，TCP连接成功，三次握手完成。

### 四次挥手是改进的三次握手
- 第一次挥手:客户端向服务端发起FIN请求，请求关闭数据传输；
- 第二次挥手：服务端收到FIN后向发ACK，确认包；
- 第三次挥手：服务端向客户端发FIN；
- 第四次挥手：客户端收到FIN后回复ACK给服务端，四次挥手结束。
- 注释：
（established：已建立的; 已设立的，ACK：Acknowledge确认，Seq：Sequence，syn：同步序列编号