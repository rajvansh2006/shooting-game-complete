var cross,target1,target2,target3,target4,target5,target6,target7,target8,bg2,target9,target10,heading
var crossimg,targetimg,score,homebg,nameimg
var gameState=0;
var play, playimg;
var level2;
var start_text,start_textimg;
var game_over;
function preload(){

  crossimg=loadImage("images/cross.png");
  targetimg=loadImage("images/target.png");
  bg=loadImage("images/level_1_background.png");
  homebg=loadImage("images/home_bg.jpg");
  nameimg=loadImage("images/heading.png");
  playimg=loadImage("images/playimg.png");
  bg2=loadImage("images/level_2_bg.jpg");
  start_textimg=loadImage("images/start_text.png");
  game_over=loadImage("images/game_over.png");
}



function setup() {
  
  createCanvas(displayWidth,displayHeight-180);
  target1=createSprite(118,212);
  target1.addImage(targetimg);
  target1.scale=0.25;
  target1.visible=false;
  target2=createSprite(420,286);
  target2.addImage(targetimg);
  target2.scale=0.25;
  target2.visible=false;
  target3=createSprite(915,140);
  target3.addImage(targetimg);
  target3.scale=0.25;
  target3.visible=false;
  target4=createSprite(1230,262);
  target4.addImage(targetimg);
  target4.scale=0.25;
  target4.visible=false;
  target5=createSprite(624,189);
  target5.addImage(targetimg);
  target5.scale=0.25;
  target5.visible=false;
  score=0;
  target6=createSprite(10,0);
  target6.addImage(targetimg);
  target6.scale=0.25;
   target6.visible=false;
  target7=createSprite(50,0);
  target7.addImage(targetimg);
  target7.scale=0.25;
  target7.visible=false;
  target8=createSprite(150,0);
  target8.addImage(targetimg);
  target8.scale=0.25;
   target8.visible=false;
  target9=createSprite(250,0);
  target9.addImage(targetimg);
  target9.scale=0.25;
  target9.visible=false;
  target10=createSprite(350,0);
  target10.addImage(targetimg);
  target10.scale=0.25;
    target10.visible=false;
  start_text=createSprite(360,250);
  start_text.addImage(start_textimg);
  start_text.visible=false;
  cross=createSprite(620,475);
  cross.addImage(crossimg);
  cross.scale=0.3;
  cross.visible=false;
  

  heading =createSprite(displayWidth/2,100,100,100);
  play = createSprite(displayWidth/2+50,490);

  

}


function draw() {
  if(gameState===0){
   background(homebg);
  
    
    heading.addImage(nameimg);
    
    play.addImage(playimg);
    play.scale=0.5;
    if(mousePressedOver(play)){
        gameState = 1;
    }
  }
  else if(gameState===1){
    clear();
    heading.visible = false;
    play.visible=false;
    background(bg);  
    cross.visible =true;
    cross.x=mouseX;
    cross.y=mouseY;
    target1.visible=true;
    target2.visible=true;
    target3.visible=true;
    target4.visible=true;
    target5.visible=true;
    
    
    textSize(17);
    fill("black");
    text("score: "+score,1220,22);
    if(score===50){
      gameState=2;
     }

  }
 
  else if(gameState===2){

    clear();
    background(bg2);
    heading.visible = false;
    play.visible=false;  
    cross.visible =true;
    cross.x=mouseX;
    cross.y=mouseY;
    start_text.visible=true;
   
  
    edges=createEdgeSprites();
    target6.bounceOff(edges);
    target7.bounceOff(edges);
    target8.bounceOff(edges);
    target9.bounceOff(edges);
    target10.bounceOff(edges);

   
   
    textSize(20);
    fill("red");
    text("score: "+score,1220,22);

    if(score===100){
gameState=3;

    }
  

  }
else if(gameState===3){
  clear();
  background(game_over);
  start_text.visible=false;
}

  drawSprites();
}

function mouseClicked(){
if(cross.isTouching(target1)){
score=score+10;
target1.destroy();

}
if(cross.isTouching(target2)){
  score=score+10;
  target2.destroy();
  
  }
  if(cross.isTouching(target3)){
    score=score+10;
    target3.destroy();
    
    }
    if(cross.isTouching(target4)){
      score=score+10;
      target4.destroy();;
      
      }
      if(cross.isTouching(target5)){
        score=score+10;
        target5.destroy();
        
        }
        if(cross.isTouching(target6)){
          score=score+10;
          target6.destroy();
        }
        if(cross.isTouching(target7)){
          score=score+10;
          target7.destroy();
        }
        if(cross.isTouching(target8)){
          score=score+10;
          target8.destroy();
        }
        if(cross.isTouching(target9)){
          score=score+10;
          target9.destroy();
        }
        if(cross.isTouching(target10)){
          score=score+10;
          target10.destroy();
        }
}
function keyPressed(){
 if (keyCode===32){
    
    target10.visible=true;
    target9.visible=true;
    target8.visible=true;
    target7.visible=true;
    target6.visible=true;
    start_text.visible=false;
  target6.velocityX=-10;
  target6.velocityY=8;
  target7.velocityX=9;
  target7.velocityY=-8;
  target8.velocityX=10;
  target8.velocityY=7;
  target9.velocityX=7;
  target9.velocityY=9;
  target10.velocityX=8;
  target10.velocityY=-7; 
    }
}