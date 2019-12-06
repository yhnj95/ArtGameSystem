let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var heart = ellipse(450, 200, 40, 40);

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  heart();
 if(heart != null){
   heart.position.x = mouseX;
   heart.position.y = mouseY;
 }
}
