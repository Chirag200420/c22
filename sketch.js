const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var engine,world,object
var ball

function setup() { 
  createCanvas(800,400);
  engine= Engine.create();
  world= engine.world;
var ground_options={
isStatic:true

}
 ground= Bodies.rectangle(100,390,600,50,ground_options)
 World.add(world,ground)

 var ball_options={
   restitution:0.5
 }
ball=Bodies.circle(100,100,20,ball_options)
World.add(world,ball)

}


function draw() {
  background(0);  
  Engine.update(engine)
  rectMode(CENTER)
 rect(ground.position.x,ground.position.y,600,50)
 ellipseMode(CENTER)
 ellipse(ball.position.x,ball.position.y,20,20)
}