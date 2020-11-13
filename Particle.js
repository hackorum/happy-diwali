class Particle {
  constructor(x, y, blast) {
    this.fade = 255;
    this.pos = createVector(x, y);
    if (!blast) {
      this.vel = createVector(0, -16.8);
    } else {
      this.vel = p5.Vector.random2D();
      this.vel.mult(-random(6));
    }
    this.acc = createVector(0, 0);
    this.gravity = createVector(0, 0.2);
    this.blast = blast;
    this.r = 255;
    this.g = 215;
    this.b = 0;
    this.move = true;
    this.textFade = 0;
  }

  update() {
    if (this.move) {
      this.vel.add(this.acc);
    }
    this.pos.add(this.vel);
    this.vel.add(this.gravity);

    if (this.vel.y >= 0) {
      this.wish();
      textAlign(CENTER);
      textSize(width / 10);
      fill(255, 215, 0, this.textFade);
      this.textFade += 1;
      text("Happy Diwali", width / 2, height / 2);
    }

    if (!this.blast) {
      this.acc.mult(0);
    } else {
      this.acc.mult(0.9);
      this.fade -= 3.5;
    }
  }

  wish() {
    this.move = false;
  }

  show() {
    if (!this.blast) {
      fill(this.r, this.g, this.b);
    } else {
      fill(255, 215, 0, this.fade);
    }

    noStroke();
    ellipse(this.pos.x, this.pos.y, 7, 7);
  }
}
