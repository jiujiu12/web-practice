// 自调用函数
(function(){
	function Game(map){
		this.food=new Foods(map);
		this.snake=new Snake(map);
		this.map=map;
	}
	
	Game.prototype.start=function(){
		//1.把蛇和食物对象渲染至地图上
		this.food.init(this.map);
		this.snake.init(this.map);
		//2.开始游戏的逻辑
	}
	
	//给外部暴露函数
	window.Game=Game;
})();
var map=document.getElementById('container');
var game=new Game(map);
game.start();