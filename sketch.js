
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;
	ball = new Paper(100,200,50);
	floor = new Ground(400,390,800,20);
	dustbin = new Bin(600,370,130,20);
	dustbinL=new Bin(530,345,20,70)
	dustbinR=new Bin(670,345,20,70)
	//Create the Bodies Here.


	Engine.run(engine);
    keyPressed();
}


function draw() {
  
  background(0);
  ball.display();
floor.display();
dustbin.display();
dustbinL.display();
dustbinR.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}

