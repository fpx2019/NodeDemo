console.log('当前文件名:', __filename);
console.log('当前目录名:', __dirname);
//全局对象-global,-process(进度，进程)
process.on('exit', (code) => {
	setTimeout(() => {
		//监听器函数必须只执行同步操作。 
		//在调用 'exit' 事件监听器之后，Node.js 进程将立即退出，
		// 从而导致在事件循环中仍排队的任何其他工作被放弃。
		console.log('此处不会运行');
	}, 0);
	console.log(`退出码: ${code}`);
});
//全局对象-console
//全局函数定时器setTimeout
let timer = setTimeout(() => {
	console.log('I am setTimeout')
}, 100);
console.log(111, timer);
clearTimeout(timer);
console.log(222, timer);
//全局函数require高级版的<script>标签