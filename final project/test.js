let x = 200;
let y = 200;
let speed = 5;
let img;

function preload() {
    img = loadImage('images/moth.png');
}

function draw() {
    background(220);
    image(img, x, y, 100, 100);
}

4. Make it move!
Add this:
function keyPressed() {
    if (keyCode === UP_ARROW) {
        y -= speed;
    }

    if (keyCode === DOWN_ARROW) {
        y += speed;
    }

    if (keyCode === LEFT_ARROW) {
        x -= speed;
    }

    if (keyCode === RIGHT_ARROW) {
        x += speed;
    }
}