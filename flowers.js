// Hello

var scaleSlider, nSlider, dSlider, rSlider,angleSlider, offsetSlider;
var k = 5;
var d = 5;
var n = 5;
var offset = 0;
var scale = 200;
var revolutions = 1;
var angle = 0.02;
var canvas;
var windowW = window.innerWidth;
var windowH = window.innerHeight;
var randR = Math.floor((Math.random() * 255) + 1);
var randG = Math.floor((Math.random() * 255) + 1);
var randB = Math.floor((Math.random() * 255) + 1);

var flower;

function setup() {
  canvas = createCanvas(windowW,windowH - 100);
  background(200, 200, 200);
  textSize(13);

  nSlider = createSlider(1,20,18,1);
  nSlider.position(20, 50);
  dSlider = createSlider(1,20,12,1);
  dSlider.position(20, 80);
  rSlider = createSlider(1,20,4,1);
  rSlider.position(20, 110);
  angleSlider = createSlider(0.01,1.0,0.02,0.01);
  angleSlider.position(20, 140);
  scaleSlider = createSlider(1,500,200,1);
  scaleSlider.position(20,170);
  offsetSlider = createSlider(-100,100,0,1);
  offsetSlider.position(20,200);

  var inputs = document.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++)
  {
    inputs[i].addEventListener("input",drawFlower);
  }

  drawFlower();
}

function resize()
{
	windowH = Math.max(window.innerHeight,200);
	windowW = Math.max(window.innerWidth,200);
}
window.addEventListener("resize", resize);

function drawFlower()
{
  print("drawFlower called");
  canvas.size(windowW-6,windowH-6);

   n = nSlider.value();
   d = dSlider.value();
   k = n/d;
   angle = angleSlider.value();
   revolutions = rSlider.value();
   scale = scaleSlider.value();
   offset = offsetSlider.value();
   background(255);
   translate(width/2,height/2);

   stroke(13,13,13);
   strokeWeight(1);

   noFill();

   beginShape();
   for (var a = 0; a < PI * revolutions; a+= angle) {
     var r = scale * cos(k * a) + offset;
     var x = r * cos(a);
     var y = r * sin(a);
     var v = vertex(x,y);
   }
   endShape();

   translate(-(width/2),-(height/2));
   text("k: " + k, nSlider.x * 2 + nSlider.width, 35);
   text("n: " + n, nSlider.x * 2 + nSlider.width, 65);
   text("d: " + d, dSlider.x * 2 + dSlider.width, 95);
   text("r: " + revolutions, rSlider.x * 2 + rSlider.width, 125);
   text("angle: " + angle, angleSlider.x * 2 + angleSlider.width, 155);
   text("scale: " + scale, scaleSlider.x * 2 + scaleSlider.width, 185);
   text("offset: " + offset, offsetSlider.x * 2 + offsetSlider.width, 215);
   text("Flower gene: " + n +","+ d +","+ revolutions +","+ angle +","+ scale +","+ offset, nSlider.x, windowH - 50 );
   flower = [n,d,revolutions,angle,scale,offset];
}


function draw()
{


}
