var cx;
var cy;
var r = 255;
var g = 255;
var b = 255;
var alphaa = 0;
var addRed = false;
var addOrange = false;
var addBlue = false;
var addWhite = false;
var addLayer = false;
var saveDrawing = false;

function setup() {
    createCanvas(700, 700);
    background(62, 61, 61);
}

function draw() {

    drawButtonsBorder();
}




function mouseClicked() {

    print("clicked");
    if (mouseX > 50 && mouseX < 170 && mouseY > 640) {
        print("HolaRed")
        addRed = true; //set the boolean from false to true
        addOrange = false; //set everything else to false
        addBlue = false;
        addWhite = false;
        addLayer = false;
        saveDrawing = false;

    } else if (mouseX > 170 && mouseX < 290 && mouseY > 640) {
        print("HolaOrange")
        addOrange = true;
        addRed = false;
        addBlue = false;
        addWhite = false;
        addLayer = false;
        saveDrawing = false;

    } else if (mouseX > 290 && mouseX < 410 && mouseY > 640) {
        print("HolaBlue")
        addBlue = true;
        addRed = false;
        addOrange = false;
        addWhite = false;
        addLayer = false;
        saveDrawing = false;

    } else if (mouseX > 410 && mouseX < 530 && mouseY > 640) {
        print("HolaWhite")
        addWhite = true;
        addRed = false;
        addOrange = false;
        addBlue = false;
        addLayer = false;
        saveDrawing = false;

    }
    /*else if (mouseX>550 && mouseX<630 && mouseY>680){
      addLayer=true;
      addRed=false;
      addOrange=false;
      addBlue=false;
      addWhite=false;
      saveDrawing:false;
    } */
    else if (mouseX > 640 && mouseX < 680 && mouseY > 640) {
        saveDrawing = true;
        addLayer = false;
        addRed = false;
        addOrange = false;
        addBlue = false;
        addWhite = false;
    } else {
        saveDrawing = null; //trying to turn off the save button
    }


    if (addRed) { //adds red color to the stroke
        r = 103;
        g = 29;
        b = 15;
    } else {}
    if (addOrange) { //adds orange color to the stroke
        r = 232;
        g = 210;
        b = 176;
    } else {}
    if (addBlue) { // adds blue to the stroke 
        r = 63;
        g = 99;
        b = 116;
    } else {}
    if (addWhite) { //returns the color to white
        r = 255;
        g = 255;
        b = 255;
    } else {}
    if (saveDrawing) { //saves sketch
        saveFrame("Dandelion-###.png");
    } else {}

}


function mousePressed() { //sets the location of the dandelion fluff
    print("pressed");
    stroke(255);
    cx = (mouseX);
    cy = (mouseY);


    stroke(r, g, b);
    strokeWeight(random(2, 3));
    point(cx, cy);




}

function mouseDragged() { //draws the spikes of the dandelion fluffs
    print("dragged");


    stroke(r, g, b, alphaa);
    strokeWeight(random(0, 4));
    line(cx, cy, mouseX, mouseY);

    colorMode(RGB);
    stroke(52, 21, 15);
    strokeWeight(random(2, 3));
    point(mouseX, mouseY);


    alphaa = random(15, 80); //randomly change the opacity between 50 and 100
}

function drawButtonsBorder() { //function to draw the border and buttons
    //border
    noStroke();
    fill(255);
    rect(0, 0, 700, 15); //top
    rect(685, 0, 15, 700); //right
    rect(0, 640, 700, 60); //bottom
    rect(0, 0, 15, 700); //left

    //red
    //noStroke();
    fill(103, 29, 15);
    //stroke(150,30,45);
    rect(80, 650, 40, 40);

    //orange
    fill(232, 210, 176);
    //stroke(232,210,176);
    rect(200, 650, 40, 40);

    //blue
    fill(63, 99, 116);
    //stroke(63,99,116);
    rect(320, 650, 40, 40);

    //white
    stroke(62, 61, 61);
    strokeWeight(1);
    fill(255);
    rect(440, 650, 40, 40);

    //layer
    /*textSize(20);
    fill(62,61,61);
    text("layer",550, 680); */

    //save
    textSize(20);
    fill(62, 61, 61);
    text("save", 640, 680);

}