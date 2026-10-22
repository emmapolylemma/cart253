/**
 * Anger or serenity?
 * Emma Rose Forget
 * 
 * My anger grows slowly, vibrating every time i hear their name... But oh.. his voice calms me down.
 */

"use strict";

// my rage
let anger = {
    x: 170,
    y: 300,
    size: 100,
    fill: ("#740a0a"),
    vibrating: 3,
    growth: 0.2
}

// serenity
let calm = {
    x: 440,
    y: 300,
    size: 100,
    fill: ("#c3ffff"),
    growth: 0.2
}


// canvas and background color
function setup() {
    createCanvas(600, 600);
    background("#36080858");
}


function draw() {

    // anger vibrating
    let shakeX = random(-anger.vibrating, anger.vibrating);
    let shakeY = random(-anger.vibrating, anger.vibrating);

    //  anger
    push();
    noStroke();
    fill(anger.fill);
    ellipse(anger.x + shakeX, anger.y + shakeY, anger.size,);
    pop();

    // circles growing
    anger.size += anger.growth;
    calm.size += calm.growth;

    // serenity
    push();
    noStroke();
    fill(calm.fill);
    ellipse(calm.x, calm.y, calm.size);
    pop();
}

