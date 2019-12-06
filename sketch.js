let canvas;
let canvasWidth = 600;
let canvasHeight = 400;
var rock;

function preload() {
  rock = createSprite('lib/.png');
}

function setup() {
  canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.position(windowWidth/2 - canvasWidth/2, 20);
  rock = createSprite(350, 200);
  rock.addAnimation('normal', 'lib/R1.png', 'lib/R3.png');
  rock.addAnimation('stretch', 'lib/R1.png', 'lib/R8.png');
  var anim = rock.addAnimation('transform', 'lib/R1.png', 'lib/R8.png');

  rock.setCollider('circle', 0, 0, 64);

  rock.onMouseOver = function() {
    this.changeAnimation('stretch');
  };
  rock.onMouseOut = function() {
    this.changeAnimation('normal');
  };
  rock.onMousePressed = function() {
    this.changeAnimation('transform');
    this.animation.goToFrame(this.animation.getLastFrame());
  };
  rock.onMouseReleased = function() {
    this.changeAnimation('transform');
    this.animation.goToFrame(0);
  };
}

function draw() {
  background(255);
  fill(0);
  rect(0, 0, 300, 400);
  drawSprites();
}
