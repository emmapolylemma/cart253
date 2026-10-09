/**
 * Growing Circle
 * Emma Rose Forget
 * 
 * A very basic growing pink circle. 
 * Press any key and watch it shrink, press with you mouse and watch it grow
 */

"use strict";

let thing = {
    x: 1000,
    y: 500,
    fill: {
        red: 255,
        green: 164,
        blue: 204
    },
    size: 300,
};

// Creates the canvas
function setup() {
    createCanvas(2000, 1000);
}


function draw() {
    background(255, 255, 255);

    // circle
    pop();
    noStroke();
    fill(thing.fill.red, thing.fill.green, thing.fill.blue);
    circle(thing.x, thing.y, thing.size);
    push();

    checkInput();
}

function checkInput() {
    if (mouseIsPressed) {
        thing.size = thing.size + 3
    }

    else if (keyIsPressed) {
        thing.size = thing.size - 3
    }

}
