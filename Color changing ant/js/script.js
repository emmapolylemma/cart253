/**
 * Color changing ant
 * Emma Rose Forget
 * 
 * Look at this color changing ant with some funky antennas! 
 * 
 * It changes color when you move your cursor around it. How it be sometimes. 
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
    stroke(mouseX, mouseY, 160);
    strokeWeight(5);
    line(259, 200, 259, 270);

    stroke(mouseX, mouseY, 0);
    strokeWeight(5);
    line(230, 210, 230, 270);

    // legs
    stroke(mouseX, mouseY, 50);
    strokeWeight(5);
    line(280, 370, 286, 329);

    stroke(mouseX, mouseY, 1000);
    strokeWeight(5);
    line(300, 370, 300, 329);

    stroke(mouseX, mouseY, 50);
    strokeWeight(5);
    line(339, 370, 339, 329);

    stroke(mouseX, mouseY, 600);
    strokeWeight(5);
    line(370, 370, 360, 329);

}
