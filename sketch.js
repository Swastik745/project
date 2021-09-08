const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var drops = [];
var rand;
var Ground1;
var maxDrops=100;

var thunderCreatedFrame=0;
 
var ground,groundImage;
var bgSound;

function preload(){
    groundImage=loadImage("damodara.jpg")
    bgSound=loadSound("krisna.mp3")
}

function setup(){
    createCanvas(1095,627)

    ground = createSprite(548,308);
    ground.addImage(groundImage);
    ground.scale = 0.8;


    engine = Engine.create();
    world = engine.world;

   Ground1 = new Ground()

    bgSound.play();

    //creating drops
    if(frameCount % 270 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,1700), random(0,1500)));
        }

    }

}

function draw(){
    Engine.update(engine);
    background("black");
     
    Ground1.display()

    drawSprites();

    

    
     

    //displaying rain drops
    for(var i = 1; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

    
}   

