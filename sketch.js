
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1400, 650);
	rock1 = createSprite(180,575,100,60);


	engine = Engine.create();
	world = engine.world;
	ground = new Ground(700,630,1400,50);
	mangoTree = new Tree(1000,400,400,600);
	KID = new Kid(180,620,200,250);
	Jaideep1 = new Jaideep(160,600);
  
	 

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  mangoTree.display();
  KID.display();
  Jaideep1.display();
 // Rock1.display();

  
  drawSprites();
 
}



