// Dom:(Document Object Model)文档对象模型
//  HTML 和 XML 文档的编程接口。
// HTML DOM 定义了访问和操作 HTML 文档的标准方法。
// DOM 以树结构表达 HTML 文档。



window.onload = function(){
	var button1 = document.getElementById('button1');
	// 改变样式
	button1.onclick = function(){
		var eles = document.getElementsByClassName('div1');
		for(var i = 0; i < eles.length ; i++){
			eles[i].style.backgroundColor = "#f"+i + '2';
		}
		console.info(eles)
	}
	var button2 = document.getElementById('button2');
	// 改变内容
	button2.onclick  =function(){
		var eles = document.querySelectorAll('.div2');
		for (var i = 0; i < eles.length;i++){
			eles[i].innerText = "《时间简史》","shijian";
			// eles[i].innerHTML = "<Zurich >";
		}
	}
	// 改变属性
	button3 = document.querySelector('#button3');
	button3.onclick = function(){
		var img = document.getElementsByTagName('img');
		img[0].src ='';

		var input = document.querySelector('#username');
		input.value = '图片加载中...'
	}
	for(var i in window){
		console.info(window[i])
	}
	var button4 = document.querySelector('#button4');
	button4.onclick = function(){
		var aa = setTimeout(function(){
			window.alert("您好，欢迎光临GKJ");
		},3000);
		
		// clearTimeout(aa)
		setInterval(function(){
			var date = new Date();
			var input = document.querySelector("#username")
			input.value = date
		},1000);

	}
	var button5 = document.querySelector('#button5');
		button5.onclick = function(){
			// alert();
			window.history.forward(1);
		}
	var button6 = document.querySelector('#button6');
		button6.onclick = function(){
			// alert();
			location.href ='http://www.baidu.com';
			// location.reload();
		}
};



