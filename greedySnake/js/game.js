// 自调用函数
(function(){
	var that;
	function Game(map){
		this.food=new Foots(map);
		this.snake=new Snake(map);
		this.map=map;
		that=this;
	}
	
	Game.prototype.start=function(){
		//1.把蛇和食物对象渲染至地图上
		this.food.init(this.map);
		this.snake.init(this.map);
		//2.开始游戏的逻辑
		runSnake();
		bindKey();
		//遇到食物，吃掉并变长
	}
	//蛇移动，遇到边界游戏结束
	function runSnake(){
		var timer=
			window.setInterval(function(){
			//蛇移动
			that.snake.move(that.food);
			that.snake.init(that.map);
			
			//蛇头坐标xy值
			var headX=that.snake.body[0].x;
			var headY=that.snake.body[0].y;
			//蛇头坐标的最大xy值
			var maxX=that.map.offsetWidth/that.snake.width;
			var maxY=that.map.offsetHeight/that.snake.height;
			
		   //遇到边界游戏结束
			if(headX<0||headX>=maxX||headY<0||headY>=maxY){
				alert("游戏结束！");
				clearInterval(timer);
			}
		},150);
		
	}
	//键盘控制蛇移动函数
	function bindKey(){
		document.addEventListener('keydown',function(e){
			console.log(e.keyCode);
			switch(e.keyCode){
				case 37:
					that.snake.direction='left';
					break;
				case 38:
					that.snake.direction='top';
					break;
				case 39:
					that.snake.direction='right';
					break;
				case 40:
					that.snake.direction='bottom';
					break;
			}
		},false)
	}
	
	//给外部暴露函数
	window.Game=Game;
})();
var map=document.getElementById('container');
var game=new Game(map);
game.start();

