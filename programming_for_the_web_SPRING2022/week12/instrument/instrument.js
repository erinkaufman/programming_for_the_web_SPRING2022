var note;
var note2;
var note3;
var note4;
var note5;
var note6;
var note7;
var note8;
var note9;
var button;
var bg;

function preload () {
    bg = loadImage("hawaii.jpeg")
}

function setup () {
    createCanvas(windowWidth, windowHeight);
    //button 1
    let c = color(124, 105, 10);
    note = loadSound("UkeleleNote1.wav", loaded);
    button = createButton("I");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', c);
    button.position(125, 125);
    button.mouseOver(playNote);
    //button 2
    let col2 = color(194, 96, 109);
    note2 = loadSound("UkeleleNote2.wav", loaded);
    button = createButton("can't");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col2);
    button.position(250, 125);
    button.mouseOver(playNote2);
    //button 3
    let color3 = color(255, 161, 153);
    note3 = loadSound("UkeleleNote3.wav", loaded);
    button = createButton("wait");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', color3);
    button.position(375, 125);
    button.mouseOver(playNote3);
    //button 4
    let col4 = color(255, 209, 181);
    note4 = loadSound("UkeleleNote4.wav", loaded);
    button = createButton("for");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col4);
    button.position(125, 250);
    button.mouseOver(playNote4);
    //button 5
    let col5 = color(251, 131, 78);
    note5 = loadSound("UkeleleNote5.wav", loaded);
    button = createButton("our");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col5);
    button.position(250, 250);
    button.mouseOver(playNote5);
    //button 6
    let col6 = color(116, 69, 25);
    note6 = loadSound("UkeleleNote6.wav", loaded);
    button = createButton("honey");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col6);
    button.position(375, 250);
    button.mouseOver(playNote6);
    //button 7
    let col7 = color(157, 117, 143);
    note7 = loadSound("UkeleleNote7.wav", loaded);
    button = createButton("moon");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col7);
    button.position(125, 375);
    button.mouseOver(playNote7);
    //button 8
    let col8 = color(175, 98, 54);
    note8 = loadSound("UkeleleNote8.wav", loaded);
    button = createButton("in");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col8);
    button.position(250, 375);
    button.mouseOver(playNote8);
    //button 9
    let col9 = color(253, 116, 82);
    note9 = loadSound("UkeleleNote9.wav", loaded);
    button = createButton("maui");
    button.style('width', '100px');
    button.style('height', '100px');
    button.style('border', 'none');
    button.style('border-radius', '50px');
    button.style('font-size', '25px');
    button.style('font-family', 'monospace');
    button.style('background-color', col9);
    button.position(375, 375);
    button.mouseOver(playNote9);
}

function loaded () {
    console.log("loaded");
}

function playNote () {
        note.play();
    }

function playNote2 () {
        note2.play();
    }

function playNote3 () {
        note3.play();
    }
    
function playNote4 () {
        note4.play();
    }

function playNote5 () {
        note5.play();
    }

function playNote6 () {
        note6.play();
    }

function playNote7 () {
        note7.play();
    }

function playNote8 () {
        note8.play();
    }

function playNote9 () {
        note9.play();
    }

function draw () {
    background(bg);
    let s = 'Click anywhere to start the sweet Hawaiian stylings';
    fill(255);
    textFont('monospace');
    text(s, 115, 550);
}
