 var car, wall;
 var speed, weight;
 var car1IMG,car2IMG,car3IMG,car4IMG,wallIMG;

function preload(){
// carIMG=loadImage("car.png")
  car1IMG=loadImage("car1.png")
  car2IMG=loadImage("car2.png")
  car3IMG=loadImage("car3.png")
  car4IMG=loadImage("car4.png")

  wallIMG=loadImage("wall.png")
}

function setup() {
  createCanvas(1500,400);
  car = createSprite(50,200,50,50);
  car.addImage(car4IMG)
	car.scale=0.4
//car.shapeColor=("white");

  wall = createSprite(1400,200,60,200);
  wall.addImage(wallIMG)
  wall.scale=0.4
  
 wall.shapeColor=(80,80,80);
 speed=random(55,90);
 weight=random(400, 1500);

  car.velocityX= speed;
 
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background("black"); 

  

 if(car.isTouching(wall)){
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX= 0;
    var deformation=(0.5 * weight * speed * speed)/22509;
    if(deformation>180){
      car.addImage(car2IMG);
          }
    if(deformation<180 && deformation>100){
      car.addImage(car3IMG)
      
    }
    if(deformation<100){
      car.addImage(car1IMG)
     // car.shapeColor=color("green")
    }
  }
}

  drawSprites();
}