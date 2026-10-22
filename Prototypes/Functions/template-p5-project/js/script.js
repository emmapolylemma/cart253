/**
 * Garden
 * Emma Rose Forget
 * 
 * When the mouse is clicked, flowers and plants scatter around, make a beautiful  garden!
 */

"use strict";

function setup() {
    createCanvas(700, 500);
    background("#659a6f");

    textSize(40);
    textAlign(CENTER, CENTER)
}

function draw() {
    // emojis already on canvas
    text('🍄', 200, 400);

    text('🐞', 450, 100);

    text('🍃', 100, 40);
    text('🍃', 590, 460);

    text('🍀', 320, 200);

    text('🦋', 50, 330);

    text('☘️', 50, 300);
}

function mousePressed() {
    //emoji's that apear when mouse clicked
    text('🌷', mouseX - 100, mouseY + 10);

    text('🌸', mouseX, mouseY);

    text('🌻', mouseX + 100, mouseY + 60);

    text('🌱', mouseX - 200, mouseY - 50);




}