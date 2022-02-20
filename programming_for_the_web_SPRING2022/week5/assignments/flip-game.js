let button;
const DOWN = 'down';
const UP = 'up';
let startingX = 30;
let startingY = 260;
let cards = [];
const gameState = {
    totalPairs: 8,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardBack;
let cardFaceArray = [];

function preload() {
    cardBack = loadImage('assets/card-art_2.png');
    cardFaceArray = [
        loadImage('assets/Card1_Thyme.png'),
        loadImage('assets/Card2_Parsley.png'),
        loadImage('assets/Card3_Vanilla.png'),
        loadImage('assets/Card4_Mint.png'),
        loadImage('assets/Card5_Cardamom.png'),
        loadImage('assets/Card6_Rosemary.png'),
        loadImage('assets/Card7_Cinnamon.png'),
        loadImage('assets/Card8_Anise.png')
    ]
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    //background('peachpuff');
    let selectedFaces = [];
    for(let z = 0; z < 8; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        //remove the used card face so it doesn't get randomly selected again
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for(let j = 0; j < 2; j++) {
        for(let i = 0; i < 8; i++) {
            const faceImage = selectedFaces.pop();
            cards.push(new Card(startingX, startingY, faceImage));
            startingX += 175;
        }
        startingY += 200;
        startingX = 30;
    }
}

function draw() {
   background('peachpuff');
   fill('white');
   textSize(75);
   textFont('Pacifico');
   text('Spice It Up Memory Game', 250, 125);
   if(gameState.numMatched === gameState.totalPairs) {
       button = createButton('Play Again');
       button.style('background-color', '#f4764e');
       button.style('font-family', 'Pacifico');
       button.style('font-size', '16px');
       button.style('color', 'white');
       button.style('border', 'none');
       button.size(150, 40);
       button.position(825, 180);
       button.mousePressed(restartGame);
       fill(244, 118, 78);
       textSize(35);
       textFont('Georgia');
       text('You are Spicy! YOU WIN!', 375, 205);
       noLoop();
   }
   for(let q = 0; q < cards.length; q++) {
       if(!cards[q].isMatch) {
           cards[q].face = DOWN;
       }
       cards[q].show();
    }
    noLoop();
    gameState.flippedCards.length = 0;
    gameState.waiting = false;
    fill(255);
    textSize(24);
    textFont('Georgia');
    text('ATTEMPTS: ' + gameState.attempts, 500, 680);
    text('MATCHES: ' + gameState.numMatched, 700, 680);
}

function restartGame() {
    window.location.reload();
}

function mousePressed() {
    if(gameState.waiting) {
        return;
   }
    for(let k = 0; k < cards.length; k++) {
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if(gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if(gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            gameState.flippedCards.length = 0;
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 175;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }

    show () {
        if(this.face === UP || this.isMatch) {
            fill('lightblue');
            rect(this.x, this.y, this.width, this.height);
            image(this.cardFaceImg, this.x, this.y);
        } else {
            fill('magenta');
            rect(this.x, this.y, this.width, this.height);
            image(cardBack, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if(mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height) {
                this.flip();
                return true;
            } else {
                return false;
            }
    }

    flip() {
        if(this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}

function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0) {
        //pick random index
        const idx = Math.floor(Math.random() * counter);
        //decrease counter by 1
        counter--;
        //swap the last element with it
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}
