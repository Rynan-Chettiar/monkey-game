
var monkey , monkey_running
var banana ,bananaimage, obstacle, obstacleimage
var bananagroup, obstaclegroup
var score
var survivalTime= 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaimage = loadImage("banana.png");
  obstacleimage = loadImage("obstacle.png");
 
}



function setup() {
  
createCanvas(600, 400);
  
monkey= createSprite(50, 300, 20, 20)
monkey.addAnimation("monkey", monkey_running);
monkey.scale= 0.130;
  
floor= createSprite(300, 370, 600, 20)
floor.shapeColor="black";
floor.velocityX= -5;
  
bananagroup= new Group();
obstaclegroup= new Group();
  
}


function draw() {
  
background(250);
  
if (floor.x < 300)
 {
     floor.x = floor.width/2;
 }

if (keyDown("space") && monkey.y >= 180)
{
  
 monkey.velocityY= -10; 
  
}
  
monkey.velocityY= monkey.velocityY+1;
  
monkey.collide(floor);
  
stroke("white");
textSize(20);
fill("black");
text("score: "+ 0, 400, 50)
  
stroke("black");
textSize(20);
fill("black");
survivalTime= Math.ceil(frameCount/ 80)
text("SurvivalTime : " + survivalTime, 100, 50)

  
spawnbanana();
spawnobstacle();  

  
drawSprites();



}

function spawnbanana()
{
  
if (frameCount% 80 === 0)
  {
    
   banana= createSprite(600, Math.round(random(90, 150)), 20,20);
   banana.addImage("banana", bananaimage)
   banana.velocityX= -5;
   banana.scale=0.150;
   banana.lifetime= 120;
    
  bananagroup.add(banana);
  
    
  }
  }

function spawnobstacle()
{
  
if (frameCount% 300 === 0)
  {
    
   obstacle= createSprite(600, 340, 20,20);
   obstacle.addImage("obstacle", obstacleimage)
   obstacle.velocityX= -5;
   obstacle.scale=0.260;
  obstacle.lifetime= 120;
    
  obstaclegroup.add(obstacle);
  
    
  }
  }
