//1.判断为空
//普通写法
if (a == undefined) a = [];

if (params.success) {
  params.success(res);
}

//优雅写法
a = a || [];
params.success && params.success(res);

//2.多条件判断
//普通写法
let Statistics = function () {
  console.log('执行');
}
switch (currentTab) {
  case 0:
    Statistics();
    break;
  case 1:
    Statistics();
    break;
  case 2:
    Statistics();
    break;
  case 3:
    Statistics();
    break;
}

//优雅写法
let Statistics = function () {
  console.log('执行');
}
const comparativeTotles = new Map([
  [0, Statistics],
  [1, Statistics],
  [2, Statistics],
  [3, Statistics]
])
comparativeTotles.get(1) && comparativeTotles.get(1)();




//3.匿名函数调用
//普通写法
(function () { })();


//优雅写法
!function () { }();
+function () { }();

//取整
//普通写法
parseInt(15.96);

//优雅写法
15.96 | 0;//15
~~15.96;//15


//异步回调改async/await
async function getData() {
  const result = await axios.get('');
  const data = result.data;

  console.log('data', data);
  return data;
}
getData();



//解构(Destructuring)&默认值
//const {data}=await axios.get(...)
const { id = 5 } = {};
console.log(id)//5