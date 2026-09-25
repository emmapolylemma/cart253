/**
 * Introduction to variables
 * Emma Rose Forget
 * 
 * Testing variables and different functions / names
    */

"use strict";


function setup() {
// Create the canvas
    createCanvas(640, 640);
}

function draw() {
background(0);
    
    // Draw a circle in the centre of the canvas
    push();
    noStroke();
    fill(mouseX, mouseY, 0);
    ellipse(width/2, height/2, 100, 100);
    pop();
}