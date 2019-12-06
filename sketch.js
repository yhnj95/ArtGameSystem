let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var heart;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  heart = ellipse(350, 200, 45, 45);

 heart.onMousePressed = function() {
   heart.position.x = mouseX;
   heart.position.y = mouseY;
 }
}
