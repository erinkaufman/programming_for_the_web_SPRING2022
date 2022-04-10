let colors = ['lightblue', 'pink', 'darkturquoise', 'seagreen', 'olive', 'lightsalmon', 'thistle', 'lightcyan', 'tomato'];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function createTile (originX, originY, backColor, squareTilt, height, width) {
    translate(originX, originY);
    noStroke();
    for (let i = 0; i <= 1000; i += 40) {
        for (let f = 0; f <= 1000; f += 40) {
            fill(backColor);
            ellipse(i, f, height, width);
            rotate(squareTilt);
        }
    }
    noLoop();
}

function draw () {
            createTile(100, 100, random(colors), random(PI), 50, 50);
            createTile(35, 35, random(colors), random(PI), 25, 25);
            createTile(0, 0, random(colors), random(PI), 50, 50);
            createTile(300, 300, random(colors), random(PI), 75, 75);
}
