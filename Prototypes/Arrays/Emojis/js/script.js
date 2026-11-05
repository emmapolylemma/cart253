/**
 * Emojis
 * Emma Rose Forget
 * 
 * A simple project to help me understand for...of! 
 */

"use strict";

let emojis = ["🎀", "💕", "🐈‍⬛", "⭐", "🌸"];

// creating the canvas
function setup() {
    createCanvas(700, 150);
    background("#edb0b0");
}

// drawing the emojis
function draw() {
    textSize(50);

    let x = 100;
    for (let symbols of emojis) {
        text(symbols, x, 100);
        x += 100;
    }
}
