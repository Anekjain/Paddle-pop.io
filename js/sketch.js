//CANVAS VAR
var window_w = window.innerWidth;
var window_h = window.innerHeight;
var bg = "#141414";

// TEXT VAR
var myFont;

// PLAYER VAR
var player;
var playerX = window_w / 2 - 200;
var playerY = window_h / 2 + 280;
var playerW = 200;
var PlayerH = 25;
var playerColor = "#ffebee";
var playerScore = 0;

// BALL VAR
var ball;
var ballX = window_w / 2 - 30;
var ballY = window_h / 2 + 150;
var ballR = 15;
var play = false;

//BRICK VAR
var rows = 6;
var bricks = [];
var bricks_per_row = 15;
var bricks_w = window_w / bricks_per_row;
var bricks_h = 25;
var bricksColor = [
  "#e91e63",
  "##9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#4caf50",
  "#ff9800",
  "#009688",
  "#607d8b",
];

function preload() {
  myFont = loadFont("assets/fonts/Pacifico-Regular.ttf");
}

function setup() {
  createCanvas(window_w, window_h);
  frameRate(55);

  player = new Player(playerX, playerY, playerW, PlayerH);

  ball = new Ball(ballX, ballY, ballR, player);

  for (let row = 0; row <= rows; row++) {
    for (let i = 0; i < bricks_per_row; i++) {
      brick = new Brick(
        createVector(bricks_w * i, 25 * row),
        bricks_w,
        bricks_h,
        random(bricksColor)
      );
      bricks.push(brick);
    }
  }
}

function windowResized() {
  resizeCanvas(window_w, window_h);
}

function draw() {
  background(bg);

  noStroke(0);
  fill(255);
  textSize(100);
  textFont(myFont);
  textStyle(BOLD);
  text("Paddle-PoP", window_w / 2 - 300, window_h / 2);
  textSize(20);
  text("Press Enter to Play!", window_w / 2 - 120, window_h / 2 + 50);
  text("Pause - P", 12, window_h / 2);
  text("Resume - S", 5, window_h / 2 + 30);
  text("@AnekJain.", window_w - 120, window_h - 10);

  player.show();
  if (play) player.move(8);

  ball.show();
  if (play) ball.update();
  ball.bounceEdge();
  ball.bouncePlayer();

  //Collision Detection
  for (let i = bricks.length - 1; i >= 0; i--) {
    bricks[i].show();
    if (bricks[i].IsColliding(ball)) {
      ball.reverse("y");
      playerScore++;
      bricks.splice(i, 1);
    }
  }
}

function keyPressed() {
  if (keyCode === 80) {
    noLoop();
  } else if (keyCode === 83) {
    loop();
  } else if (keyCode === ENTER) {
    play = true;
  }
}
