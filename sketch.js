var firework,
  particles = [];
var counter = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  firework = new Particle(width / 2, height);
}

function draw() {
  background(0);

  firework.show();
  firework.update();

  for (var i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].show();
  }

  if (firework.vel.y >= 0) {
    if (counter < 15) {
      burstParticle();
      counter++;
    } else {
      firework.pos.y = -10000;
    }
  }
}

function burstParticle() {
  particles.push(new Particle(firework.pos.x, firework.pos.y, true));
}
