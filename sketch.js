
let bx;
let by;
let bx1;
let by1;
let bx2;
let by2;
let bx3;
let by3;
let boxSize = 60;
let overBox = false;
let locked = false;
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

  bx1 = 450;
  by1 = 200;
  bx3 = 150;
  by3 = 200;

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
  ellipse(bx1, by1, boxSize);

if (
  mouseX > bx2 - boxSize &&
  mouseX < bx2 + boxSize &&
  mouseY > by2 - boxSize &&
  mouseY < by2 + boxSize
) {
  overBox = true;
  if (!locked) {
    fill(255,123,0);
  }
} else {
  fill(255,123,0);
  overBox = false;
}
ellipse(bx3, by3, boxSize);

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

function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx2;
  yOffset = mouseY - by2;

  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx3;
  yOffset = mouseY - by3;
}

function mouseDragged() {
  if (locked) {
    bx1 = mouseX - xOffset;
    by1 = mouseY - yOffset;
  }
  if (locked) {
    bx2 = mouseX - xOffset;
    by2 = mouseY - yOffset;
  }
}

function mouseDragged() {
  if (locked) {
    bx3 = mouseX - xOffset;
    by3 = mouseY - yOffset;
  }
  if (locked) {
    bx3 = mouseX - xOffset;
    by3 = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}
