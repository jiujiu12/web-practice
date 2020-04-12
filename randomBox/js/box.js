//定义方块的构造函数
function square(parent,obj){
	var obj=obj || {};
	this.backgroundColor=obj.backgroundColor || 'lightGreen';
	this.width=obj.width || 20;
	this.height=obj.height || 20;
	this.x=obj.x || 0;
	this.y=obj.y || 0;
	//创建div
	this.div=document.createElement("div");

	parent.appendChild(this.div);
	this.parent=parent;
	this.init();
}

square.prototype.init=function(){
	var div=this.div;
	div.style.backgroundColor=this.backgroundColor;
	div.style.width=this.width+'px';
	div.style.height=this.height+'px';
	div.style.left=this.x+"px";
	div.style.top=this.y+'px';
	// 脱离文档流
	div.style.position="absolute";
}
// 方块随机位置生成
square.prototype.random=function(){
	var x=Tools.getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;
	var y=Tools.getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;

	this.div.style.left=x+"px";
	this.div.style.top=y+"px";
}