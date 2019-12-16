
let bx;
let by;
let bx1;
let by1;
let boxSize = 60;
let boxSize2 = 60;
let overBox = false;
let overBox2 = false;
let locked = false;
let locked2 = false;
let xOffset = 0.0;
let yOffset = 0.0;
let xOffset2 = 0.0;
let yOffset2 = 0.0;
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

  bx = 450;
  by = 200;
  bx1 = 146;
  by1 = 200;


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
  ///////////////////////////
  ellipse(450,155,18);
  ellipse(417.75,167.75,18);
  ellipse(482.25,167.75,18);
  ellipse(405,200,18);
  ellipse(495,200,18);
  ellipse(417.75,232.25,18);
  ellipse(482.25,232.25,18);
  ellipse(450,245,18);

  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      fill(255,123,0);
    }
  } else {
    fill(255,123,0);
    overBox = false;
  }
  ellipse(bx, by, boxSize,boxSize);

if (
  mouseX > bx1 - boxSize2 &&
  mouseX < bx1 + boxSize2 &&
  mouseY > by1 - boxSize2 &&
  mouseY < by1 + boxSize2
) {
  overBox2 = true;
  if (!locked2) {
  fill(255,123,0);
  }
} else {
  fill(255,123,0);
  overBox2 = false;
}
ellipse(bx1, by1, boxSize2,boxSize2);
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
function mousePressed2() {
  if (overBox2) {
    locked2 = true;
    fill(255, 255, 255);
  } else {
    locked2 = false;
  }
  xOffset2 = mouseX - bx1;
  yOffset2 = mouseY - by1;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}
function mouseDragged2() {
  if (locked2) {
    bx1 = mouseX - xOffset2;
    by1 = mouseY - yOffset2;
  }
}

function mouseReleased() {
  locked = false;
}
function mouseReleased2() {
  locked2 = false;
}
