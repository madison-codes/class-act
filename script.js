// var spriteSprite;
// function Person(properties) {
//   this.name = properties.name;
//   this.image = properties.image;
// }
//
// Person.prototype.
//
// function makePersonImg(person) {
//   var sprite = createSprite(mouseX, mouseY);
//   var img = loadImage('img/'+ person + '.png');
//   person.addImage(img);
//   adam.x = random(2, -2);
//   adam.velocity.y = random(2, -2);
// }


function setup() {
  createCanvas(screen.width,screen.height);
}

function draw() {
  background(255);

  fill(123, 231, 132);
  textAlign(RIGHT);
  // text("WE ARE AWESOME!!!!", width/2, height/2);
  //draw all the sprites added to the sketch so far
  //the positions will be updated automatically at every cycle
  drawSprites();

}

function mousePressed() {
  // Adam
  // var adam = createSprite(screen.width/2, screen.height/2);
  // var adamImg = loadImage('img/adam.png');
  // adam.addImage(adamImg);
  // adam.velocity.x = random(2, -2);
  // adam.velocity.y = random(2, -2);
  // // Andy
  // var andy = createSprite(screen.width/2, screen.height/2);
  // var andyImg = loadImage('img/andy.png');
  // andy.addImage(adamImg);
  // andy.x = random(2, -2);
  // andy.velocity.x = random(2, -2);
  // andy.velocity.y = random(2, -2);
  // // Ben
  // var andy = createSprite(screen.width/2, screen.height/2);
  // var andyImg = loadImage('img/andy.png');
  // andy.addImage(adamImg);
  // andy.velocity.x = random(2, -2);
  // andy.velocity.y = random(2, -2);
  // // Blake
  // var blake = createSprite(screen.width/2, screen.height/2);
  // var blakeImg = loadImage('img/blake.png');
  // blake.addImage(blakeImg);
  // blake.velocity.x = random(2, -2);
  // blake.velocity.y = random(2, -2);
  // // Boy-Casey
  // var boyCasey = createSprite(screen.width/2, screen.height/2);
  // var boyCaseyImg = loadImage('img/boy-casey.png');
  // boyCasey.addImage(boyCaseyImg);
  // boyCasey.velocity.x = random(2, -2);
  // boyCasey.velocity.y = random(2, -2);
  // // Brenna
  // var brenna = createSprite(screen.width/2, screen.height/2);
  // var brennaImg = loadImage('img/brenna.png');
  // brenna.addImage(brennaImg);
  // brenna.velocity.x = random(2, -2);
  // brenna.velocity.y = random(2, -2);
  // // Brett
  // var brett = createSprite(screen.width/2, screen.height/2);
  // var brettImg = loadImage('img/brett.png');
  // brett.addImage(brettImg);
  // brett.velocity.x = random(2, -2);
  // brett.velocity.y = random(2, -2);
  // // Casey
  // var casey = createSprite(screen.width/2, screen.height/2);
  // var caseyImg = loadImage('img/casey.png');
  // casey.addImage(caseyImg);
  // casey.velocity.x = random(2, -2);
  // casey.velocity.y = random(2, -2);
  // // David
  // var david = createSprite(screen.width/2, screen.height/2);
  // var davidImg = loadImage('img/david.png');
  // david.addImage(davidImg);
  // david.velocity.x = random(2, -2);
  // david.velocity.y = random(2, -2);
  // // Jeff
  // var jeff = createSprite(screen.width/2, screen.height/2);
  // var jeffImg = loadImage('img/jeff.png');
  // jeff.addImage(jeffImg);
  // jeff.velocity.x = random(2, -2);
  // jeff.velocity.y = random(2, -2);
  // // jhun
  // var jhun = createSprite(screen.width/2, screen.height/2);
  // var jhunImg = loadImage('img/jhun.png');
  // jhun.addImage(jhunImg);
  // jhun.velocity.x = random(2, -2);
  // jhun.velocity.y = random(2, -2);
  // // kirsten
  // var kirsten = createSprite(screen.width/2, screen.height/2);
  // var kirstenImg = loadImage('img/kirsten.png');
  // kirsten.addImage(kirstenImg);
  // kirsten.velocity.x = random(2, -2);
  // kirsten.velocity.y = random(2, -2);
  // // kris
  // var kris = createSprite(screen.width/2, screen.height/2);
  // var krisImg = loadImage('img/kris.png');
  // kris.addImage(krisImg);
  // kris.velocity.x = random(2, -2);
  // kris.velocity.y = random(2, -2);
  // // louisa
  // var louisa = createSprite(screen.width/2, screen.height/2);
  // var louisaImg = loadImage('img/louisa.png');
  // louisa.addImage(louisaImg);
  // louisa.velocity.x = random(2, -2);
  // louisa.velocity.y = random(2, -2);
  // // madison
  // var madison = createSprite(screen.width/2, screen.height/2);
  // var madisonImg = loadImage('img/madison.png');
  // madison.addImage(madisonImg);
  // madison.velocity.x = random(2, -2);
  // madison.velocity.y = random(2, -2);
  // // maryjane
  // var maryjane = createSprite(screen.width/2, screen.height/2);
  // var maryjaneImg = loadImage('img/maryjane.png');
  // maryjane.addImage(maryjaneImg);
  // maryjane.velocity.x = random(2, -2);
  // maryjane.velocity.y = random(2, -2);
  // // mike
  // var mike = createSprite(screen.width/2, screen.height/2);
  // var mikeImg = loadImage('img/mike.png');
  // mike.addImage(mikeImg);
  // mike.velocity.x = random(2, -2);
  // mike.velocity.y = random(2, -2);
  // // paul
  // var paul = createSprite(screen.width/2, screen.height/2);
  // var paulImg = loadImage('img/paul.png');
  // paul.addImage(paulImg);
  // paul.velocity.x = random(2, -2);
  // paul.velocity.y = random(2, -2);
  // // pete
  // var pete = createSprite(screen.width/2, screen.height/2);
  // var peteImg = loadImage('img/pete.png');
  // pete.addImage(peteImg);
  // pete.velocity.x = random(2, -2);
  // pete.velocity.y = random(2, -2);
  // // steve
  // var steve = createSprite(screen.width/2, screen.height/2);
  // var steveImg = loadImage('img/steve.png');
  // steve.addImage(steveImg);
  // steve.velocity.x = random(2, -2);
  // steve.velocity.y = random(2, -2);
  drawSprites();

  //if no image or animation is associated it will be a rectancle of the specified size
  //and a random color

  //now you can use the variable to set properties
  //e.g. a random velocity on the x and y coordinates
}

function classSprites () {
  var adam = createSprite(screen.width/2, screen.height/2);
  var adamImg = loadImage('img/adam.png');
  adam.addImage(adamImg);
  adam.velocity.x = random(2, -2);
  adam.velocity.y = random(2, -2);
  // Andy
  var andy = createSprite(screen.width/2, screen.height/2);
  var andyImg = loadImage('img/andy.png');
  andy.addImage(adamImg);
  andy.x = random(2, -2);
  andy.velocity.x = random(2, -2);
  andy.velocity.y = random(2, -2);
  // Ben
  var andy = createSprite(screen.width/2, screen.height/2);
  var andyImg = loadImage('img/andy.png');
  andy.addImage(adamImg);
  andy.velocity.x = random(2, -2);
  andy.velocity.y = random(2, -2);
  // Blake
  var blake = createSprite(screen.width/2, screen.height/2);
  var blakeImg = loadImage('img/blake.png');
  blake.addImage(blakeImg);
  blake.velocity.x = random(2, -2);
  blake.velocity.y = random(2, -2);
  // Boy-Casey
  var boyCasey = createSprite(screen.width/2, screen.height/2);
  var boyCaseyImg = loadImage('img/boy-casey.png');
  boyCasey.addImage(boyCaseyImg);
  boyCasey.velocity.x = random(2, -2);
  boyCasey.velocity.y = random(2, -2);
  // Brenna
  var brenna = createSprite(screen.width/2, screen.height/2);
  var brennaImg = loadImage('img/brenna.png');
  brenna.addImage(brennaImg);
  brenna.velocity.x = random(2, -2);
  brenna.velocity.y = random(2, -2);
  // Brett
  var brett = createSprite(screen.width/2, screen.height/2);
  var brettImg = loadImage('img/brett.png');
  brett.addImage(brettImg);
  brett.velocity.x = random(2, -2);
  brett.velocity.y = random(2, -2);
  // Casey
  var casey = createSprite(screen.width/2, screen.height/2);
  var caseyImg = loadImage('img/casey.png');
  casey.addImage(caseyImg);
  casey.velocity.x = random(2, -2);
  casey.velocity.y = random(2, -2);
  // David
  var david = createSprite(screen.width/2, screen.height/2);
  var davidImg = loadImage('img/david.png');
  david.addImage(davidImg);
  david.velocity.x = random(2, -2);
  david.velocity.y = random(2, -2);
  // Jeff
  var jeff = createSprite(screen.width/2, screen.height/2);
  var jeffImg = loadImage('img/jeff.png');
  jeff.addImage(jeffImg);
  jeff.velocity.x = random(2, -2);
  jeff.velocity.y = random(2, -2);
  // jhun
  var jhun = createSprite(screen.width/2, screen.height/2);
  var jhunImg = loadImage('img/jhun.png');
  jhun.addImage(jhunImg);
  jhun.velocity.x = random(2, -2);
  jhun.velocity.y = random(2, -2);
  // kirsten
  var kirsten = createSprite(screen.width/2, screen.height/2);
  var kirstenImg = loadImage('img/kirsten.png');
  kirsten.addImage(kirstenImg);
  kirsten.velocity.x = random(2, -2);
  kirsten.velocity.y = random(2, -2);
  // kris
  var kris = createSprite(screen.width/2, screen.height/2);
  var krisImg = loadImage('img/kris.png');
  kris.addImage(krisImg);
  kris.velocity.x = random(2, -2);
  kris.velocity.y = random(2, -2);
  // louisa
  var louisa = createSprite(screen.width/2, screen.height/2);
  var louisaImg = loadImage('img/louisa.png');
  louisa.addImage(louisaImg);
  louisa.velocity.x = random(2, -2);
  louisa.velocity.y = random(2, -2);
  // madison
  var madison = createSprite(screen.width/2, screen.height/2);
  var madisonImg = loadImage('img/madison.png');
  madison.addImage(madisonImg);
  madison.velocity.x = random(2, -2);
  madison.velocity.y = random(2, -2);
  // maryjane
  var maryjane = createSprite(screen.width/2, screen.height/2);
  var maryjaneImg = loadImage('img/maryjane.png');
  maryjane.addImage(maryjaneImg);
  maryjane.velocity.x = random(2, -2);
  maryjane.velocity.y = random(2, -2);
  // mike
  var mike = createSprite(screen.width/2, screen.height/2);
  var mikeImg = loadImage('img/mike.png');
  mike.addImage(mikeImg);
  mike.velocity.x = random(2, -2);
  mike.velocity.y = random(2, -2);
  // paul
  var paul = createSprite(screen.width/2, screen.height/2);
  var paulImg = loadImage('img/paul.png');
  paul.addImage(paulImg);
  paul.velocity.x = random(2, -2);
  paul.velocity.y = random(2, -2);
  // pete
  var pete = createSprite(screen.width/2, screen.height/2);
  var peteImg = loadImage('img/pete.png');
  pete.addImage(peteImg);
  pete.velocity.x = random(2, -2);
  pete.velocity.y = random(2, -2);
  // steve
  var steve = createSprite(screen.width/2, screen.height/2);
  var steveImg = loadImage('img/steve.png');
  steve.addImage(steveImg);
  steve.velocity.x = random(2, -2);
  steve.velocity.y = random(2, -2);
  drawSprites();
}

var intervalID = setInterval(classSprites, 5000)
