function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    for (var y = 0; y <= height; y += 100) {
        for (var x = 0; x <= width; x += 25) {
            noFill();
            stroke("pink");
            strokeWeight(5);
            ellipse(x, y, 50, 50);
            ellipse(x + 50, y + 50, 10, 10);
            stroke("white");
            strokeWeight(1);
            line(x, y, 400, 400);
            }
    }
}