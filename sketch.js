var bg , bgImg ;
var obs1 , obs1Img , obs2 , obs2Img , obs3 , obs3Img , obs4 , obs4Img , obs5 , obs5Img ;
var car , carImg ;
var obsCar1 , obsCar1Img , obsCar2 , obsCar2Img , obsCar3 , obsCar3Img ;




function preload(){
 bgImg = loadImage("assets/track.jpg");

 obs1Img = loadImage("assets/obs-bomb.png");
 obs2Img = loadImage("assets/obs-nail.png");
 obs3Img = loadImage("assets/obs-road1.png");
 obs4Img = loadImage("assets/obs-road2.jpg");
 obs5Img = loadImage("assets/obs-stone.png");

carImg = loadImage("assets/ourCar.png");

obsCar1Img = loadImage("assets/car1.png");
obsCar2Img = loadImage("assets/car2.png");

}

function setup() {

///////////////////////////////////////////////////////////////////////////////////////////////////

  var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    canW = diplayWidth;
    canH = displayHeight;
    createCanvas(diplayWidth + 80, displayHeight);
  }
  else {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(windowWidth, windowHeight);
  };

  /////////////////////////////////////////////////////////////////////////////////////////////////

  // creating background

  bg =  createSprite(800, 200, 50, 50);
  bg.addImage(bgImg); 

 // creating our own car
 
  car = createSprite(790 , 1370 , 20 , 20) ;
 car.addImage(carImg);
 car.scale = 0.5 ;
 
// creating obstacle cars

 obsCar1 = createSprite(500 , 1370 , 20 , 20) ;
obsCar1.addImage(obsCar1Img) ;
obsCar1.scale = 0.5 ;

 obsCar2 = createSprite(1050 , 1370 , 20 , 20) ;
obsCar2.addImage(obsCar2Img) ;
obsCar2.scale = 0.5 ;
  
}

function draw() {
  background(0);  

  if(keyDown(UP_ARROW)){
    car.y -= 5.7 ;

    obsCar1.velocityY = -5 ;
   
   // car.velocityX = 3 ;
    console.log("yes !!") ;

    obsCar2.velocityY = -5 ;

  }
  camera.position.y = car.position.y ; 
  //camera.position.y = obsCar1.position.y ;
 // camera.position.y = obsCar2.position.y ;

  // calling finctions

  spawnObs1() ;
  

  drawSprites();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
}


 function spawnObs1() {

  if(frameCount % 60 === 0 ){
  obstacle = createSprite ( random ( 600 , 950 ) , random ( 500 , -4000 )) ;
  var rand = Math.round(random(1,5));
  switch(rand) {
    case 1: obstacle.addImage(obs1Img);
            obstacle.scale = 0.5
            break;
    case 2: obstacle.addImage(obs2Img);
            obstacle.scale = 0.4
            break;
    case 3: obstacle.addImage(obs3Img);
            obstacle.scale = 0.9
            break;
    case 4: obstacle.addImage(obs4Img);
            obstacle.scale = 0.2 ;
            break;
    case 5: obstacle.addImage(obs5Img);
            obstacle.scale = 0.2 ;
            break;
    default: break;
  }
  

  }

 }
