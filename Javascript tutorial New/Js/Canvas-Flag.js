var c = document.getElementById("MyCanvas");
var ctx = c.getContext("2d");

ctx.strokeStyle = "black";
ctx.strokeRect(13,13,404,244);

ctx.fillStyle = "green";
ctx.fillRect(15,15,400,240);

var centerX = c.width/2;
var centerY = c.height/2;

ctx.beginPath();
ctx.arc(centerX,centerY,90,0,2*Math.PI,false);
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
