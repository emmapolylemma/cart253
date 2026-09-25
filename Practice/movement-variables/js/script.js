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
    size: 50
}

function setup() {
    createCanvas(640, 480);
}


function draw() {
    background(0);

    // Move the bird
    bird.x = bird.x + 1;
    bird.y = bird.y - 2;

    // Draw the bird
    ellipse(bird.x, bird.y, bird.size);
}