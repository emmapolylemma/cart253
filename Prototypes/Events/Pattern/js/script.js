/**
 * Draw the pattern
 * Emma Rose Forget
 * 
 Click with your mouse or press any key and make your pattern. See what you can do!
 */

"use strict";

// red circle
const ball = {
    x: 0,
    y: 200,
    size: 70,
    fill: {
        red: 208,
        green: 113,
        blue: 113
    },
    velocity: {
        x: 0,
        y: 0
    },
    speed: 5
}

// yellow circle
const pointy = {
    x: 0,
    y: 80,
    size: 50,
    fill: {
        red: 224,
        green: 224,
        blue: 0
    },
    velocity: {
        x: 0,
        y: 0,
    },
    speed: 5
}

// blue circle
const hello = {
    x: 0,
    y: 330,
    size: 50,
    fill: {
        red: 0,
        green: 196,
        blue: 255
    },
    velocity: {
        x: 0,
        y: 0,
    },
    speed: 5
}



// creates the canvas plus the color
function setup() {
    createCanvas(1000, 400);
    background(224, 224, 224)
}


// adds shapes and makes shapes move
function draw() {

    //draw the red circle
    push();
    noStroke();
    fill(ball.fill.red, ball.fill.green, ball.fill.blue);
    ellipse(ball.x, ball.y, ball.size);
    pop();
    // move the circle
    ball.x += ball.velocity.x
    ball.y += ball.velocity.y;

    // draw yellow circle
    push();
    noStroke();
    fill(pointy.fill.red, pointy.fill.green, pointy.fill.blue);
    ellipse(pointy.x, pointy.y, pointy.size);
    // move the square
    pointy.x += pointy.velocity.x
    pointy.y += pointy.velocity.y;

    // draw blue circle
    push();
    noStroke();
    fill(hello.fill.red, hello.fill.green, hello.fill.blue)
    ellipse(hello.x, hello.y, hello.size)
    pop();
    // move the blue circle
    hello.x += hello.velocity.x
    hello.y += hello.velocity.y;

}

function mousePressed() {
    ball.velocity.x = ball.speed;

    pointy.velocity.x = pointy.speed;
    pointy.y += 6;

    hello.velocity.x = hello.speed;
    hello.y += 4;
}

function mouseReleased() {
    pointy.y -= 10

    hello.y += 6
}

function keyPressed() {
    pointy.y += 4

    hello.y -= 10
}
