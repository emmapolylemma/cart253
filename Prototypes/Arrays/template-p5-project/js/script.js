/**
 * Me and my manz
 * Emma Rose Forget
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let us = [];
let currentImage = 0;

function preload() {
    us[0] = loadImage("assets/images/EL1")
    us[1] = loadImage("assets/images/EL2")
    us[2] = loadImage("assets/images/EL3")
    us[3] = loadImage("assets/images/EL4")
}

function setup() {
    createCanvas(500, 500)
}


function draw() {
    background("#ffd7d7");

    image(us[currentImage], 100, 10, 10, 10);
}

function mousePressed() {
    currentImage = currentImage + 1;

    if (currentImage >= us.length) {
        currentImage = 0;
    }
}