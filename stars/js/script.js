/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const target = {
    x: 200,
    y: 200,
    size: 10.1,
    fill: (0, 0, 0),
    fills: {
        noOverlap: (0, 0, 0),
        overlap: (255, 204, 229)
    }
};


const player = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 1,
    fill: (0, 0, 0)
};

// make the canvas
function setup() {
    createCanvas(800, 600);
}


function draw() {
    background(0, 0, 0);

    // code takens from example, adjusted for me
    // reaction with target
    const d = dist(player.x, player.y, target.x, target.y);
    const overlap = (d < player.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }



    //moves the mouse
    player.x = mouseX;
    player.y = mouseY;

    // target, its hidden somewhere!!!
    push();
    noStroke();
    fill(target.fill);
    ellipse(target.x, target.y, target.size);
    pop();

    // mouse
    push();
    noStroke();
    fill(player.fill);
    ellipse(player.x, player.y, player.size);
    pop();



}