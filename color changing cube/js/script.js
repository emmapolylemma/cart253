/**
 * Color changing s
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const thing = {
    x: 200,
    y: 250,
    size: 100,
    fill: ("blue"),
    fills: {
        mouseClick: ("yellow"),
        keyTapped: ("pink"),
        regular: ("red")
    }
};


// create the canvas
function setup() {
    createCanvas(400, 500);
}


// background and functions
function draw() {
    background("violet");

    checkInput();
    drawThing();
}

// draw the square
function drawThing() {
    // square
    push();
    noStroke();
    fill(thing.fill);
    square(thing.x, thing.y, thing.size);
    pop();
}

// square functions
function checkInput() {
    if (mouseIsPressed) {
        thing.fill = thing.fills.mouseClick;
    }

    else if (keyIsPressed) {
        thing.fill = thing.fills.keyTapped;
    }

    else {
        thing.fill = thing.fills.regular;
    }
}
