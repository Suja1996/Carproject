var wall,a=0;
var bullet,speed,weight,bulletImg,thickness;
function preload(){
  bulletImg=loadImage("bullet.jpg")
}
function setup() {
  createCanvas(1600,400);
  weight=random(30,51)
  thickness=random(22,83)
  
  speed=random(222,321)
  wall=createSprite(800,200,thickness,height/2)
  bullet=createSprite(400,200,60,20)
  
  
  bullet.velocityX=6
  bullet.debug=true;


   
}

function draw() {
  background(255,255,255);  

if(wall.x-bullet.x<wall.width/2+bullet.width/2){
bullet.velocityX=0;
console.log("weight"+weight);
  console.log("speed"+speed);
 a=(0.5 * weight * speed * speed)/thickness^3;

console.log(weight)
if(hasCollided(wall,bullet)){
  console.log("a"+a)
  
if(a<3.68){
  bullet.shapeColor="green"
}
if(a>3.68){
  bullet.shapeColor="red"
}

}
}
  drawSprites();
}
