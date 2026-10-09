/**
 * Color changing s
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const me = {
    x: 200,
    y: 250,
    size: 100,
    fill: ("pink"),
    fills: {
        mouseClick: ("#cce5ff"),
        keyTapped: ("#e5ccff"),
        regular: ("#FFCCE5")
    }
};

const myLove = {
    x: 40,
    y: 30,
    size: 150,
    fill: ("#EC89FF"),
    fills: {
        mouseClick: ("#F6C1FF"),
        keyTapped: ("#D2FFD7"),
        regular: ("#E6CDFF")
    }
}


// create the canvas
function setup() {
    createCanvas(350, 400);
}


// background and functions
function draw() {
    background("#D1C3D4");

    checkInput();
    checkHisInput();
    drawUs();
}

// draw the squares
function drawUs() {
    // me
    push();
    noStroke();
    fill(me.fill);
    square(me.x, me.y, me.size);
    pop();

    // laurent <3
    push();
    noStroke();
    fill(myLove.fill);
    square(myLove.x, myLove.y, myLove.size);
    pop();

}


// my square
function checkInput() {
    if (mouseIsPressed) {
        me.fill = me.fills.mouseClick;

    }

    else if (keyIsPressed) {
        me.fill = me.fills.keyTapped;
    }

    else {
        me.fill = me.fills.regular;
    }

}

function checkHisInput() {
    if (mouseIsPressed) {
        myLove.fill = myLove.fills.mouseClick;

    }

    else if (keyIsPressed) {
        myLove.fill = myLove.fills.keyTapped;
    }

    else {
        myLove.fill = myLove.fills.regular;
    }

}