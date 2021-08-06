var pathImg, path;
var runner_running, runner
function preload(){
  //pre-load images
  pathImg=loadImage("path.png")
  runner_running=loadAnimation("Runner-1.png","Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200)
  path.addImage(pathImg)
  path.velocityY=4
  path.scale=1.8

  runner=createSprite(200,300);
  runner.shapeColor="red"
  runner.addAnimation("runner running", runner_running);
  runner.scale=0.1

  leftboundary=createSprite(0,200,80,1000);
  leftboundary.visible=false;

  rightboundary=createSprite(400,200,80,1000);
  rightboundary.visible=false;

  invisiblebarrier1=createSprite(400,200,10,400);
  invisiblebarrier1.visible=false;
  invisiblebarrier2=createSprite(200,400,10,400);
  invisiblebarrier2.visible=false
}

function draw() {
  background(0);

  runner.x=mouseX;

if(path.y>400) {
  path.y=path.height/-2;
}

drawSprites();
}
