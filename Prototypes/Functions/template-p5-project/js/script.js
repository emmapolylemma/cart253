/**
 * Garden
 * Emma Rose Forget
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


function setup() {
    createCanvas(700, 500);
    background("#659a6f");

    textSize(40);
    textAlign(CENTER, CENTER)
}

function draw() {
}

function mousePressed() {
    text('🌷', mouseX - 200, mouseY + 10);

    text('🌸', mouseX, mouseY);

    text('🌻', mouseX + 200, mouseY - 530);

    text('🌱', mouseX - 300, mouseY + 20);

}