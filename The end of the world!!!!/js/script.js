/**
 * End of the world
 * Emma Rose Forget
 * 
 * Yea, the sun is getting closer and everything dies! (sad)
 */

"use strict";


// Background color
let backgroundColor = [174, 207, 255];

// The sun
let sun = {
    x: 600,
    y: 70,
    size: 100,
    color: [255, 200, 0]
};

// little house
let house = {
    x: 230,
    y: 360,
    width: 55,
    height: 40,
    color: [127, 69, 69]
};







function setup() {
    createCanvas(700, 400);
}

function draw() {
    background(backgroundColor);

    // The sun
    push();
    noStroke();
    fill(sun.color);
    ellipse(sun.x, sun.y, sun.size);
    pop();

    // Little house
    push();
    fill(house.color);
    noStroke(0);
    rect(house.x, house.y, house.width, house.height);
    pop();

    // roof of the house (no use of variables to change the name)
    push();
    fill(255, 0, 0);
    noStroke(0);
    triangle(300, 360, 258, 320, 215, 360);
    pop();

    //tree 

}