/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bug = [];
let currentImage = 0;


function preload() {
    bug[0] = loadImage("images/bee.png");
    bug[1] = loadImage("images/firefly.png")

}

// creates the canvas
function setup() {
    createCanvas(1000, 850)
}

// 
function draw() {
    background("#cccccc");

    image(bug[currentImage], 50, 50, 500, 500);
}
