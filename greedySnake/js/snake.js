//自调用，防止出现各个js文件命名冲突的情况
(function(){
	let map=document.getElementById('container');
	var position='absolute';
	var elements=[];
// 创建蛇对象的构造函数
function Snake(parent){
	//定义每一节蛇的大小
	this.width=20;
	this.height=20;
	//蛇移动的方向
	this.direction='right';
//	定义蛇属性
	this.body=[
		{x:3,y:2,color:'red'},
		{x:2,y:2,color:'blue'},
		{x:1,y:2,color:'blue'}
	];
}

//初始化蛇对象
Snake.prototype.init=function(map){
	this.removeSnake(map);
	for(let i in this.body){
		var obj=this.body[i];
		var div=document.createElement('div');
		elements.push(div);
		map.appendChild(div);
		div.style.position=position;
		div.style.width=this.width+'px';
		div.style.height=this.height+'px';
		div.style.left=obj.x*this.width+'px';
		div.style.top=obj.y*this.height+'px';
		div.style.backgroundColor=obj.color;
	}	
}
//蛇移动事件
Snake.prototype.move=function(){
		//控制蛇身体的移动
	for(let i=1;i<(this.body.length);i++){
		this.body[i].x=this.body[i-1].x;
		this.body[i].y=this.body[i-1].y;
	}
	//控制蛇头移动
	var head=this.body[0];
	switch(this.direction){
		case 'right':
			head.x+=1;
			break;
		case 'left':
			head.x-=1;
			break;
		case 'top':
			head.y-=1;
			break;
		case 'bottom':
			head.y+=1;
			break;
	}
}
//删除蛇事件
Snake.prototype.removeSnake=function(map){
	if(elements.length!=0){
	//将
	let i=3;
	while(i>1){
		map.removeChild(map.childNodes[i+1]);
		elements.pop();	
		i--;
	}
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
	this.parent.append(this.div);
}
//初始化食物对象
Foots.prototype.init=function(){
	let style=this.div.style;
	style.width=this.width+'px';
	style.height=this.height+'px';
	style.backgroundColor=this.bgColor;
	style.position="absolute";
	this.getRandomP();
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