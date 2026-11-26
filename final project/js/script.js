/**
 * Insect family and friends!
 * Emma Rose Forget
 * 
 * This project is about me and my close ones. My family, my boyfriend, and two close friends. I asked them to pick an insect and they all chose their type. The pink isopod in the middle is me, going over to say "hello!"
 */

"use strict";

let bug = [];
let currentImage = 0;

// moving the isopod
let x = 100;
let y = 100;
let speed = 5;


function preload() {
    bug[0] = loadImage("images/bee.png");
    bug[1] = loadImage("images/firefly.png");
    bug[2] = loadImage("images/moth.png");
    bug[3] = loadImage("images/sloth_happy.png");
    bug[4] = loadImage("images/bettle_L_happy.png");
    bug[5] = loadImage("images/bettle_L_still.png");
    bug[6] = loadImage("images/dung_happy.png");
    bug[7] = loadImage("images/dung_still.png");
    bug[8] = loadImage("images/isopod_still.png");
    bug[9] = loadImage("images/isopod_walk.png");
    bug[10] = loadImage("images/sloth_still.png");

}

// creates the canvas
function setup() {
    createCanvas(1000, 850)
}

// 
function draw() {
    background("#cccccc");

    // bee
    image(bug[currentImage], 800, 150, 150, 150);

    // firefly
    image(bug[1], 720, 150, 200, 200);

    // moth
    image(bug[2], 10, 0, 250, 250);

    // sloth moth (still)
    image(bug[3], -20, 550, 300, 300);
    image(bug[10], -20, 540, 300, 300);
    // ignore the fact that its not in order,its just to put the insect together instead of it being confusing!

    // bettle (purple)
    image(bug[4], 650, 500, 350, 300);
    image(bug[5], 650, 496, 350, 300);

    // dung bettle (blue)
    image(bug[6], 700, 10, 300, 200);
    image(bug[7], 690, 5, 300, 200);

    // isopod
    image(bug[8], 300, 300, 300, 200);
    image(bug[9], 340, 285, 200, 200);



}

function keyPressed(event) {
    let move = {
        x: 0,
        y: 0
    }

    if (event.keyCode === RIGHT_ARROW) {

    }


}