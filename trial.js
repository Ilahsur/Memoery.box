var theta = 0.01;
var video;
var button;
var snapshots = [];
var boxes = [];
var count = 0;

function setup(){
  createCanvas(200, 200, WEBGL);
  background(0);
  video = createCapture(VIDEO);
  video.size(320,240);
  
  button = createButton('snap');
  button.mousePressed(takesnap);
  // capture.hide();
}

function takesnap()
{ 
  count++;
  console.log(count);
  snapshots.push(video.get());
  if(snapshots.length>200){
    snapshots.splice(0,1);
  } 
}


// function boxe(x,y) {
//   var z =  random(-500,500);
//   this.x = x;
//   this.y = y;
//   this.z = z;


//   this.show = function()
//   {
//     push();
//     translate(this.x, this.y, this.z);
//     texture(snapshots[count]);
//     rotateY(theta);
//     box();
//     pop();
//   }
 //console.log(theta); 

//   if(theta > 100){
//     theta = 0.01;} 
//       else
//       { theta += 0.03;}


// }


function draw()
{ 
  if (frameCount%20 == 0)
  {
  takesnap();
  }

  for(var i=0;i<snapshots.length;i++)
    
  }
