//自调用，防止出现各个js文件命名冲突的情况
(function(){
// 创建蛇对象的构造函数
function Snake(){
	let snakeColors=['blue','blue','red'];
	this.div={0:'',1:'',2:''};
	let parent=document.getElementById('container');
	this.box=document.createElement('div');
	parent.append(this.box);
	for(let i=0;i<3;i++){
		this.div[i]=document.createElement('div');
		this.box.append(this.div[i]);
		this.div[i].bgColor=snakeColors[i];
		this.div[i].width=20;
		this.div[i].height=20;
	}	
	this.box.x=0;
	this.box.y=0;
	this.init();
}

//初始化蛇对象
Snake.prototype.init=function(){
	for(let i=0;i<3;i++){
		this.div[i].style.backgroundColor=this.div[i].bgColor;
		this.div[i].style.width=20+'px';
		this.div[i].style.height=20+'px';
		/*this.div[i].style.position='absolute';
		this.div[i].style.left=this.div[i].x+'px';
		this.div[i].style.top=this.div[i].y+'px';*/
	}	
	this.box.style.width=60+'px';
	this.box.style.height=20+'px';
	this.box.style.display='flex';
	this.box.style.marginLeft=this.box.x+'px';
	this.box.style.marginTop=this.box.y+'px';
	
}
//蛇移动事件
Snake.prototype.move=function(event){
	var event=event||window.event;
	switch(event.keyCode){
		case 37:
			
	}
}
//蛇吃食物事件
Snake.prototype.eat=function(){
	
}
//创建食物对象的构造函数
function Foots(parent){
	this.width=20;
	this.height=20;
	this.r=Tools.getRandom(0,255);
	this.g=Tools.getRandom(0,255);
	this.b=Tools.getRandom(0,255);
	this.bgColor="rgb("+this.r+","+this.g+","+this.b+")";
	this.x=0;
	this.y=0;
	this.div=document.createElement('div');
	this.parent=parent;
	this.parent.append(this.div)
	this.init();
}
//初始化食物对象
Foots.prototype.init=function(){
	let style=this.div.style;
	style.width=this.width+'px';
	style.height=this.height+'px';
	style.backgroundColor=this.bgColor;
	style.position="absolute";
	style.left=this.x;
	style.top=this.y;
}
//随机生成食物位置
Foots.prototype.getRandomP=function(){
	var x=Tools.getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;
	var y=Tools.getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;
	
	this.div.style.left=x+'px';
	this.div.style.top=y+'px';
}
//将foots和snake设为window对象属性即可在外部文件调用
window.Foots=Foots;
window.Snake=Snake;
})()