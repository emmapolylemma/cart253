/**
 * Heart
 * Emma Rose Forget
 * 
 * For the love of my life- for Laurent. 
 */

"use strict";

// 
function setup() {
    createCanvas(670, 640);
}

// Drawing the heart
function draw() {
    background(192, 96, 96);

    push();
    noStroke();
    fill(255, 164, 204);
    circle(270, 250, 199);
    pop();

    push();
    noStroke();
    fill(255, 164, 204);
    circle(400, 250, 199);
    pop();

    push();
    noStroke();
    fill(255, 164, 204);
    triangle(330, 490, 486, 300, 184, 300);
    pop();

}