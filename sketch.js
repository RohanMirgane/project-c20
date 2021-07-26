var bg,sleep, brush, gym, eat, bath, move; var astronaut;
function preload(){
  bg= loadImage("images/iss.png");
  sleep=loadAnimation("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  move=loadAnimation("images/move.png","images/move1.png");

}




function setup(){



  createCanvas(800,400);
  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;

}

function draw() {
  background(bg);  
  drawSprites();
  textSize(20);
   fill("white");
    text("Instructions:",20, 35);
    textSize(15); 
    text("Up Arrow = Brushing",20, 55);
     text("Down Arrow = Gymming",20, 70);
      text("Left Arrow = Eating",20, 85);
       text("Right Arrow = Bathing",20, 100);
        text("m key = Moving",20, 115);
 edges=createEdgeSprites();
 astronaut.bounceOff(edges);
 if(keyDown("UP_ARROW")){
  astronaut.addAnimation("brushing",brush);
  astronaut.changeAnimation("brushing"); 
 }       
 if(keyDown("DOWN_ARROW")){
  astronaut.addAnimation("gyming",gym);
  astronaut.changeAnimation("gyming"); 


 }
 if(keyDown("LEFT_ARROW")){
  astronaut.addAnimation("eating",eat);
  astronaut.changeAnimation("eating"); 


 }
 if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing"); 


 }
 if(keyDown("m")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving"); 
astronaut.velocityX=1;
astronaut.velocityY=1;

 }

}