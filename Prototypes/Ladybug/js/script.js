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
    background(0, 255, 255);

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
    ellipse(250, 150, 100, 50);
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

}