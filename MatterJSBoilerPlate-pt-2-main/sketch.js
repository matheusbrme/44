
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var plane,block1,block2
var rotato1,rotato2,rotato3,point1,point2,point3,point4,point5
var angle =  60
var angle2 = 60
var angle3 =  60
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos aqui.
var plane_opitions =  {
isStatic:true
}
var blocks_options = {
isStatic: true
}
var rotato_opitions = {
	isStatic:true
}
var points_options = {
restitution: 0.4,
friction: 0.02
  
}
plane = Bodies.rectangle(400,700,800,30,plane_opitions)
block1 = Bodies.rectangle(600,400,100,30,blocks_options)
block2 = Bodies.rectangle(200,400,100,30,blocks_options)
rotato1 = Bodies.rectangle(400,300,150,30,rotato_opitions)
rotato2 = Bodies.rectangle(400,300,150,30,rotato_opitions)
rotato3 = Bodies.rectangle(400,300,150,30,rotato_opitions)
point1 = Bodies.circle(410,140,20,points_options)
point2 = Bodies.circle(400,130,20,points_options)
point3 = Bodies.circle(390,120,20,points_options)
point4 = Bodies.circle(380,110,20,points_options)
point5 = Bodies.circle(370,100,20,points_options)

World.add(world,plane)
World.add(world,block1)
World.add(world,block2)
World.add(world,point1)
World.add(world,point2)
World.add(world,point3)
World.add(world,point4)
World.add(world,point5)
World.add(world,rotato1)
World.add(world,rotato2)
World.add(world,rotato3)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lime");
  Engine.update(engine);
  rect(plane.position.x,plane.position.y,800,30)
  rect(block1.position.x,block1.position.y,100,30)
  rect(block2.position.x,block2.position.y,100,30)
  ellipse(point1.position.x,point1.position.y,20)
  ellipse(point2.position.x,point2.position.y,20)
  ellipse(point3.position.x,point1.position.y,20)
  ellipse(point4.position.x,point2.position.y,20)
  ellipse(point5.position.x,point2.position.y,20)
  

  Matter.Body.rotate(rotato1,angle)
  push() 
 translate(rotato1.position.x,rotato1.position.y)
  rotate(angle)
rect(0,0,150,30)
  pop()
  angle += 10


  Matter.Body.rotate(rotato2,angle2)
  push() 
 translate(rotato2.position.x,rotato2.position.y)
  rotate(angle2)
rect(0,0,150,30)
  pop()
  angle2 += 20
  
  Matter.Body.rotate(rotato3,angle3)
  push() 
 translate(rotato3.position.x,rotato3.position.y)
  rotate(angle3)
rect(0,0,150,30)
  pop()
  angle3 += 30




  drawSprites();
 
}



