function b1(e){
	alert("请点击绿色区域 ！")
	e.stopPropagation();
	var src = e.target;
	src.style.backgroundColor = "#ab9";
}
function b2(e){
	e.stopPropagation();
	var src = e.target;
	src.style.backgroundColor = "#ccc";
	alert("请点击灰色区域 ！")
}

function b3(e){
	e.preventDefault();
	alert('你跳啊？')
	alert("你想跳吗？")
	var jump = confirm('那就跳咯！')
	if(jump){
		location.href = e.target.href;
	}
}
window.onload = function(){

}
