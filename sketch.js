var bullet,wall;
var speed,weight, thickness;


function setup() {
  createCanvas(1600,400);
 speed = random(223,321);
 weight = random(30,52);
 thickness = random(20,83);

 bullet = createSprite(200,200,30,10);
 bullet.shapeColor = "white";
 bullet.velocityX = speed;

 wall = createSprite(1200,200,thickness,height/2);
wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0); 
  
hasCollide(bullet,wall);

  if(hasCollide(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* speed*weight*speed/(thickness*thickness*thickness);
    
    if(damage>10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }
  }
  drawSprites();
}

function hasCollide(bullet,wall){
bulletRightEdge = bullet.x + wall.width;
wallLeftEdge = wall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
else{
return false;
}}
