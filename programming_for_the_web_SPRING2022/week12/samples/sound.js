var song;
var button;

function setup () {
    createCanvas(500, 500);
    let c = color(128, 225, 246);
    song = loadSound("7AM.mp3", loaded);
    button = createButton("play");
    button.style('width', '250px');
    button.style('height', '250px');
    button.style('border', 'none');
    button.style('border-radius', '10px');
    button.style('font-size', '50px');
    button.style('font-family', 'monospace');
    button.style('background-color', c);
    button.position(125, 125);
    button.mousePressed(togglePlaying);
}

function loaded () {
    console.log("loaded");
}

function togglePlaying () {
    if (!song.isPlaying()) {
        song.play();
        button.html("pause");
    }
    else {
        song.pause();
        button.html("play");
    }
}

function draw () {
    let e = color(245, 111, 161);
    background(e);
}
