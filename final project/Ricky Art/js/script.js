/**
 * Ricky Art
 * Emma Rose Forget
 * 
 * The outline of ricky
 */

"use strict";

// create and color the canvas
function setup() {
    createCanvas(1100, 800);
    background("#b89696");
}


function draw() {

    // what changes in the loop: location of the circles that make up the art
    let circleX = [160, 180, 210, 240, 270, 300, 330, 360, 368, 380, 390, 380, 355, 400, 429, 460, 490, 520, 550, 580, 610, 640, 670, 695, 715, 740, 760, 780, 790, 770, 790, 815, 843, 873, 903, 920, 940, 940, 920, 889, 860, 830, 817, 810, 820, 845, 870, 899, 925, 930, 915, 890, 865, 845, 850];
    let circleY = [625, 649, 660, 670, 680, 690, 685, 680, 650, 620, 590, 560, 540, 645, 660, 670, 666, 663, 663, 660, 650, 645, 645, 630, 605, 585, 560, 535, 505, 590, 615, 635, 645, 650, 640, 615, 590, 560, 535, 540, 535, 520, 489, 460, 430, 450, 470, 460, 440, 410, 380, 360, 340, 315, 285];

    // what stays the same in the loop
    fill("#347634");
    stroke("#215721");
    strokeWeight(3)

    // loop
    for (let i = 0; i < circleX.length; i++) {
        circle(circleX[i], circleY[i], 30);
    }

}