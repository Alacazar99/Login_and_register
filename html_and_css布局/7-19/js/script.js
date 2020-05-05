
function test(){
	alert("你点击我...要干嘛");
	alert("你好，欢迎阅读我的简书");
	alert("我叫Zurich Alcazar，交个朋友吧~");

	var foo = '我叫Zurich Alcazar';
	
	console.info(foo);
	foo1="你好，欢迎阅读我的简书";
	console.info(foo1);
	const PI = 2019-7-18;
	console.info(PI);
}
// test();

function sum(a,b){
	return a + b;
}
var a = sum(1,3);
b = sum;

// document.write(b(1,2));

var ss = function(a,b){
	return a + b;
}
// document.write(ss(1,4));

// 数据类型：
// 数字：整数、浮点数；
// 字符串：单引号、双引号；
// 布尔型：true、false；
// Null型：null；
// undefined型：undefined;

// 变量作用范围：
// js默认情况下，变量以函数为范围；
// 变量加var 与不加var的区别：
// 前者-局部变量；后者-全局变量；
// 
// 常量：一旦赋值，就不能再修改的量；
// 

// 函数：
// function funName(){

// }
// var varName = funName

function outer(){
	var a = 'outter'

	function inner(){
		a = "inner"
		console.info(a)
	}
	console.info("===" + a)
	return inner;
}

console.info(outer()())
// 闭包：函数嵌套函数。内部的函数，可以使用外部函数的变量；
// 
// 数组：一组数据的列表。
// var arr = []
// var arr = array(5,2,0)
// 【js 中，一切皆对象。】
// 正则表达式对象： 
// var reg = /^1\d{10}$/
// 【i】:忽略大小写；
console.info('---------------------------')
var name = "zhang san";
console.info(name.length);

var reg = /^1\d{10}$/
console.info(reg.test('13492359245'))

var regname = /ZHANG/i
console.info(regname.test(name))
console.info('---------------------------')
var a = 20;

console.info(isNaN(20 / 'ewe'))

console.info(typeof a )

// 顺序 、 分支、 循环；
// if(a > 20){
// } else if (a <12) {
// }
console.info('---------------------------')
var a = 10;
var b = 20;
var c = 30;

var max = -Infinity;

console.info(max)
// 三目表达式：expr ? expr1 : expr2;
max1 = (a > b ? a:b) >c ? (a > b ? a:b) : c;

var a= 0;
var b = ++a +3;
console.info(a)
console.info(b)

a = 2;
switch(a){
	case 1:
		console.info('11111')
	case 2:
		console.info('22222')
}


// for in  循环
var arr=[5.20,2.1]
for (i in arr){
	console.info(arr[i])
}
// for 循环
for (var i = 0; i < arr.length; i ++){
	console.info(arr[i])
}

// while 循环
var i = 0;
while (i < arr.length){
	console.info(arr[i])
	i++;
}
// do...while 循环
var i = 0;
do{
	console.info(arr[i])
	i ++;
}while(i < arr.length);

// break 跳出当前循环；continue ：跳出本次循环；
for(var i = 0; i < 10; i++){
	if(i % 2 ==0){
		continue;
	}
	console.info(i)
}

// for (var i = 1; i < 10; i++){
// 	for (var j = 1; j <= i;j ++){
// 		document.write(j +'*' + i + '=' +(i*j)+"&nbsp;&nbsp;&nbsp;&nbsp;")
// 	}
// 	document.write('<br />')
// }
console.info('---------------------------')
// 面向对象
var student = {
	name:'Zurich',
	age:27,
	sayhello:function(){
		// 方法的调用者；
		console.info(this.name)
	}
}
student.sayhello();
console.info(student.age)
console.info(student['age'])

// 对象:原型链
// 默认原型：
function Student(name,age){
	this.name = name;
	this.age = age;
}

Student.prototype.sayhello =function(){
		console.info(this.name + "说：hello！")
	} 

var s1 = new Student("Alcazar",100);
s1.sayhello();
var s2 = new Student("AS_Alcazar",100);
// console.info(s2);

function person(name,age){
	this.name = name;
	this.age = age;
}

person.prototype.shuo= function(){
	console.info('Hello WOrd!!')
}
function User(uname){
	this.uname = uname;
}
User.prototype =new person()

var u =new User('admin')
u['name'] = 'GGGGG'
console.info(u['name'])
u.shuo();

console.info('---------------------------')
// ES6的函数介绍
// 1.箭头函数
var a =( v, h ) => v + h;
console.info(a(5,8))

// 2.类
class Person1{
	constructor(name){
		this.name = name;
	}
}
// 3.继承
class User1 extends Person1{

}
// 模板字符串
var name = "aa";
var age = 20;

var introduce = `
   my name is ${name}, my age is ${age}
`;

console.info(introduce)

// // lib/math.js
// export function sum(x,y){
// 	return x + y;
// }
// // app.js
// import {sum} from "lib/math.js"
// sum()



