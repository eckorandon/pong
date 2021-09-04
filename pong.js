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

//Time
let time1 = 0;
let time2 = 0;

//Paddle 1 size and position
let xPaddle = 5;
let yPaddle = 150;

//Paddle 2 size and position
let xPaddle2 = 585;
let yPaddle2 = 150;

//Paddles dimention
let heightPaddle = 90;
let widthPaddle = 10;

//Score
pointsPlayer1 = 0;
pointsPlayer2 = 0;

let hit = false;

//Sounds
let pong;
let score;

function preload() {
  pong = loadSound("pong.mp3");
  score = loadSound("score.mp3");
}

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
  showScore();
  if (abs(speedBallX) < 15) {
      ballSpeed();  
  }
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
    if (xBall >= (width - radiusBall)) {
      pointsPlayer1 += 1;
      score.play();
    } else {
      pointsPlayer2 += 1;
      score.play();
    }
  }
  
  if (yBall >= (height - radiusBall) || yBall <= radiusBall) {
      speedBallY *= -1;
  }
}

function colisionPaddle () {
  hit = (collideRectCircle(xPaddle, yPaddle, widthPaddle, heightPaddle, xBall, yBall, radiusBall)) || (collideRectCircle(xPaddle2, yPaddle2, widthPaddle, heightPaddle, xBall, yBall, radiusBall))
  if (hit) {
      speedBallX *= -1;
      pong.play();
  }
}

function showScore() {
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(120, 10, 40, 20);
  fill(255);
  text(pointsPlayer1, 140, 26);
  fill(color(255, 140, 0));
  rect(420, 10, 40, 20);
  fill(255);
  text(pointsPlayer2, 440, 26);
}

function ballSpeed () {
  time2 = second();
  
  if ((time2 - time1) > 5) {
    speedBallX *= 1.2;
    time1 = second();
    if (time1 > time2) {
      time2 = 0;
    }
  }
  
  if (time1 >= 54) {
      time1 = second();
  }
}