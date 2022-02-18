let bubble;
let shapes = [];
let startingX = 100;
let startingY = 100;

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
}

function draw() {
    background('PeachPuff');
    for(let i = 0; i < 3; i++) {
        shapes.push(new Bubble(startingX, startingY));
        startingX += 150;
    }
    bubble.show();
    bubble.move();
}

class Bubble {
    constructor(x, y) {
        this.x = 250;
        this.y = 250;
    }

    move() {
        this.x = this.x + random(-5, 5);
        this.y = this.y + random(-5, 5);
    }

    show() {
        stroke(255);
        strokeWeight(1);
        noFill();
        ellipse(this.x, this.y, 24, 24);
    }
}
