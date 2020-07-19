class Ball {
  constructor(x, y, r, player) {
    this.location = createVector(x, y);
    this.r = r;
    this.s = r * 2;
    this.velocity = createVector(5, -5);
    this.player = player;
  }

  show() {
    fill("#A1A1A1");
    stroke("#FFE338");
    strokeWeight(5);
    ellipse(this.location.x, this.location.y, this.s, this.s);
  }

  update() {
    this.location.add(this.velocity);
  }

  bounceEdge() {
    if (this.location.x + this.r >= window.innerWidth) {
      this.reverse("x");
    } else if (this.location.x - this.r <= 0) {
      this.reverse("x");
    } else if (this.location.y - this.r <= 0) {
      this.reverse("y");
    }
  }

  bouncePlayer() {
    if (
      this.location.x + this.r >= this.player.x &&
      this.location.x - this.r <= this.player.x + this.player.w
    ) {
      if (this.location.y + this.r > this.player.y) {
        this.reverse("y");
        this.location.y = this.player.y - this.r - 1;
      }
    }
  }

  reverse(coordinates) {
    this.velocity[coordinates] *= -1;
  }
}
