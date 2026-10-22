/**
 * Lurking
 * Emma Rose Forget
 * 
 * Who's that lurking in the background?
 */

"use strict";

let img;
let opacity = 0;

function preload() {
    img = loadImage('assets/images/mrPippin.png')
}


// making the canvas
function setup() {
    createCanvas(700, 700);
    background("#E0E0E0");

}


function draw() {
    text("Who is that?", 100, 350);

    tint(255, opacity);
    image(img, 1, 1, 700, 700);

    if (opacity < 255) {
        opacity += 0.05;
    }


}