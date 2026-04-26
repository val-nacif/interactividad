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
    background(0, 100 ,100, 100);
    updateCursor();
} 

function updateCursor() {
     x += (mouseX - x) * friction;
    y += (mouseY - y) * friction;
    fill(fill_color);
    stroke(stroke_color);
  
    fill_color= map(x, 0, width, 0, 255);

    fill_color= map(y, 0, height, 7, 255);
    noStroke();
    fill(fill_color);
    ellipse( x, y, size, size);
}