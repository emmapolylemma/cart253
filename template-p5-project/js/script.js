/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let thing = {
    x: 300,
    y: 300,
    fill: {
        r: 255, 
        g: 164, 
        b: 204
    },
    size: 300,
};

// Creates the canvas
function setup() {
   createCanvas(600, 600);
}


function draw() {
   background(100, 0, 0);

   // circle
   pop();
   noStroke();
   fill(thing.fill.r, thing.fill.g, thing.fill.b);
   circle(thing.x, thing.y, circle.size);
   push();
}

