/*
* COMP 125 Lab 9 - Object Oriented Programming (OOP)
*/

var myObj1, myObj2, myObj3, myObj4; // global variables to hold object instances

function setup() {
  createCanvas(500, 400);
  /* 
  add lines here to create 2 new objects using the class constructor below.
  hint: use the "new" keyword with the constructor function MyClass()
  assign the result of this function to myObj1 and then to myObj2
  */
 myObj1 = new MyClass(width/2, height/2);
 myObj2 = new MyClass(300, 200);
 myObj3 = new MyClass(200, 200);
 myObj4 = new MyClass(300, 400);
 //console.log(myobj1)
}

function draw() {
  background(200, 220, 250);///Not depression gray
  // add code here to make your objects move and display on canvas
  myObj1.display();
  myObj1.move();
  myObj1.r += .04;
  myObj2.display();
  myObj2.move(); 
  myObj2.r += .01;
  myObj3.display();
  myObj3.move();
  myObj3.r += .01
  myObj4.display();
  myObj4.move();
  myObj4.r += .0;

}

//Class constructor:
function MyClass(tempX, tempY){
  
  // some basic object properties
  this.x = tempX; // assign the first argument to the x property
  this.y = tempY; // assign the second argument to the y property
  this.d = random(25, 100); //each instance will be a different size
  this.xSpeed = random (-5.0, 5.0); // each instance moves in a different direction
  this.ySpeed = random (-5.0, 5.0);
  this.color = color(random(255), random(255), random(255));
  this.good = false;
  this.r = random(TWO_PI);

  //some basic object methods
  this.move = function (){
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    
    //maybe add some code to keep it on the canvas ...
  if(this.x > width || this.x < 0){
    this.xSpeed *= -1
  }
    if(this.y > height || this.y < 0){
      this.ySpeed *= -1
    }
  }
  this.angle = function(){
    if(this.good == true){

    }
  }
  this.display = function (){
    
    push(); // create a transparency layer for the object
    translate(this.x, this.y); //shift the canvas (0,0) to the object location
    rotate(this.r);//rotate
    fill(this.color); // set the color
    ellipse(0, 0, this.d, this.d);//..Now they looke like eyeballs heh.
    fill(0)
    ellipse(0, 0, this.d/4, this.d/4);
    
    if(this.good);{
      fill("pink");
    }
    // note that when you want to use the objects properties, you need to use "this"
    // add more drawing code to make your image a little more complex

    pop(); // delete the tansparency layer after drawing the image
  }
}
