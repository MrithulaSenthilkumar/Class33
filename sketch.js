const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
 var ball=[20,30,10,50,30,60]
console.log(ball);
var gameState="onSling";
var bgImage;
var score=0;
//creating birds array.

var birds=[]

function preload() {
    bgImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird1 = new Bird(200,50);
    bird2 = new Bird(150,170);
    bird3 = new Bird(100,170);

    //pushing the bird1,bird2,bird3 to the array birds.

    birds.push(bird3);
    birds.push(bird2);
    birds.push(bird1);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird1.body,{x:200, y:50});

    getBackgroundImage();

}

function draw(){
    //background(backgroundImg);

    if(backgroundImg){
    background(backgroundImg)
    }else{
    background(bgImage)
    }

   

    
    Engine.update(engine);
    //strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    pig1.score();
    pig3.score();

    bird1.displayBird1();
    bird2.displayBird2();
    bird3.displayBird3();

    bird1.displaytrajectory();
    bird2.displaytrajectory();
    bird3.displaytrajectory();

    platform.display();
    //log6.display();
    slingshot.display();  
    
    textStyle("bold");
    textSize(30);
    text("Score:"+score,1000,80);

}

function mouseDragged(){
   

    if(mouseX>=0&&mouseX<=200&&gameState!=="launched"){
        Matter.Body.setPosition(birds[birds.length-1].body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();

   birds.pop();
    gameState="launched";
}

function keyPressed(){
    if(keyCode === 32&&gameState === "launched"){
        slingshot.attach(birds[birds.length-1].body);
        Matter.Body.setPosition(birds[birds.length-1].body,{x:200,y:50})
        gameState==="onSling";
       // birds.trajectory=[]
    }
}

async function getBackgroundImage(){
    var getdata=await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    var getdatatype=await getdata.json();
    console.log(getdatatype);

    var getdatetime=getdatatype.datetime;
    console.log(getdatetime);

    var hour=getdatetime.slice(11,13);
    console.log(hour);

    if(hour>=06&&hour<=15){
    bg=("sprites/bg.png")
    }else{
        bg=("sprites/bg2.jpg")
    }


    backgroundImg=loadImage(bg);
}