/**
 * Color changing ant
 * Emma Rose Forget
 * 
 * Look at this color changing ant. It changes color when you move your cursor around it.
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    CreateCanvas(400, 400);
}


/**
 * Making the ant
*/
function draw() {
    Background(255);


    push();
    fill(255, 0, 0);
    noStoke();
    ellipse(200, 200, 100, 100);
    pop();


}