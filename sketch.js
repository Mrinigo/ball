
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;
var groundobj
var leftground
var rightground
var ball_options

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
 ball_options={
    isStatic:false,
    restitution:0.4,
    density:1.2,
    friction:0,
 }
 
	//Create the Bodies Here.
 groundobj=new ground(width/2,670,width,20);
leftground=new ground(900,600,20,120)
rigthground=new ground(1150,600,20,120)
ball = Bodies.circle(260,300,100,ball_options);
World.add(world,ball);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundobj.display()
  leftground.display()
  rigthground.display()
  ellipse(ball.position.x,ball.position.y,100,100);
  drawSprites();
 
}

function keyPressed(){
  if (keyCode===UP_ARROW){
    Matter.Body.applyForce(ball,ball.position,{
      x:85,
      y:-85
    })
  }
}

