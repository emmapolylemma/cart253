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
    bug[1] = loadImage("images/firefly.png");
    bug[2] = loadImage("images/moth.png");
    bug[3] = loadImage("images/sloth_happy.png");
    bug[4] = loadImage("images/bettle_L_happy.png");
    bug[5] = loadImage("images/bettle_L_still.png");
    bug[6] = loadImage("images/dung_happy.png");
    bug[7] = loadImage("images/dung_still.png");
    bug[8] = loadImage("images/isopod_still.png");
    bug[9] = loadImage("images/isopod_walk.png");
    bug[10] = loadImage("images/sloth_still.png");

}

// creates the canvas
function setup() {
    createCanvas(1000, 850)
}

// 
function draw() {
    background("#cccccc");

    image(bug[currentImage], 50, 50, 500, 500);
    image(bug[1], 50, 50, 500, 500);
    image(bug[2], 50, 50, 500, 500);
    image(bug[3], 50, 50, 500, 500);
    image(bug[4], 50, 50, 500, 500);
    image(bug[5], 50, 50, 500, 500);
    image(bug[6], 50, 50, 500, 500);
    image(bug[7], 50, 50, 500, 500);
    image(bug[8], 50, 50, 500, 500);
    image(bug[9], 50, 50, 500, 500);
    image(bug[10], 50, 50, 500, 500);

}
