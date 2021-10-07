  var jacksonimg,jackson;
  var tower,towerimg;
  var jacksonstanding;
  var rockImg,rock;
  var coinImg, coin;

function setup() {
  createCanvas(800,800);

  tower = createSprite(400,400,800,800);
  tower.addImage("tower",towerimg);
  tower.scale = 1.5;
  tower.velocityY = 0;

  jackson = createSprite(400,400)
  jackson.addImage("jackson",jacksonstanding);
  jackson.addAnimation("player",jacksonimg);
  jackson.scale = 0.8

}

function preload(){
jacksonimg = loadAnimation("jackson1.png","jackson2.png","jackson3.png");
jacksonstanding = loadImage("jackson1.png")
towerimg = loadImage("tower.png");
coinImg = loadImage("coin.png");

}

function draw() {
  background("red");


  if (tower.y > 750){
    tower.y = tower.height/2;
  }

  spawnRock();
  //spawncoin();
  
      drawSprites();
}
function spawnRock(){
  if(frameCount % 80 === 0){
  var rock = createSprite(400,-10,20,20)
  rock.x = Math.round(random(100,700))
  rock.addImage("rock",rockImg);
  rock.velocityY = 3;
  rock.scale = 0.2;
  }
}

/*function spawncoin(){
  if(frameCount % 100 === 0){
  var coin = createSprite(400,-10,20,20)
  coin.x = Math.round(random(100,700))
  coin.addImage("coin",coinImg);
  coin.velocityY = 3;
  coin.scale = 0.2;
  }
}*/



function keyPressed(){
  if(keyCode === 32){
tower.velocityY = 2;
jackson.changeAnimation("player",jacksonimg)
  }

  if(keyCode === LEFT_ARROW  && jackson.x >= 50){
jackson.x = jackson.x -20;
  }

  if(keyCode === RIGHT_ARROW && jackson.x <= 750){
    jackson.x = jackson.x + 20;
      }
}