/**
 * Funky shapes
 * Emma Rose Forget
 * 
 * Funky shapes moving in funky ways.
 */

"use strict";


// create the canvas
function setup() {
    createCanvas(600, 400);
}


function draw() {
    // background color
    background(mouseY, mouseX, 0);

    // red circle
    push();
    fill('red');
    stroke('lightcoral');
    strokeWeight(4);
    ellipse(200, mouseY, 100, 100);
    pop();

    //  blue square
    push();
    fill('blue');
    stroke('darkblue');
    strokeWeight(4);
    rect(mouseX, 150, 100, 100);
    pop();

    // green triangle
    push();
    fill('green');
    stroke('darkgreen');
    strokeWeight(4);
    triangle(400, mouseX, 350, 300, 450, 300);
    pop();


}