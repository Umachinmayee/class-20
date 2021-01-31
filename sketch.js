var fixedRect,MovingRect;

function setup() {
  createCanvas(800,800);
  fixedRect= createSprite(200, 300, 80, 50);
  fixedRect.shapeColor ="blue";
  fixedRect.debug=true;
  MovingRect= createSprite(400, 200, 30, 70);
  MovingRect.shapeColor ="blue";
  MovingRect.debug=true;

}

function draw() {
  background(255,255,255); 
  MovingRect.x=World.mouseX;
  MovingRect.y=World.mouseY;
  console.log(fixedRect.x-MovingRect.x);
  if(MovingRect.x-fixedRect.x<55&&fixedRect.x-MovingRect.x<55&&
    fixedRect.y-MovingRect.y<60&&MovingRect.y-fixedRect.y<60){
    fixedRect.shapeColor ="red";
    MovingRect.shapeColor ="red";
  }
  else{
    MovingRect.shapeColor ="blue";
    fixedRect.shapeColor ="blue";
  }
  drawSprites();
}