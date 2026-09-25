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
    strokeWeight(19);

    line(270, 250, 150, 100);

    // Style line 3.
    stroke('yellow');
    strokeWeight(7);

    line(320, 230, 320, 100);

    // Style line 4.
    stroke('yellow');
    strokeWeight(1);

    line(390, 250, 500, 150);

    // Style line 5.
    stroke('yellow');
    strokeWeight(4);

    line(400, 300, 500, 300);

    // Style line 6.
    stroke('yellow');
    strokeWeight(9);

    line(380, 380, 500, 500);

    // Style line 7.
    stroke('yellow');
    strokeWeight(5);

    line(320, 400, 330, 900);

    // Style line 8.
    stroke('yellow');
    strokeWeight(10);

    line(190, 400, 250, 370);


}