/**
 * Dots!!! o o o
 * Emma Rose Forget
 * 
 * Press the key (first letter of the color), and what the dots change color!
 */

"use strict";

// make the dots

// blue dot (b)
const blue = {
    x: 70,
    y: 250,
    size: 80,
    fill: ("blue"),
    fills: {
        blue: ("blue"),
        lightBlue: ("#6aadff"),
    },
}

// red dot (r)
const red = {
    x: 430,
    y: 250,
    size: 80,
    fill: ("red"),
    fills: {
        red: ("red"),
        darkRed: ("#910000"),
    },
}

// yellow dot (y)
const yellow = {
    x: 190,
    y: 250,
    size: 80,
    fill: ("yellow"),
    fills: {
        yellow: ("yellow"),
        lightYellow: ("#ffe330"),
    },
}

// green dot (g)
const green = {
    x: 310,
    y: 250,
    size: 80,
    fill: ("green"),
    fills: {
        green: ("green"),
        darkGreen: ("#004104"),
    },
}

// orange dot (o)
const orange = {
    x: 130,
    y: 165,
    size: 64,
    fill: ("orange"),
    fills: {
        orange: ("orange"),
        lightOrange: ("#FFC980"),
    },
}

// pink dot (p)
const pink = {
    x: 250,
    y: 140,
    size: 70,
    fill: ("pink"),
    fills: {
        pink: ("pink"),
        darkPink: ("#ffabab")
    },
}

// white dot (w)
const white = {
    x: 370,
    y: 165,
    size: 64,
    fill: ("white"),
    fills: {
        white: ("white"),
        gray: ("gray"),
    },
}

// violet dot (v)
const violet = {
    x: 250,
    y: 370,
    size: 70,
    fill: ("#C52FF3"),
    fills: {
        violet: ("#C52FF3"),
        lightViolet: ("#E99CFF"),
    },
}

// neon dot (n)
const neon = {
    x: 130,
    y: 340,
    size: 64,
    fill: ("#E2FF6C"),
    fills: {
        neon: ("#E2FF6C"),
        lightNeon: ("#f4ffd0"),
    },
}

// cyan dot (c)
const cyan = {
    x: 370,
    y: 345,
    size: 64,
    fill: ("#AFFFFD"),
    fills: {
        cyan: ("#0efffb"),
        darkCyan: ("#00d6d2"),
    },
}


// make the canvas and color
function setup() {
    createCanvas(500, 500);
    background("#ffe3e3");
}

// drawing the dots
function draw() {
    // blue dot
    push();
    noStroke();
    fill(blue.fill);
    ellipse(blue.x, blue.y, blue.size);
    pop();

    // red dot
    push();
    noStroke();
    fill(red.fill);
    ellipse(red.x, red.y, red.size);
    pop();

    // yellow dot
    push();
    noStroke();
    fill(yellow.fill);
    ellipse(yellow.x, yellow.y, yellow.size);
    pop();

    // green dot
    push();
    noStroke();
    fill(green.fill);
    ellipse(green.x, green.y, green.size);
    pop();

    // orange dot
    push();
    noStroke();
    fill(orange.fill);
    ellipse(orange.x, orange.y, orange.size);
    pop();

    // pink dot
    push();
    noStroke();
    fill(pink.fill);
    ellipse(pink.x, pink.y, pink.size);
    pop()

    // white dot
    push();
    noStroke();
    fill(white.fill);
    ellipse(white.x, white.y, white.size);
    pop();

    // violet dot
    push();
    noStroke();
    fill(violet.fill);
    ellipse(violet.x, violet.y, violet.size);
    pop();

    // neon dot
    push();
    noStroke();
    fill(neon.fill);
    ellipse(neon.x, neon.y, neon.size);
    pop();

    // cyan dot
    push();
    noStroke();
    fill(cyan.fill);
    ellipse(cyan.x, cyan.y, cyan.size);
    pop();

}

// key pressing for the dots, they change colors
function keyPressed(event) {
    if (event.key === "b") {
        blue.fill = blue.fills.lightBlue;
    }

    if (event.key === "r") {
        red.fill = red.fills.darkRed;
    }

    if (event.key === "y") {
        yellow.fill = yellow.fills.lightYellow;
    }

    if (event.key === "g") {
        green.fill = green.fills.darkGreen;
    }

    if (event.key === "o") {
        orange.fill = orange.fills.lightOrange;
    }

    if (event.key === "p") {
        pink.fill = pink.fills.darkPink;
    }

    if (event.key === "w") {
        white.fill = white.fills.gray;
    }

    if (event.key === "v") {
        violet.fill = violet.fills.lightViolet;
    }

    if (event.key === "n") {
        neon.fill = neon.fills.lightNeon;
    }

    if (event.key === "c") {
        cyan.fill = cyan.fills.darkCyan;
    }
}

// when key released, the colors goes back
function keyReleased(event) {
    if (event.key === "b") {
        blue.fill = blue.fills.blue;
    }

    if (event.key === "r") {
        red.fill = red.fills.red;
    }

    if (event.key === "y") {
        yellow.fill = yellow.fills.yellow;
    }

    if (event.key === "g") {
        green.fill = green.fills.green;
    }

    if (event.key === "o") {
        orange.fill = orange.fills.orange;
    }

    if (event.key === "p") {
        pink.fill = pink.fills.pink;
    }

    if (event.key === "w") {
        white.fill = white.fills.white;
    }

    if (event.key === "v") {
        violet.fill = violet.fills.violet;
    }

    if (event.key === "n") {
        neon.fill = neon.fills.neon;
    }

    if (event.key === "c") {
        cyan.fill = cyan.fills.cyan;
    }

}