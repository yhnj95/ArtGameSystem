
let bx;
let by;
let bx1;
let by1;
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
  bx1 = 350;
  by1 = 80;
  rectMode(RADIUS);
  strokeWeight(0);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  fill(255,255,255);
  ellipse(50,80,30,30);
  ellipse(50,160,25,25);
  ellipse(50,240,10,10);
  ellipse(50,320,10,10);
  ellipse(150,80,10,10);
  ellipse(150,160,25,25);
  ellipse(150,240,47,47);
  ellipse(150,320,35,35);
  ellipse(250,80,30,30);
  ellipse(250,160,17,17);
  ellipse(250,240,12,12);
  ellipse(250,320,48,48);

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
    fill(255);
  }
} else {
  fill(0);
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
