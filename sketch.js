var  groundImage;
 var catImage1,catImage2,catImage3; 
  var mouseImage1,mouseImage2,mouseImage4;



  function preload() {
groundImage = loadImage("garden.png");
catImage1 = loadImage("cat1.png");
catImage2 = loadAnimation("cat2.png","cat3.png");

catImage3= loadAnimation("cat4.png");
mouseImage1 = loadImage("mouse1.png");
 mouseImage2= loadAnimation("mouse2.png","mouse3.png");
mouseImage4 = loadImage("mouse4.png");


}

function setup(){
    createCanvas(1000,800);
 
cat =  createSprite(870,600);   
cat .addImage(catImage1);
cat.scale=0.2

jerry =  createSprite(70,700);   
jerry .addImage(mouseImage1);
jerry.scale=0.15



}



function draw() {

    background(groundImage)
    
    
    
    
   

if(cat.x - jerry.x < (cat.width - jerry.width)/ 2 ){

cat .velocityX=0
cat .addAnimation(catImage2)
cat .x= 300
cat . scale = 0.15
cat .changeAnimation("catLastImage")
cat .addAnimation("catLastImage",catImage3)

jerry .changeAnimation("jerryLastImage")
jerry.addAnimation("jerryLastImage",mouseImage4)


}



    drawSprites();
}


function keyPressed(){
if(keyCode=== LEFT_ARROW){
cat .velocityX=-5
cat . scale = 0.15

cat .changeAnimation("catRunning")
cat .addAnimation("catRunning",catImage2)

jerry .changeAnimation("jerryRunning")
jerry.addAnimation("jerryRunning",mouseImage2)
jerry.framedDelay=255


}
  

}
