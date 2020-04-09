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
	this.init();
}

square.prototype.init=function(){
	var div=this.div;
	div.style.backgroundColor=this.backgroundColor;
	div.style.width=this.width+'px';
	div.style.height=this.height+'px';
	div.style.left=this.x+"px";
	div.style.right=this.y+'px';
	div.style.position="absolute";
}