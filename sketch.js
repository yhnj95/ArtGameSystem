
let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  bx = 400;
  by = 300;
  rectMode(RADIUS);
  strokeWeight(0);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  fill(255,255,255);
  ellipse(random(20,250),random(20,350),random(10,45),random(10,45));
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      fill(255);
    }
  } else {
    fill(0);
    overBox = false;
  }
  ellipse(bx, by, boxSize);
}

function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
