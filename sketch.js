
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;

function preload()
{

	
	
}

function setup() {
	createCanvas(1400, 200);

	groundSprite = createSprite(0,0,1400,7);
	groundSprite.shapeColor = "yellow"

	ww1 = createSprite(0,0,10,80);
    ww1.shapeColor = red 

	ww2 = createSprite(0,0,10,80);
	ww3 = createSprite(0,0,210,10);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = Bodies.rectangle(700,185,800,10,{isStatic : true});
	World.add(world, ground);

	w1 =Bodies.rectangle(1000,130,10,80,{isStatic : true});
	World.add(world, w1);
	w2 =Bodies.rectangle(1200,130,10,80,{isStatic : true});
	World.add(world, w2);
	w3 =Bodies.rectangle(1100,175,200,7,{isStatic : true});
	World.add(world, w3);

var options = {
'restitution':0.2,
'friction':0.5,
'density':1.0


}
	


	ball= Bodies.circle(400,0,20,options);
    World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {

  background(0);

  Engine.update(engine);
  rectMode(CENTER);
  groundSprite.x = ground.position.x
  groundSprite.y = ground.position.y

  ww1.x = w1.position.x
  ww1.y = w1.position.y

  ww2.x = w2.position.x
  ww2.y = w2.position.y

  ww3.x = w3.position.x
  ww3.y = w3.position.y

  ellipse(ball.position.x,ball.position.y,20,20);

 

 
  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === 32){

Matter.Body.applyForce(ball,ball.position,{x:65,y:-45});



}


}


