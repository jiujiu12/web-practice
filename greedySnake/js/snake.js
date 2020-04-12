// 创建蛇对象的构造函数
function snake(){
	let snake=['red','blue','blue'];
}
//初始化蛇对象
snake.prototype.init=function(){
	
}
//蛇吃食物事件
snake.prototype.eat=function(){
	
}
//创建食物对象的构造函数
function foots(){
	this.width=20+'px';
	this.height=20+'px';
	this.r=Tools.getRandom(0,255);
	this.g=Tools.getRandom(0,255);
	this.b=Tools.getRandom(0,255);
	this.bgColor="red";
	this.x=0;
	this.y=0;
	this.div=document.createElement('div');
	this.init();
}
foots.prototype.init=function(){
	let style=this.div.style;
	style.width=this.width;
	style.height=this.height;
	style.backgroundColor=this.bgColor;
	style.position="absolute";
	style.left=this.x;
	style.top=this.y;
}
