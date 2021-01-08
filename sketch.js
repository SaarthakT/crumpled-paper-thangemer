
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var wall1, wall2, bottom, bottomSprite

var engine, world;
var ground, ball;

function setup() {
	var canvas = createCanvas(800, 700);
    engine = Engine.create();
    world = engine.world;

	wall1=createSprite(284,560,10,200)
	wall1.shapeColor=("RED")
	wall2=createSprite(484,560,10,200)
    wall2.shapeColor=("RED")
	bottomSprite=createSprite(384,650,200,20)
    bottomSprite.shapeColor=("RED")

    var ground_options ={
        isStatic: true
	}


    ground = Bodies.rectangle(600,height,1200,20,ground_options);
    World.add(world,ground);

	paper1=new Paper(10,10,10,10);
}


function draw(){
    background("lightpink");
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,1200,20);
	paper1.display();
	drawSprites(); 
}

function keyPressed() {
    if (keyCode === UP_ARROW){

Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

    }
}