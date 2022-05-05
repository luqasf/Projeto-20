
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground
var block1,block2,block3


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
var block1_options = {
restitution:0.5,
friction:0.02,
frictionAir:0
}	
var block2_options = {
restitution:0.5,
friction:0.01,
frictionAir:0.1
}
var block3_options = {
restitution:0.01,
friction:1,
friction:0.3
}
block1 =  Bodies.circle(220,10,10,block1_options);
World.add(world,block1);
block2 =  Bodies.rectangle(110,50,10,10,block2_options);
World.add(world,block2);
block3 =  Bodies.rectangle(350,50,10,10,block3_options);
World.add(world,block3);

	

	//Crie os Corpos Aqui
ground = Bodies.rectangle(400,700,880,20,{isStatic:true}) 
World.add(world,ground)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(ground.position.x,ground.position.y,800,20)
ellipse(block1.position.x,block1.position.y,20,20)
rect(block2.position.x,block1.position.y,30,30)
rect(block3.position.x,block1.position.y,30,30)

}