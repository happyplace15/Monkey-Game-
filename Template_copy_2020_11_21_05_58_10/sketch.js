
var monkey, monkey_running;
var ground;
var obstacle,obstacleimage;
var banana,bananaimage;


function preload(){
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaimage=loadImage("banana.png");
  obstacleimage=loadImage("obstacle.png");
  
  
  
  
  
  
}
function setup() {
  createCanvas(600, 400);
  
    monkey= createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  

  
  
}

function draw() {
  background(220);
  
  
  ground=createSprite(400,350,900,10)
  ground.velocityX=-4;
  ground.x=ground.width/2;
  
  
  
   if(keyDown("space")&& monkey.y >= 100) {
    monkey.velocityY = -10;
  }
   monkey.velocityY = monkey.velocityY + 0.3
   monkey.collide(ground);

  
  
  spawnBanana();
  spawnObstacles();
  
  
  
  
  drawSprites();
}

function spawnBanana(){
  if (frameCount%80===0){
  banana=createSprite(400,75,20,20)
    banana.addImage("banana.png",bananaimage)
    banana.velocityX=-3;
    banana.x= Math.round(random(20,500))
    banana.scale=0.1;

}
}
function spawnObstacles(){
  if (frameCount%80===0){
    obstacle=createSprite(400,330,20,20)
    obstacle.addImage(obstacleimage)
    obstacle.scale=0.2;
    obstacle.collide(ground);
    obstacle.lifetime=100;
    obstacle.velocityX=-4
  
}
}

