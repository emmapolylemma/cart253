/**
 * Mr. Furious is furious
 * Emma Rose Forget
 * 
 * Who made Mr. Furious furious?
 */

"use strict";

//  Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

// creating the canvas
function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(160, 180, 200);

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}