
let squares = [];
const numSquares = 5;
const squareSize = 100;

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let i = 0; i < numSquares; i++) {
        squares.push({
            x: random(width - squareSize),
            y: random(height - squareSize),
            vx: random(-3, 3),
            vy: random(-3, 3),
            color: color(random(255), random(255), random(255))
        });
    }
}

function draw() {
    // Create trail effect by drawing semi-transparent white overlay
    fill(255, 20);
    noStroke();
    rect(0, 0, width, height);

    // Update positions
    for (let sq of squares) {
        sq.x += sq.vx;
        sq.y += sq.vy;

        // Bounce off walls
        if (sq.x <= 0 || sq.x >= width - squareSize) {
            sq.vx *= -1;
            sq.x = constrain(sq.x, 0, width - squareSize);
        }
        if (sq.y <= 0 || sq.y >= height - squareSize) {
            sq.vy *= -1;
            sq.y = constrain(sq.y, 0, height - squareSize);
        }
    }

    // Check collisions between squares
    for (let i = 0; i < squares.length; i++) {
        for (let j = i + 1; j < squares.length; j++) {
            let sq1 = squares[i];
            let sq2 = squares[j];

            // Check if overlapping
            if (sq1.x < sq2.x + squareSize && sq1.x + squareSize > sq2.x &&
                sq1.y < sq2.y + squareSize && sq1.y + squareSize > sq2.y) {
                // Simple bounce: swap velocities
                let tempVx = sq1.vx;
                let tempVy = sq1.vy;
                sq1.vx = sq2.vx;
                sq1.vy = sq2.vy;
                sq2.vx = tempVx;
                sq2.vy = tempVy;

                // Change colors
                sq1.color = color(random(255), random(255), random(255));
                sq2.color = color(random(255), random(255), random(255));
            }
        }
    }

    // Draw squares
    for (let sq of squares) {
        fill(sq.color);
        stroke(0);
        rect(sq.x, sq.y, squareSize, squareSize);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}