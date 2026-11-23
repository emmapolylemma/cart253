/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let bug;


async function setup() {
    img = await
        loadImage('images/moth.png');

}

// creates the canvas
function setup() {
    createCanvas(1000, 850);
}

// 
function draw() {
    background("#cccccc");

    bug(img, 0, 0);
}
