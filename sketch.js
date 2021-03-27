var canvas;
var music;
var blueBox1, orangeBox1, redBox1, greenBox1;
var box1;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    
    blueBox1=createSprite(70,550,200,50);
    blueBox1.shapeColor="blue";

    orangeBox1=createSprite(275,550,200,50);
    orangeBox1.shapeColor="orange";

    redBox1=createSprite(482.5,550,200,50);
    redBox1.shapeColor="red";

    greenBox1=createSprite(690,550,200,50);
    greenBox1.shapeColor="green";

    //create box sprite and give velocity

    box1=createSprite(Math.round(random(20,750)),300,40,40);
    box1.shapeColor="white";
    box1.velocityX=2;
    box1.velocityY=3;

    edges=createEdgeSprites();


}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite


    //add condition to check if box touching surface and make it box

    if(blueBox1.isTouching(box1) && box1.bounceOff(blueBox1)){
        music.play();
        box1.shapeColor="blue";
    }else if(orangeBox1.isTouching(box1) && box1.bounceOff(orangeBox1)){
        box1.shapeColor="orange";
        box1.velocityX=0;
        box1.velocityY=0;
        music.stop();
    }else if(redBox1.isTouching(box1) && box1.bounceOff(redBox1)){
        box1.shapeColor="red";
    }else if(greenBox1.isTouching(box1) && box1.bounceOff(greenBox1)){
        box1.shapeColor="green";
    }

    box1.bounceOff(edges[0]);
    box1.bounceOff(edges[1]);
    box1.bounceOff(edges[2]);
    box1.bounceOff(edges[3]);
    box1.bounceOff(blueBox1);
    box1.bounceOff(orangeBox1);
    box1.bounceOff(redBox1);
    box1.bounceOff(greenBox1);
    drawSprites();
}
