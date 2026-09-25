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
    // NEW! We've added a velocity property to track the bird's velocity
    velocity: {
        // It has x and y properties so we can move the bird in both directions
        x: 1,
        // The y is negative because we want the bird to go UP
        y: -2
    }
}

// Creating canva
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