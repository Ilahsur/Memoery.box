var video;
var button;
var capture;
var snapshots = [];
var count = 0;
var img;
var bg;
var trybg;
var cubes = [];
var pg;
var bgSound;

function preload()
  {
    bg = loadImage("stars.jpg");
    bgSound = loadSound('bgSound.mp3');
  }


function setup() {
  createCanvas(screen.width, screen.height, WEBGL);

  bgSound.setVolume(0.1);
  bgSound.play();
  bgSound.loop();
  //button.mouseOver(changemusic);

  
  capture = createCapture(VIDEO);
  capture.size(320, 240);
  capture.hide();

  button = select('#box');
  button.mousePressed(takesnap);

  pg = createGraphics(200, 200);
  pg.background(42 ,11,105);
}

function cube(x, y, z, img) {
  this.x = x;
  this.y = y;
  this.z = z;
  this.img = img;
  this.theta = 0.01;
  this.thetaspeed = 0.03;
  this.selected = false;

  cube.prototype.display = function() {

          push();
            translate(this.x, this.y, this.z);
            //texture(this.img);
            rotateY(this.theta);
            box();
          pop();

        if (!this.selected)
                {
                  if (this.theta > 100) {
                  this.theta = 0.01;
                   } else {
                   this.theta = this.theta +this.thetaspeed;
                  }
                }
    }

      // if (this.theta > 100) {
      // this.theta = 0.01;
      //   } else {
      // this.theta = this.theta + this.thetaspeed;
      //   }
  

  cube.prototype.hover = function() {
    mousexPos = mouseX- screen.width/2;
    mouseyPos = mouseY- screen.height/2;
    //mousezPos = mouseX - screen.width/2;
    if((abs(this.x-mousexPos)<50) && (abs(this.y-mouseyPos)<50))
    { 
      texture(pg);
      //console.log(mousexPos);
    } else {
      texture(this.img);
    }

  }

 };


function draw() {
  background(0);

  texture(bg);
  plane(screen.width,screen.height);
  push();
    rotateX(90);
    translate(0,-screen.height/2,0);
    plane(screen.width,screen.height);
  pop();
  push();
    rotateY(90);
    translate(0,-screen.width/2,0);
    plane(screen.width,screen.height);
  pop();

  orbitControl();

  //camera(mouseX,mouseY,mouseX);

  for (var i = 0; i < count; i++) {
    cubes[i].hover();
    cubes[i].display();
    
  } 
}



function takesnap() {
  var x = floor(random(-500, 500));
  var y = floor(random(-350, 350));
  var z = floor(random(-400, 400));
  var img = capture.get();
  cubes[count] = new cube(x, y, z, img);
  //console.log(count);
  count++;
}

function changemusic(){
  setVolume(0.2);

}
