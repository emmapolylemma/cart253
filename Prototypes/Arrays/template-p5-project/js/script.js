/**
 * What will my cat say?
 * 
 *Click with your mouse to see what my cat, Batman, has to say
 */

"use strict";

// add the image of my cat
function preload() {
    img = loadImage('assets/images/batman.png');
}

// make the canvas
function setup() {
    createCanvas(900, 600);
    background("#d4c3c9");
}

function draw() {
    image(img, 1, 1, 700, 700);
}