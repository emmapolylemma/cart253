/**
 * Ricky Rain Frogs
 * Emma Rose Forget
 * 
    Rickys offer words of advice for somebody who struggles with their mental health. Click the screen to hear their words.
 */

"use strict";

let ricky = [];
let currentImage = 0;

let squeak;

// text that pops up
let texts = ["Hello Friends!", "It's okay to take time to yourself.", "Sometimes, things don't go the way you planned,", "but it happens..", "Don't beat yourself up for something like that.", "Things come and go,", "but they came!"];
let textIndex = 0;

function preload() {
    // load the images of the different rickys
    ricky[0] = loadImage("images/regular_ricky.png")
    ricky[1] = loadImage("images/vampire_ricky.png")
    ricky[2] = loadImage("images/ducky_ricky.png")
    ricky[3] = loadImage("images/santa_ricky.png")
    ricky[4] = loadImage("images/happy_ricky.png")
    ricky[5] = loadImage("images/christmas_tree_ricky.png")
    ricky[6] = loadImage("images/headphone_ricky.png")

    // loading the sound 
    squeak = loadSound("sounds/squeak.mp3");
}

// creates the canvas
function setup() {
    createCanvas(1000, 900);
}

function draw() {
    background("#ffffff");

    //  loading the images
    image(ricky[currentImage], 200, 150, 600, 600);

    // line of text
    let currentLine = texts[textIndex];
    // Text display
    push();
    fill("Pink");
    textSize(32);
    text(currentLine, 100, 200);
    pop();
}


// what happens when you press the mouse (cycle through the images, text, and play the squeak noise)
function mousePressed() {
    currentImage = currentImage + 1;

    textIndex = textIndex + 1;

    squeak.play();
}


