var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
// Telling canvas to start to draw
ctx.beginPath();
//Set colour/color for pen//
ctx.strokeStyle = "blue";
// Move my pen tip to s coordinate
ctx.moveTo(75,0)
// Move my pen agian, no drawing line
ctx.lineTo(150,100)
ctx.lineTo(75,180)
ctx.lineTo(0,100);
// Auto line back to start
ctx.closePath();
//ctx.stroke();
ctx.stroke();
//Change the fill colour
ctx.fillStyle = "#123abc";
//AFTSWC
ctx.fill();

var c2 = document.getElementById("myCanvas2")
var ctx2 = c2.getContext("2d")
ctx2.beginPath();
ctx2.strokeStyle = "green";
ctx2.moveTo(0,0)
ctx2.lineTo(299,289)
ctx2.lineTo(300,0)
ctx2.lineTo(1,294)
ctx2.closePath();
ctx2.stroke();
ctx2.fillStyle = "Linen";
ctx2.fill();

var c3 = document.getElementById("myCanvas3");
var ctx3 = c3.getContext("2d");
ctx3.beginPath();
ctx3.arc(150,150,50,0,6.28);
ctx3.closePath();
ctx3.fillStyle = "#gaga12";
ctx3.fill();