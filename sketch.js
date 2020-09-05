
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() 
{
	createCanvas(800, 700);

	bobDiameter=40;

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(230,600,60);
	bobObject2 = new Bob(290,600,60);
	bobObject3 = new Bob(350,600,60);
	bobObject4 = new Bob(410,600,60);
	bobObject5 = new Bob(470,600,60);


	Roof1 = new Roof(350,200,450,40);

	rope1= new Rope(bobObject1.body,{x:220,y:200});
	rope2 = new Rope(bobObject2.body,{x:280,y:200});
	rope3 = new Rope(bobObject3.body,{x:350,y:200});
	rope4 = new Rope(bobObject3.body,{x:400,y:200});
	rope5 = new Rope(bobObject3.body,{x:460,y:200});
	Engine.run(engine);
  
}


function draw() 
{
  rectMode(CENTER);
  background("white");

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  Roof1.display();
  rope1.display();
  rope2.display();
 // rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() 
{
	if (keyCode === UP_ARROW) 
	{
  
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:155,y:-155});
	
	}
	if(keyCode === DOWN_ARROW)
	{
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-155,y:-155});
	}
  }
  



