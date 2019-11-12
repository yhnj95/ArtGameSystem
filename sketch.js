let canvas;
let canvasWidth = 600;
let canvasHeight = 400;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
canvas.position(windowWidth/2 - canvasWidth/2, 20);

}

function draw() {
  background(255,255,255);
  textAlign(CENTER);
  text('마우스를 눌러봐!');
  drawSprites();
  rect(0,0,600,400);
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 15, 15);
  s.velocity.x = random(-5, 5)
  s.velocity.y = random(-5, 5)
}
