/**
 * Ricky Rain Frogs
 * Emma Rose Forget
 * 
 
 */

"use strict";

let rickys = [];



// creates the canvas
function setup() {
    createCanvas(800, 500)
}

function draw() {
    background("#ffffff");

    // push();
    // noStroke();
    // fill("Green");
    // circle(50, 250, 50);
    // pop();

    let diameter = 100
    let x = 100;
    let y = 250;

    while (x <= 700) {

        fill("Green");
        noStroke();
        circle(x, y, diameter);
        x += diameter;
    }

}


