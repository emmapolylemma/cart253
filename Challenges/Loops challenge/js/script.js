/**
 * Christmas lines
 * Emma Rose Forget FT. Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("pink");
       


    
 // vertical lines
    let x = 0;
    let y = 0;
    let color = 0;


    for (let x = 0; x <= width; x += 1) {
        stroke(color, 100, 0);
        line(x, 0, x, height);

        color += 0.5;
    }

    // while (x <= width) {
    //     stroke(color);
    //     line(x, 0, x, height);

    //     color += 25;
    //     x += 10;
    // };

    

 // horizontal lines
    // color = 0;
    // for (let y = 0; y <= height; y += 1) {
    //     stroke(0, color, 0);
    //     line(0, y, width, y);

    //     color += 0.5;
    // }

    color = 0;
    while (y <= height) {
        stroke(0, color, 0);
        line(0, y, width, y);

        color += 25;
        y += 10;
    }



    

    

  

    
}