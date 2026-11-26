/**
 * Ricky Race
 * Emma Rose Forget
 * 
 * Which ricky will win??
 */
//  If theres a '*' above the code, it means the code was created with the help of ai - I asked the ai to explain the code to me and I take that code and arrange it so it can work in my code (will explain better in presentation)

"use strict";
// *
let ricky = [];
let rickyX = [];
let rickySpeed = [];

// creating the canvas
function setup() {
    createCanvas(1000, 800);

    // *
    for (let imgs of ricky) {
        rickyX.push(0);
        rickySpeed.push(random(2, 6));
    }
}

function preload() {
    // load the images of the different rickys
    ricky[0] = loadImage("assets/images/regular_ricky.png")
    ricky[1] = loadImage("assets/images/vampire_ricky.png")
    ricky[2] = loadImage("assets/images/ducky_ricky.png")
    ricky[3] = loadImage("assets/images/santa_ricky.png")
    ricky[4] = loadImage("assets/images/happy_ricky.png")
    ricky[5] = loadImage("assets/images/christmas_tree_ricky.png")
    ricky[6] = loadImage("assets/images/headphone_ricky.png")

}


function draw() {
    background("#ffcfe9");

    // *
    // displaying, moving, and stopping the rickys
    for (let i = 0; i < ricky.length; i++) {

        image(ricky[i], rickyX[i], 20 + i * 110, 80, 80);

        rickyX[i] += rickySpeed[i];

        // stops the rickys when it hits the other side
        if (rickyX[i] > width - 80) {
            noLoop();
        }
    }
}