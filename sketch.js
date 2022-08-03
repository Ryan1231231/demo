var box 

function setup() {

  createCanvas(1200,400);
  box=createSprite(100,200,100,100)
 // box.velocityX = 2
}

function draw() 
{
  background("green");

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 2
  }
drawSprites()
}




