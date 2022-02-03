function setup () {
    createCanvas(200, 200)
}
function createTile () {
    translate(0, 0);
    fill(115, 99, 87);
    rect(0, 0, 200, 200);
    stroke(255, 238, 204);
    strokeWeight(2);
    line(20, 0, 20, 200);
    line(180, 0, 180, 200);
    line(0, 20, 200, 20);
    line(0, 180, 200, 180);
    line(20, 20, 180, 180);
    line(20, 180, 180, 20);
    line(100, 0, 100, 200);
    line(0, 100, 200, 100);
    line(40, 20, 160, 180);
    line(60, 20, 140, 180);
    line(80, 20, 120, 180);
    noStroke();
    fill(246, 150, 121);
    ellipse(10, 10, 10);
    ellipse(190, 190, 10);
    ellipse(10, 190, 10);
    ellipse(190, 10, 10);
    fill(255, 238, 204);
    ellipse(100, 100, 100);
    fill(246, 150, 121);
    ellipse(100, 100, 95);
    fill(115, 99, 87);
    quad(100, 65, 135, 100, 100, 135, 65, 100);
    fill(153, 204, 255);
    ellipse(100, 100, 25);
}
function draw () {
    createTile();
}