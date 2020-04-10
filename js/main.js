//存放方块对象
var arr=[];
//生成指定数量的方块，并且随机生成颜色
function create(num){
	var parent=document.getElementById("container");
	for(let i=0;i<num;i++){
		//随机生成颜色
		var r=Tools.getRandom(0,255);
		var g=Tools.getRandom(0,255);
		var b=Tools.getRandom(0,255);
		var box=new square(parent,{backgroundColor:'rgb('+r+','+g+','+b+')'});
		this.arr.push(box);
	}
}

create(100);

//定时改变位置
setInterval(randomBox,500);

randomBox();

function randomBox(){
	//随机生成坐标
	for(let i=0;i<this.arr.length;i++){
		var box=this.arr[i];
		box.random();
	}
}