let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var rock;

function preload() {
  rock = loadAnimation('lib/heart.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  rock = createSprite (350, 200);
  rock.mouseActive = true;
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  drawSprites();
}
