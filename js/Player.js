class Player {
  // PLAYER CONSTRUCTOR

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.r = 10;
  }

  //DISPLAY THE PLAYER ALONG THE SCREEN
  move(speed) {
    if (keyIsDown(RIGHT_ARROW) && this.x < width - 210) {
      this.x += speed;
    } else if (keyIsDown(LEFT_ARROW) && this.x > width - 1366) {
      this.x -= speed;
    }
  }

  //DISPLAYING PLAYER ON THE SCREEN
  show() {
    fill(255);
    stroke(0);
    strokeWeight(4);
    rect(this.x, this.y, this.w, this.h, this.r);
  }
}
