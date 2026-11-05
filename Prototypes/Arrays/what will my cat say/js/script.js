/**
 * What will my cat say?
 * 
 *Click with your mouse to see what my cat, Batman, has to say.
 Get to know him personally by hearing what he has to say.
 */

"use strict";

let img;
let meowing;

let texts = ["", "Mrow... mmmrow", "Hello.", "This class is difficult for me!", "Meow?", "I want to go outside, if I dont, I will complain.", "MEOW!!", "I love catnip!", "I fight with every single cat I see.", "I love Emma Rose so so much!!!"];
let textIndex = 0;

// add one of the cutest picture of my kitty and adding the meowing sound effect
function preload() {
    img = loadImage('assets/images/batman.png');
    meowing = loadSound('assets/sounds/cat_meow.mp3');
}

// make the canvas
function setup() {
    createCanvas(900, 600);
}

// adding the image and the text itself
function draw() {
    background("#d4c3c9");

    image(img, 450, 250, 300, 300);


    let currentLine = texts[textIndex];
    // Text display
    push();
    fill(0, 0, 0);
    textSize(32);
    text(currentLine, 200, 200);
    pop();
}

// everytime the mouse is pressed, these happen
function mousePressed() {
    meowing.play();

    textIndex = textIndex + 1;
    if (textIndex >= texts.length) {
        textIndex = 0;
    }
}