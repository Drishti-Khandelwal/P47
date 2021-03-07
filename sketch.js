
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var score = 0;
var robot;
var aliens=[];
function preload() {
    backgroundImg = loadImage("images/b3.jpg");
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;
    robot = new Robot(displayWidth-250,500,300);
  
    //ground = new Ground(600,height,1200,20);
     
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);  
   robot.display();
    if(frameCount %100 ===0){
   
      aliens.push(new Aliens(random(100, displayWidth-200), 0, 150))
  
    }
   for(i = 0; i<aliens.length; i=i+1){
    aliens[i].display();
   }

  
 
}
function keyPressed(){
 if(keyCode===LEFT_ARROW){

robot.body.position.x = robot.body.position.x-50
}
if(keyCode===RIGHT_ARROW){
     
    robot.body.position.x = robot.body.position.x+50
}

}
function detectCollision(lrobot,lalien){

  robotBodyPosition=lrobot.body.position
  alienBodyPosition=lalien.body.position
  
  var distance=dist(robotBodyPosition.x, robotBodyPosition.y, alienBodyPosition.x, alienBodyPosition.y)
 
  	if(distance<=lrobot.r+lalien.r)
    {    
      return true;
    }
 }
