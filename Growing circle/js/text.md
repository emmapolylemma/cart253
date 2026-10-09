const circle = {
    x: 300,
    y: 300,
    size: 300,
    fill: (255, 164, 204),
}; 

function drawCircle() {
    push();
    noStroke();
    fill(circle.fill);
    circle(circle.x, circle.y, circle.size);
    pop();
}






function growThing(){ 
    thing.size += thing.growthRate;

}

function checkThingSize(){
    const thingSize = (thing.size >= thing.maxSize);
    if (thingSize) {
        thing.growthRate = 0;
    }

}
