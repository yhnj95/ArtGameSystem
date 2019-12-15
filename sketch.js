
let bx;
let by;
let bx1;
let by1;
let boxSize = 60;
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
  bx1 = 350;
  by1 = 80;
  rectMode(RADIUS);
  strokeWeight(0);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  fill(200);
  ellipse(100,120,80,80);
  ellipse(190,120,80,80);
  ellipse(60,200,80,80);
  ellipse(230,200,80,80);
  ellipse(100,280,80,80);
  ellipse(190,280,80,80);



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

if (
  mouseX > bx1 - boxSize &&
  mouseX < bx1 + boxSize &&
  mouseY > by1 - boxSize &&
  mouseY < by1 + boxSize
) {
  overBox = true;
  if (!locked) {
    fill(255,123,0);
  }
} else {
  fill(255,123,0);
  overBox = false;
}
ellipse(bx1, by1, boxSize);

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

  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx1;
  yOffset = mouseY - by1;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
  if (locked) {
    bx1 = mouseX - xOffset;
    by1 = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
