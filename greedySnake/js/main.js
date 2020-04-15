// 
let parent=document.getElementById("container");
var eating=new Foots(parent);
eating.getRandomP();	
var sanke=new Snake(parent);
document.onkeydown=sanke.move();