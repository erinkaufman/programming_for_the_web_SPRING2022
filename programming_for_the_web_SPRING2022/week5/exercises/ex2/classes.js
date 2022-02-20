let bubble;
let shapes = [];
let startingX = 100;
let startingY = 100;

function setup() {
    createCanvas(500, 500);
    bubble = new Bubble();
    for(let i = 0; i < 3; i++) {
        shapes.push(new Bubble(startingX, startingY));
        startingX += 150;
    }
}

function draw() {
    background('PeachPuff');
    shapes[0].show();
    shapes[0].move();
    shapes[1].show();
    shapes[1].move();
    shapes[2].show();
    shapes[2].move();
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
