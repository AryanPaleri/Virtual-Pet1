//Create variables here

var dog, happyDog, database, foodS, foodStock;

function preload()
{
  
  dogImg = loadImage("images/Dog.png");
  happyDogImg = loadImage("images/happydog.png");
  

}

function setup() {
	createCanvas(500, 500);
  dogSprite = createSprite(200,100,);
  dogSprite.addImage(dogImg)

  happyDogSprite = createSprite();
  happyDogSprite.addImage(happyDogImg);


  foodStock = database.ref('food');
  foodStock.on("value",readStock);


}


function draw() {  

  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy);
  }
  
  //function to read values from DB
  function readStock(data){
    foodS=data.val();
  }

  //function to write values in DB
  function writeStock(x){

    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }

    database.ref('/').update({
      food:x
    }

    )
  }

  drawSprites();

  textSize(50);
    text("Note:Press UP_ARROW KEY to feed Drago milk", 120, 100)
  //add styles here

}



