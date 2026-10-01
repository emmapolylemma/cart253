/**
 * Color changing ant
 * Emma Rose Forget
 * 
 * Look at this color changing ant. It changes color when you move your cursor around it.
 */

"use strict";


function setup() {
    // Create the canvas
    createCanvas(600, 600);
}

function draw() {
    // background color
    background(255, 208, 208);

    // head of ant
    push();
    noStroke();
    fill(mouseX, mouseY, 600);
    ellipse(250, 300, 70);
    pop();

    // face of the ant
    push();
    noStroke();
    fill(0);
    ellipse(260, 295, 10);
    pop();

    push();
    noStroke();
    fill(0);
    ellipse(230, 295, 10);
    pop();

    // mouth 
    stroke('black');
    strokeWeight(3);
    line(245, 315.1, 230, 310);

    stroke('black');
    strokeWeight(3);
    line(245, 315.1, 260, 310);


    // body of ant
    push();
    noStroke();
    fill(mouseY, mouseX, 0);
    ellipse(300, 305, 60);
    pop();

    push();
    noStroke();
    fill(mouseX, mouseY, 160);
    ellipse(350, 305, 60);
    pop();

    // antennas
    stroke('yellow');
    strokeWeight(5);
    line(250, 315.1, 260, 310);

}