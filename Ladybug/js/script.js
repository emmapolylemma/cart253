/**
 * Ladybug
 * Emma Rose Forget
 * 
 * Just a pink lady bug.
 */

"use strict";


function setup() {
    // Creating the canvas
    createCanvas(500, 500);
}


// Making the ladybug.
function draw() {
    background(255, 179, 71);

    // body of the ladybug
    push();
    noStroke(8);
    fill(244, 194, 194);
    ellipse(250, 250, 150, 200);
    pop();

    // wonky head of the ladybug
    push();
    noStroke(0);
    fill(0, 0, 0);
    ellipse(250, 150, 80, 50);
    pop();

    // spots on the ladybug
    push();
    noStroke(0);
    fill(255, 255, 255);
    ellipse(290, 250, 50, 50);
    pop();

    push();
    noStroke(0);
    fill(255, 255, 255);
    ellipse(200, 250, 60, 90);
    pop();

    push();
    noStroke(0);
    fill(255, 255, 255);
    ellipse(260, 200, 40, 40);
    pop();

    push();
    noStroke(0);
    fill(255, 255, 255);
    ellipse(240, 320, 50, 40);
    pop();

    // antennaes of the ladybug
    stroke('black');
    strokeWeight(5);
    line(200, 100, 250, 150);

    stroke('black');
    strokeWeight(5);
    line(300, 100, 250, 150);
}