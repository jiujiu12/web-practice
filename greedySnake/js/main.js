// 
let parent=document.getElementById("container");
var eating=new Foots(parent);
eating.getRandomP();	
var sanke=new Snake();
document.onkeydown=sanke.move();