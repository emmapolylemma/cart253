/**
 * The sun
 * Emma Rose Forget
 * 
 * First test- make a sun
 */

"use strict";

function setup() {
    // Create the canvas
    createCanvas(640, 640);
}

function draw() {
    background(173, 216, 230);

    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(320, 320, 100, 100);
    pop();

    // Style line 1.
    stroke('yellow');
    strokeWeight(5);

    line(100, 300, 250, 320);

    // Style line 2.
    stroke('yellow');
    strokeWeight(5);

    line(270, 250, 150, 100);

    // Style line 3.
    stroke('yellow');
    strokeWeight(5);

    line(320, 230, 320, 100);

    // Style line 4.
    stroke('yellow');
    strokeWeight(5);

    line(390, 250, 500, 150);

}