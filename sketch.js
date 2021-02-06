
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(200, 100, 50, 50);
  fixedRect.shapeColor = "green";

}
 


function draw() {
  background(255,255,255); 
  movingRect.y = mouseY;
  movingRect.x = mouseX;

console.log( movingRect.y-fixedRect.y);
  
if ( movingRect.x-fixedRect.x <fixedRect.width/2+movingRect.width/2 && fixedRect.x- movingRect.x<fixedRect.width/2+movingRect.width/2 &&  movingRect.y- fixedRect.y < fixedRect.width/2+movingRect.width/2 && fixedRect.y-  movingRect.y < fixedRect.width/2+movingRect.width/2 ){
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}
  drawSprites();
}