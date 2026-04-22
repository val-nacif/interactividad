let size = 42;
let fill_color = "#865ccf";
let stroke_color = "#fafa5b";
let x= 0, y= 0, friction = 0.1;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    frameRate(60);
}

function draw() {
    background(9, 7 ,150, 0.5);
    updateCursor();
} 

function updateCursor() {
    fill(fill_color);
    stroke(stroke_color);
    x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    ellipse( x, y, size, size);
}