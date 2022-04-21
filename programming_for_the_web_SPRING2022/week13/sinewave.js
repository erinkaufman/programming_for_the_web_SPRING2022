var pos;

function setup () {
    createCanvas(500, 500);
    angleMode(DEGREES);

    pos = 0.0;
    inc = 1.0;

    pos2 = 0.0;
    inc2 = 5.0;
}

function draw () {

    clear();
    background(0);

    translate(width/2, height/2);

    var mySinVal = sin(pos);
    var mySinVal2 = sin(pos2);

    let c = color(50, 100, 255);

    amplified = mySinVal * 100;
    amplified2 = mySinVal2 * 25;

    for(x = 0; x <= 360; x = x + 1) {
        noFill();
        stroke(c);
        bezier(0, 75, 450, amplified2, amplified, 10, 10, amplified2, 50, 500, amplified, 50);
        rotate(x);
    }

    pos = pos + inc;
    pos2 = pos2 + inc2;
}
