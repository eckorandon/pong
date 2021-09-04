// Made on https://p5js.org/

//Ball size and position
let xBall = 300;
let yBall = 200; 
let diamBall = 20;
let radiusBall = diamBall/2;

//Ball speed
let speedBall = 3;
let speedBallX = speedBall;
let speedBallY = speedBall;

//Paddle 1 size and position
let xPaddle = 5;
let yPaddle = 150;

//Paddle 2 size and position
let xPaddle2 = 585;
let yPaddle2 = 150;

//Paddles dimention
let heightPaddle = 90;
let widthPaddle = 10;

let hit = false;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  showBall();
  moveBall();
  edgeDetection();
  showPaddle(xPaddle, yPaddle);
  showPaddle(xPaddle2, yPaddle2);
  movePaddle();
  colisionPaddle();
}

function showBall() {
  circle(xBall, yBall, diamBall);
}

function showPaddle(x, y) {
  rect(x, y, widthPaddle, heightPaddle);
}

function moveBall() {
  xBall += speedBallX;
  yBall += speedBallY;
}

function movePaddle() {
  if (keyIsDown(87)) {
     yPaddle -= 10;
  }
  
  if (keyIsDown(83)) {
     yPaddle += 10;
  }
  
  if (keyIsDown(UP_ARROW)) {
     yPaddle2 -= 10;
  }
  
  if (keyIsDown(DOWN_ARROW)) {
     yPaddle2 += 10;
  }
}

function edgeDetection() {
  if (xBall >= (width - radiusBall) || xBall <= radiusBall) {
      speedBallX *= -1;
  }
  
  if (yBall >= (height - radiusBall) || yBall <= radiusBall) {
      speedBallY *= -1;
  }
}

function colisionPaddle () {
  hit = (collideRectCircle(xPaddle, yPaddle, widthPaddle, heightPaddle, xBall, yBall, radiusBall)) || (collideRectCircle(xPaddle2, yPaddle2, widthPaddle, heightPaddle, xBall, yBall, radiusBall))
  if (hit) {
      speedBallX *= -1;
  }
}