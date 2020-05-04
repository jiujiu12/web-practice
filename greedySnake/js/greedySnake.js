(function(){var a={getRandom:function(c,b){return Math.floor(Math.random()*(b-c+1))+c}};window.Tools=a})();(function(){var a="absolute";var d=[];function c(e){this.width=20;this.height=20;this.direction="right";this.body=[{x:3,y:2,color:"rgb(67, 120, 77)"},{x:2,y:2,color:"rgb(31, 188, 135)"},{x:1,y:2,color:"rgb(31, 188, 135)"}]}c.prototype.init=function(g){this.removeSnake(g);for(var e in this.body){var f=this.body[e];var h=document.createElement("div");d.push(h);g.appendChild(h);h.style.position=a;h.style.width=this.width+"px";h.style.height=this.height+"px";h.style.left=f.x*this.width+"px";h.style.top=f.y*this.height+"px";h.style.backgroundColor=f.color}};c.prototype.move=function(j){for(var g=this.body.length-1;g>0;g--){this.body[g].x=this.body[g-1].x;this.body[g].y=this.body[g-1].y}var f=this.body[0];switch(this.direction){case"right":f.x+=1;break;case"left":f.x-=1;break;case"top":f.y-=1;break;case"bottom":f.y+=1;break}var e=f.x*this.width;var k=f.y*this.height;if(e===j.x&&k==j.y){var h=this.body[this.body.length-1];this.body.push({x:h.x,y:h.y,color:h.color});j.init()}};c.prototype.removeSnake=function(f){for(var e=d.length-1;e>=0;e--){d[e].parentNode.removeChild(d[e]);d.splice(e,1)}};function b(e){this.width=20;this.height=20;this.r=Tools.getRandom(0,255);this.g=Tools.getRandom(0,255);this.b=Tools.getRandom(0,255);this.bgColor="rgb("+this.r+","+this.g+","+this.b+")";this.x=0;this.y=0;this.div=document.createElement("div");this.parent=e;this.parent.append(this.div)}b.prototype.init=function(){var e=this.div.style;e.width=this.width+"px";e.height=this.height+"px";e.backgroundColor=this.bgColor;e.position="absolute";this.getRandomP()};b.prototype.getRandomP=function(){this.r=Tools.getRandom(0,255);this.g=Tools.getRandom(0,255);this.b=Tools.getRandom(0,255);this.bgColor="rgb("+this.r+","+this.g+","+this.b+")";this.x=Tools.getRandom(0,this.parent.offsetWidth/this.width-1)*this.width;this.y=Tools.getRandom(0,this.parent.offsetHeight/this.height-1)*this.height;this.div.style.left=this.x+"px";this.div.style.top=this.y+"px"};window.Foots=b;window.Snake=c})();(function(){var c;function d(e){this.food=new Foots(e);this.snake=new Snake(e);this.map=e;c=this}d.prototype.start=function(){this.food.init(this.map);this.snake.init(this.map);b();a()};function b(){var e=window.setInterval(function(){c.snake.move(c.food);c.snake.init(c.map);var f=c.snake.body[0].x;var i=c.snake.body[0].y;var h=c.map.offsetWidth/c.snake.width;var g=c.map.offsetHeight/c.snake.height;if(f<0||f>=h||i<0||i>=g){alert("游戏结束！");clearInterval(e)}},150)}function a(){document.addEventListener("keydown",function(f){switch(f.keyCode){case 37:c.snake.direction="left";break;case 38:c.snake.direction="top";break;case 39:c.snake.direction="right";break;case 40:c.snake.direction="bottom";break}},false)}window.Game=d})();(function(){var b=document.getElementById("container");var a=new Game(b);a.start()})();