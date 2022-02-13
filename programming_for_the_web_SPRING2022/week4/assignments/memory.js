function setup () {
    createCanvas(windowWidth, windowHeight);
}
let cards = [];
function draw () {
    background('lightpink');
    textSize(50);
    textFont('Georgia');
    text("Memory Game Title", 50, 100);
    textSize(25);
    fill('white');
    text("My Score", 1100, 100);
    noLoop();
    fill('white');
    noStroke();
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 8; i++) {
        const newCard = { x: i * 175 + 30, y: j * 200 + 200, width: 150, height: 175 }
        rect(newCard.x, newCard.y, newCard.width, newCard.height);
        cards.push(newCard);
        }
    }
}
