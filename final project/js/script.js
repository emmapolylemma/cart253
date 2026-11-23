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

    // bee
    image(bug[currentImage], 800, 150, 150, 150);

    // firefly
    image(bug[1], 720, 150, 200, 200);

    // moth
    image(bug[2], 10, 0, 250, 250);

    // sloth moth (still)
    image(bug[3], -20, 550, 300, 300);
    image(bug[10], -20, 540, 300, 300);

    // bettle (purple)
    image(bug[4], 650, 500, 350, 300);
    image(bug[5], 650, 496, 350, 300);

    // dung bettle (blue)
    image(bug[6], 700, 10, 300, 200);
    image(bug[7], 690, 5, 300, 200);

    // isopod
    image(bug[8], 300, 300, 300, 200);
    image(bug[9], 340, 285, 200, 200);



}
