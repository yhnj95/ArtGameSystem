
let bx;
let by;
<<<<<<< HEAD
let boxSize = 75;
=======
let bx1;
let by1;
let boxSize = 60;
>>>>>>> New_Forgger
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
<<<<<<< HEAD
=======

>>>>>>> New_Forgger
let canvas;
let canvasWidth = 600;
let canvasHeight = 400;

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);

<<<<<<< HEAD
  bx = 400;
  by = 300;
=======
  bx = 450;
  by = 200;


>>>>>>> New_Forgger
  rectMode(RADIUS);
  strokeWeight(0);
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
<<<<<<< HEAD
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
=======
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

>>>>>>> New_Forgger
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
<<<<<<< HEAD
      fill(255);
    }
  } else {
    fill(0);
=======
      fill(255,123,0);
    }
  } else {
    fill(255,123,0);
>>>>>>> New_Forgger
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
