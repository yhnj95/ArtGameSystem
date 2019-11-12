

function setup() {
createCanvas(800,400);
}

function draw() {
  background(255,255,255);
  textAlign(CENTER);
  text('마우스를 눌러봐!');
  drawSprites();
}

function mousePressed() {
  var s = createSprite(mouseX, mouseY, 15, 15);
  s.velocity.x = random(-5, 5)
  s.velocity.y = random(-5, 5)
}
