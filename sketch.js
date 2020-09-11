const World = Matter.World;
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ball;


function setup() {
  createCanvas(900,500);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(700,200,200,10);

  block1 = new Block(320,275,40,40);
  block2 = new Block(360,275,40,40);
  block3 = new Block(400,275,40,40);
  block4 = new Block(440,275,40,40);
  block5 = new Block(340,235,40,40);
  block6 = new Block(380,235,40,40);
  block7 = new Block(420,235,40,40);
  block8 = new Block(360,195,40,40);
  block9 = new Block(400,195,40,40);

  block10 = new Block(640,175,40,40);
  block11 = new Block(680,175,40,40);
  block12 = new Block(720,175,40,40);
  block13 = new Block(760,175,40,40);
  block14 = new Block(660,135,40,40);
  block15 = new Block(700,135,40,40);
  block16 = new Block(740,135,40,40);
  block17 = new Block(680,95,40,40);
  block18 = new Block(720,95,40,40);

  ball = Bodies.circle(50,100,20);
  World.add(world,ball);

  rope = new Rope(ball,{x:50,y:0});

  

}

function draw() {
  background("black");  
  Engine.update(engine);
  ground.display();
  stand1.display();
  stand2.display();
  
  fill ("pink");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  fill ("green");
  block5.display();
  block6.display();
  block7.display();
  fill ("purple");
  block8.display();
  block9.display();

  fill ("pink");
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  fill ("green");
  block14.display();
  block15.display();
  block16.display();
  fill ("purple");
  block17.display();
  block18.display();
  
  fill ("blue");
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);

  rope.display();
  

}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}

function mouseReleased(){
  rope.fly();
}