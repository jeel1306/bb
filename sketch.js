
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbinObject,paperObject,groundObject;
var world;
var options={
	isStatic:false,
	restitution:0.3,
	friction:0.5,
	density:0.2
}

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	background(0);
	rectMode(CENTER);

	


	engine = Engine.create();
	world = engine.world;
	dustbinObject=createSprite(1230,560,20,100);
	dustbinObject.shapeColor=color(255,0,0);
	dustbinObject=createSprite(1300,600,150,20);
	dustbinObject.shapeColor=color(255,0,0);
	dustbinObject=createSprite(1380,560,20,100);
	dustbinObject.shapeColor=color(255,0,0);
	
	groundObject=createSprite(width/2,650,width,20);
	groundObject.shapeColor=color(0,255,0);



	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



