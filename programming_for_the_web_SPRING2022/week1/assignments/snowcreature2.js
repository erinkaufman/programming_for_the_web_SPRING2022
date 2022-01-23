let fill1 = prompt("what basic color is your mood", "red");
let fill2 = prompt("what basic color is your drink", "deeppink");
function setup() {
    createCanvas(1000, 800);
    background("linen");
}
function draw() {
    //floor
    fill("tan");
    noStroke();
    rect(0, 700, 1000, 100);
    //snowlady
    fill(255);
    stroke("pink");
    strokeWeight(10);
    ellipse(750, 600, 350, 250);
    ellipse(750, 400, 250, 200);
    ellipse(750, 250, 150, 150);
    //face
    arc(750, 275, 50, 50, 0, PI);
    arc(725, 245, 25, 25, 10, 0);
    arc(775, 245, 25, 25, 10, 0);
    //arms
    stroke("saddlebrown");
    strokeWeight(10);
    line(550, 350, 650, 400);
    line(850, 400, 950, 350);
    //heart
    fill(fill1);
    noStroke();
    ellipse(756, 400, 35, 35);
    ellipse(784, 400, 35, 35);
    triangle(738.5, 405, 801.5, 405, 770, 445);
    //table
    fill("saddlebrown");
    noStroke();
    rect(200, 500, 300, 30);
    rect(235, 525, 30, 200);
    rect(440, 525, 30, 200);
    //martini
    stroke("aqua");
    strokeWeight(5);
    line(275, 495, 335, 495);
    line(305, 435, 305, 495);
    fill(fill2);
    noStroke();
    triangle(275, 400, 335, 400, 305, 435);
    noFill();
    stroke("aqua");
    strokeWeight(5);
    triangle(260, 380, 350, 380, 305, 435);
    //lime
    fill("limegreen");
    noStroke();
    arc(260, 380, 50, 50, PI, TWO_PI);
    //clock
    fill("white");
    stroke("saddlebrown");
    strokeWeight(10);
    ellipse(175, 175, 150, 150);
    strokeWeight(15);
    point(175, 175);
    strokeWeight(5);
    line(175, 120, 175, 175);
    line(175, 175, 195, 225);
}