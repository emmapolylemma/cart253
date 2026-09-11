/**
 * Git Workflow Example
 * Pippin Barr
 * 
 * Some sample code for playing with version control.
 * Draws a pyramid in the centre of the canvas and a
 * red circle at the user's mouse position.
 */

"use strict";

/**
 * Create a canvas, hides the cursor
*/
function setup() {
    // A 640x480 canvas
    createCanvas(640, 640);

    // Don't show the cursor
    noCursor();
}

/**
 * Draws a top-down view of a pyramid and also a pink circle
 * at the position of the user's cursor
*/
function draw() {
    // Make the background black (specified as RGB)
    background(166, 33, 20);

    // Draw a pyramid
    // How many levels for the pyramid
    const levels = 18;
    // Loop through every level (backwards)
    for (let level = levels; level > 0; level--) {
        // Draw this layer
        push();
        // Set the grey shade of the level based on its number
        // e.g. level 1 will get a shade of 10 (dark gray), 
        // level 10 will be 255(white)
        const shade = map(level, 1, levels, 10, 255);
        // No line around the levels
        noStroke();
        // Set the fill colour to our shade (RGB)
        fill(255, 20, 147);
        // Draw rectangles from the centre
        rectMode(CENTER);
        // Draw the rectangle in the centre of the canvas
        // (320, 320) with a size based on the level
        // e.g. level 1 will be a 48x48 rectangle and
        // level 10 will be a 480x480 rectangle
        rect(320, 320, level * 16, level * 16);
        pop();
    }

    // Draw a pink circle at the position of the mouse
    push();
    // A line around the shape
    noStroke();
    // Make it pink (RGB)
    fill(255, 192, 203);
    // Draw a 100x100 circle at the mouse position
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}