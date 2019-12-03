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
  line(canvasWidth/2,1, canvasHeight/2,1);
  strokeWeight(4);

}
