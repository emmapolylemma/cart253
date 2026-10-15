/**
 * Chicken pox
 * Emma Rose Forget
 * 
 * Be the disease, give the child chicken pox
 */

"use strict";

// create the canvas and background
function setup() {
    createCanvas(400, 400);
    background("#FFE5CC");
}

// the eye of the child
function draw() {
    // eyes
    push();
    stroke(1);
    stroke("#E0E0E0")
    fill("white");
    ellipse(100, 100, 100, 50);
    pop();

    push();
    stroke(1);
    stroke("#E0E0E0")
    fill("white");
    ellipse(300, 100, 100, 50);
    pop();

    // iris
    push();
    stroke(1);
    stroke("#99CCFF");
    fill("lightBlue");
    circle(100, 100, 50);
    pop();

    push();
    stroke(1);
    stroke("#99CCFF");
    fill("lightBlue");
    circle(300, 100, 50);
    pop();

    // eyebrows
    push();
    strokeWeight(5);
    line(40, 70, 100, 40);
    pop();

    push();
    strokeWeight(5);
    line(350, 70, 270, 40);
    pop();

    // nose
    push();
    stroke(1);
    stroke("#ffcf98");
    fill("#ffdbb2");
    ellipse(200, 200, 50, 100);
    pop();

    // mouth
    push();
    strokeWeight(5);
    line(100, 320, 300, 300);
    pop();
}

function mousePressed() {
    // the chicken pocks
    push();
    noStroke();
    fill("#FFCCCC");
    ellipse(mouseX, mouseY, 15);
    pop();

}