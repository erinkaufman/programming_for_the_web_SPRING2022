function setup() {
    createCanvas(800, 800);
}
function draw() {
    if (mouseIsPressed) {
        fill(35, 95, 2);
    } else {
        noStroke();
        fill(255);
    }
    square(mouseX, mouseY, 100, 25);
}
function mousePressed() {
    clear();
    background(0);
  }