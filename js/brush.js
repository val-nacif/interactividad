

const PALETTE = ["#fafa5b", "#865ccf", "#2309ea", "#df1313" ];
let bg_color = "#fafa5b";
let stroke_color = "#865ccf";
let stroke_weight = 2;
let coords = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    bg_color = random(PALETTE);
}

function draw() {
   
 background(bg_color); // Semi-transparent background for trail effect
    stroke(stroke_color);
    strokeWeight(stroke_weight);
    noFill();

    beginShape();
    for (let i = 0; i < coords.length; i++) {
        const { x, y } = coords[i];
        vertex(x, y);   
    }
    endShape();

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}   

function mousePressed() {
   coords.push({ x: mouseX, y: mouseY });
}