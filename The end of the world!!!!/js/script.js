/**
 * End of the world
 * Emma Rose Forget
 * 
 * Yea, the sun is getting closer and everything dies! (sad)
 */

"use strict";


// Background color
let backgroundColor = [174, 207, 255];

// The sun
let sun = {
    x: 600,
    y: 70,
    size: 100,
    color: [255, 200, 0]
};



function setup() {
    createCanvas(700, 400);
}

function draw() {
    background(backgroundColor);

    // The sun
    push();
    noStroke();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.size);
    pop();

}