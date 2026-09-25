/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bird = {
    x: 120,
    y: 480,
    size: 50,
    // NEW! We'll set the velocity to start at 0, the bird is not moving
    velocity: {
        x: 0,
        y: 0
    },
    // NEW! We now have acceleration properties, these will be ADDED to the
    // velocity every frame
    acceleration: {
        x: 0.025,
        // The y acceleration is negative so the bird will go UP
        y: -0.05
    }
}

// Creating canvas
function setup() {
    createCanvas(640, 480);
}


//
function draw() {
    background(0);

    // Move the bird by adding its velocity in x and y
    // Note that we always ADD velocity, so we use positive and negative
    // velocities to control direction
    bird.x = bird.x + bird.velocity.x;
    bird.y = bird.y + bird.velocity.y;

    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}