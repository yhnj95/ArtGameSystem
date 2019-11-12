let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  noCursor();
}

function draw() {
  background(255);
  fill(0);
  rect(mouseX, mouseY, 150, 150);
}
