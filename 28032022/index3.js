let canvas;
let ctx;

window.onload = function(){
  canvas = document.getElementById('canvas');
  ctx = canvas.getContext("2d");
  // canvas.addEventListener("click", getxy);
  ctx.translate(canvas.width/2, canvas.height/2);
  // drawLine();
  // drawRect();
  // drawfillRect();
  // drawarc();
  // drawCurve();
  // drawHeart();
  // drawEllipse();
  drawSmile();
  // canvas.addEventListener("click", addHeart);

}

function addHeart(e){
  let xCoord = e.clientX - e.target.offsetLeft;
  let yCoord = e.clientY - e.target.offsetTop;
  let size = 10+ Math.round(Math.random()*50);
  drawRandomHeart(xCoord,yCoord,size);
  // console.log(size);
}

function getxy(e){
  let xCoord = e.clientX - e.target.offsetLeft;
  let yCoord = e.clientY - e.target.offsetTop;
  console.log(xCoord, yCoord);
}

function drawLine(){
  ctx.moveTo(0,0);
  ctx.lineTo(600,400);
  ctx.moveTo(0,0);
  ctx.lineTo(600,-400);
  ctx.stroke();
}

function drawRect(){
  ctx.strokeRect(-50,-50,100,100);
}

function drawfillRect(){
  ctx.fillStyle = "yellow";
  ctx.fillRect(100,100,100,100);
}
function drawarc(){
  ctx.lineWidth="10";
  ctx.fillStyle="blue";
  ctx.arc(0,0,50,0,2*Math.PI);
  ctx.stroke();
  ctx.fill();
}

function drawCurve(){
  // ctx.moveTo(0,200);
  // ctx.bezierCurveTo(0,0,200,0,200,200);
  // ctx.bezierCurveTo(200,0,400,0,400,200)
  // ctx.bezierCurveTo(400,0,600,0,600,200)
  ctx.moveTo(0,0);
  ctx.bezierCurveTo(150,300,450,100,600,400);
  ctx.stroke();
}

function drawHeart(){
  ctx.fillStyle = "red";
  ctx.shadowBlur=25;
  ctx.shadowColor="red";
  ctx.moveTo(0,-50);
  ctx.bezierCurveTo(0,-120,-100,-120,-100,-50);
  ctx.bezierCurveTo(-100,30,0,30,0,100);
  ctx.bezierCurveTo(0,30,100,30,100,-50);
  ctx.bezierCurveTo(100,-120,0,-120,0,-50);
  ctx.fill();
}

function drawRandomHeart(heartX, heartY, heartSize){
  ctx.beginPath();
    ctx.shadowColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    ctx.shadowBlur = 10;
    ctx.fillStyle = '#' + Math.floor(Math.random()*16777215).toString(16);
    ctx.moveTo(heartX, heartY - heartSize / 2);
    ctx.bezierCurveTo(heartX, heartY - 1.2 * heartSize, heartX - heartSize, heartY - 1.2 * heartSize,heartX - heartSize, heartY - heartSize/2);
    ctx.fill();
    ctx.stroke();
  ctx.closePath();
}

function drawEllipse(){
  // x,y, radX, radY, rotation, startAngle, endAngle
  ctx.ellipse(0, 0, 50, 100 ,0, 0, Math.PI*2);
  ctx.stroke();
}

function drawSmile(){
  ctx.beginPath();
    ctx.arc(10,10,50,0,2*Math.PI,false);
    ctx.moveTo(25,20);
    ctx.arc(30,40,100,0,2*Math.PI,false);
    ctx.stroke();
  ctx.closePath();
}
