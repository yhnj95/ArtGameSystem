let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
let frog;
let bad;
let bad1;
let bad2;
let bad3;
let bad4;
let bad5;
let bad6;
let bad7;


let bads;
let bads1;
let bads2;
let bads3;
let bads4;
let bads5;
let goal;
let sound_hit;


function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  resetGame();
  noCursor();
}

function draw() {
  background(255);
  fill(0);
  rect(mouseX, mouseY, 150, 150);
}

function draw() {
  background(220);


  if (bad.position.x >= width) {
    bad.position.x = 0;
    bad.setVelocity(5, 0);
  }
  if (bad1.position.x >= width) {
    bad1.position.x = 0;
    bad1.setVelocity(5, 0);
  }
  if (bad2.position.x >= width) {
    bad2.position.x = 0;
    bad2.setVelocity(5, 0);
  }
  if (bad3.position.x >= width) {
    bad3.position.x = 0;
    bad3.setVelocity(5, 0);
  }
  if (bad4.position.x >= width) {
    bad4.position.x = 0;
    bad4.setVelocity(5, 0);
  }
  if (bad5.position.x >= width) {
    bad5.position.x = 0;
    bad5.setVelocity(5, 0);
  }
  if (bad6.position.x >= width) {
    bad6.position.x = 0;
    bad6.setVelocity(5, 0);
  }
  if (bad7.position.x >= width) {
    bad7.position.x = 0;
    bad7.setVelocity(5, 0);
  }

  if (frog.position.x >= width) {
    frog.position.x = 25;
  }

  if (frog.position.x <= 0) {
    frog.position.x = 575;
  }

  if (bads.position.x <= 0) {
    bads.position.x = 600;
    bads.setVelocity(-5, 0);
  }
  if (bads1.position.x <= 0) {
    bads1.position.x = 600;
    bads1.setVelocity(-5, 0);
  }
  if (bads2.position.x <= 0) {
    bads2.position.x = 600;
    bads2.setVelocity(-5, 0);
  }
  if (bads3.position.x <= 0) {
    bads3.position.x = 600;
    bads3.setVelocity(-5, 0);
  }
  if (bads4.position.x <= 0) {
    bads4.position.x = 600;
    bads4.setVelocity(-5, 0);
  }
  if (bads5.position.x <= 0) {
    bads5.position.x = 600;
    bads5.setVelocity(-5, 0);
  }





  bad.displace(frog);
  bad1.displace(frog);
  bad2.displace(frog);
  bad3.displace(frog);
  bad4.displace(frog);
  bad5.displace(frog);
  bad6.displace(frog);
  bad7.displace(frog);

  bads.displace(frog);
  bads1.displace(frog);
  bads2.displace(frog);
  bads3.displace(frog);
  bads4.displace(frog);
  bads5.displace(frog);



  // 충돌 시 사운드 효과에 대한 또 다른 방법
  // frog.collide(car1, playHitSound);
  // frog.bounce(car1);


  if (frog.overlap(goal)) {
    nextLevel();
  }

  drawSprites();
//  checkGameOver();

}


function resetGame() {
  frog = createSprite(width/2, height-30, 20, 20);
  goal = createSprite(width/2, 0, width, 4);
  bad = createSprite(0, 30, 60, 30);
  bad1 = createSprite(0, 90, 60, 30);
  bad2 = createSprite(0, 150, 60, 30);
  bad3 = createSprite(0, 210, 60, 30);
  bad4 = createSprite(0, 270, 60, 30);
  bad5 = createSprite(0, 330, 60, 30);
  bad6 = createSprite(0, 390, 60, 30);
  bad7 = createSprite(0, 450, 60, 30);
  bads = createSprite(0, 60, 60, 30);
  bads1 = createSprite(0, 120, 60, 30);
  bads2 = createSprite(0, 180, 60, 30);
  bads3 = createSprite(0, 240, 60, 30);
  bads4 = createSprite(0, 300, 60, 30);
  bads5 = createSprite(0, 360, 60, 30);
  bad.setVelocity(5, 0);
  bad1.setVelocity(5, 0);
  bad2.setVelocity(5, 0);
  bad3.setVelocity(5, 0);
  bad4.setVelocity(5, 0);
  bad5.setVelocity(5, 0);
  bad6.setVelocity(5, 0);
  bad7.setVelocity(5, 0);
  bads.setVelocity(-5, 0);
  bads1.setVelocity(-5, 0);
  bads2.setVelocity(-5, 0);
  bads3.setVelocity(-5, 0);
  bads4.setVelocity(-5, 0);
  bads5.setVelocity(-5, 0);


}


function keyPressed() {
  if (keyCode == UP_ARROW) {
    frog.position.y -= 10;
  }
}


//function checkGameOver() {
//  if (frog.position.x <= 0 || width <= frog.position.x) {
//    fill(255, 0, 0);
//    textSize(60);
//    textAlign(CENTER);
//    text("GAME OVER", width/2, height/2);
//
//  }
//}


function nextLevel() {
  frog.position.x = width/2;
  frog.position.y = height-30;
}


function playHitSound() {
  sound_hit.play();
}
