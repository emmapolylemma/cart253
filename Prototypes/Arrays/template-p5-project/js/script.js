/**
 * Me and my manz
 * Emma Rose Forget
 * 
 * Very lazy work of me and my boyfriend
 */

"use strict";

let us = [];
let currentImage = 0;


function preload() {
    us[0] = loadImage("assets/images/EL1.jpg")
    us[1] = loadImage("assets/images/EL2.jpg")
    us[2] = loadImage("assets/images/EL3.jpg")
    us[3] = loadImage("assets/images/EL4.jpg")
    us[4] = loadImage("assets/images/EL5.jpg")
}

// create the canvas
function setup() {
    createCanvas(600, 600)

}

// background color and inserting image
function draw() {
    background("#ffd7d7");

    image(us[currentImage], 50, 50, 500, 500);
}

// mouse pressed, image cycle
function mousePressed() {
    currentImage = int(random(us.length));

}