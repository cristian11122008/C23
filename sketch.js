const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    
    

    ground =new Ground(200,390,400,20);


   

   
    console.log(ground);
    box1=new boxy(230,50,50,100);
    box2=new boxy(200,300,50,50);
}

function draw(){
    background(0);
    Engine.update(engine);
  ground.display()
    
    box1.display();
    box2.display();
}