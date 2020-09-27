var bullet,bullet2,bullet3,bullet4,wall1,wall2,wall3,wall4,fixedRect;
var speed,weight;
var line1, line2, line3;
var deformation;

function setup() {
  createCanvas(1400,500);

  //speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //bullets
  bullet = createSprite(100, 100, 10, 10);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  bullet2 = createSprite(100, 200, 10, 10);
  bullet2.shapeColor = "yellow";
  bullet2.velocityX = speed;

  bullet3 = createSprite(100, 300, 10, 10);
  bullet3.shapeColor = "red";
  bullet3.velocityX = speed;

  bullet4 = createSprite(100, 400, 10, 10);
  bullet4.shapeColor = "lightGreen";
  bullet4.velocityX = speed;

  //walls
  wall = createSprite(1300,100,30,60);
  wall.shapeColor = "grey"; 

  wall2 = createSprite(1300,200,30,60);
  wall2.shapeColor = "grey";
  
  wall3 = createSprite(1300,300,30,60);
  wall3.shapeColor = "grey";

  wall4 = createSprite(1300,400,30,60);
  wall4.shapeColor = "grey";

  //lines
  line1 = createSprite(1, 350, 2900,5);
  line1.shapeColor = "white";

  line2 = createSprite(1, 250, 2900,5);
  line2.shapeColor = "white";

  line3 = createSprite(1, 150, 2900,5);
  line3.shapeColor = "white";

  

}

function draw() {
  background(80,80,80);

  if (wall.x-bullet.x < (bullet.width+wall.width)/2) {
    bullet.velocityX = 0;
      var deformation=0.5 * weight * speed* speed/22509;
      if (deformation>180) {
        bullet.shapeColor=color(255,0,0);
        } 
       
        if (deformation<180 && deformation>100) {
          bullet.shapeColor=color(230,230,0);
        } 
  
        if (deformation<100) {
          bullet.shapeColor=color(0,255,0);
        }
      }
    
  
      if (wall2.x-bullet2.x < (bullet2.width+wall2.width)/2) {
        bullet2.velocityX = 0;
        var deformation=0.5 * weight * speed* speed/22509;
        if (deformation>180) {
          bullet2.shapeColor=color(255,0,0);
        } 
        
        if (deformation<180 && deformation>100) {
          bullet2.shapeColor=color(230,230,0);
        } 
  
        if (deformation<100) {
          bullet2.shapeColor=color(0,255,0);
        }
      }
    
  
  if (wall3.x-bullet3.x < (bullet3.width+wall3.width)/2) {
    bullet3.velocityX = 0;
    var deformation=0.5 * weight * speed* speed/22509;
    if (deformation>180) {
      bullet3.shapeColor=color(255,0,0);
    } 
     
    if (deformation<180 && deformation>100) {
      bullet3.shapeColor=color(230,230,0);
    } 
    if (deformation<100) {
      bullet3.shapeColor=color(0,255,0);
  }
}


if (wall4.x-bullet4.x < (bullet4.width+wall4.width)/2) {
  bullet4.velocityX = 0;
  var deformation=0.5 * weight * speed* speed/22509;
  if (deformation>180) {
    bullet4.shapeColor=color(255,0,0);
  } 
   
  if (deformation<180 && deformation>100) {
    bullet4.shapeColor=color(230,230,0);
  } 

  if (deformation<100) {
    bullet4.shapeColor=color(0,255,0);
  }
}

if (bullet.isTouching(wall)) {
    bullet.velocityX = 0;
    bullet.x = 1275;
    bullet.y = 100;
}

if (bullet2.isTouching(wall2)) {
  bullet2.velocityX = 0;
  bullet2.x = 1275;
  bullet2.y = 200;
}

if (bullet3.isTouching(wall3)) {
  bullet3.velocityX = 0;
  bullet3.x = 1275;
  bullet3.y = 300;
}

if (bullet4.isTouching(wall4)) {
  bullet4.velocityX = 0;
  bullet4.x = 1275;
  bullet4.y = 400;
}

  drawSprites();
}