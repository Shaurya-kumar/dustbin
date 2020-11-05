const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustl,dustr,dustb;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(400,650,800,20);
    
	paper = new Paper(100,100,50,50);

	dustl = new Box(500,600,10,85);
	dustr = new Box(750,600,10,85);
	dustb = new Box(625,640,260,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();

  ground.display();
  paper.display();
  dustl.display(); 
  dustr.display(); 
  dustb.display(); 

  Engine.update(engine);

  if(keyDown(UP_ARROW)){

  Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-20})



  }
 
}



