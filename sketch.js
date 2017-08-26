function setup() {
  createCanvas(640, 480);
}

var ellipseSize = 50;

function draw() {
  if (mouseIsPressed) {
    ellipseSize = 10;
  } else {
    fill(255);
	ellipseSize = 50;
  }
  ellipse(mouseX, mouseY, ellipseSize, ellipseSize);
}
