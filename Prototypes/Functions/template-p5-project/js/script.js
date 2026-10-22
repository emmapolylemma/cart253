/**
 * Garden
 * Emma Rose Forget
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let flowers = ['🌸', '🌼', '🌷', '🍄', '🌱', '🐞']

// create canvas and the background
function setup() {
    createCanvas(700, 500);
    background("#85ac83");

    textSize(40);
    textAlign(center, center);
}


function draw() {
}

function mousePressed() {
    let emoji = random(flowers);
    text(flowers, mouseX, mouseY);
}

let emojis = ['🌸', '🌼', '🌷', '🍄', '🌱', '🐞']



function draw() {
}

function mousePressed() {
    let emoji = random(emojis);
    text(emoji, mouseX, mouseY);
}