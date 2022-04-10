let colors = ['lightblue', 'pink', 'darkturquoise', 'seagreen', 'olive', 'lightsalmon', 'thistle', 'lightcyan', 'tomato'];

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function createTile (originX, originY, backColor) {
    translate(originX, originY);
    noStroke();
    fill(backColor);
    rect(0, 0, 300, 300)
    for (let i = 0; i <= 250; i += 40) {
        for (let f = 0; f <= 250; f += 40) {
            fill(random(colors));
            ellipse(i + 25, f + 25, 20, 20);
        }
    }
    noLoop();
}

function draw () {
    createTile(0, 0, random(colors));
    createTile(300, 0, random(colors));
    createTile(0, 300, random(colors));
    createTile(-300, 0, random(colors));
}
