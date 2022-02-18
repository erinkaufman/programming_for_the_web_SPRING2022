const DOWN = 'down';
const UP = 'up';
let startingX = 30;
let startingY = 260;
let cards = [];
const gameState = {
}
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
    background('peachpuff');
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

function mousePressed() {
    for(let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}
//let cards = [];
//function draw () {
  //  background('lightpink');
  //  textSize(50);
  //  textFont('Georgia');
  //  text('Memory Game Title', 50, 100);
  //  textSize(25);
  //  fill('white');
  //  text('My Score', 1100, 100);
  //  noLoop();
  //  fill('white');
  //  noStroke();
  //  for (let j = 0; j < 2; j++) {
    //    for (let i = 0; i < 8; i++) {
    //    const newCard = { x: i * 175 + 30, y: j * 200 + 200, width: 150, height: 175 }
    //    rect(newCard.x, newCard.y, newCard.width, newCard.height);
    //    cards.push(newCard);
    //    }
  //  }
//}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 175;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }

    show () {
        if(this.face === DOWN) {
            fill('magenta');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardBack, this.x, this.y);
        } else {
            fill('lightblue');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
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
