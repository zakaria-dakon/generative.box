
let noiseScale=0.5;
function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  background(255);
  
  strokeWeight(0.1);
  noiseSeed(1000);
 

}

function draw() {
  // rotateX();

  noFill(); 
 
  for (let index = 0; index < 50; index++) {
   
    drawe();
  }  
}

function drawe(){
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(0);
    // line(x, mouseY+noiseVal*80, x, height);
  }
  box(mouseX,mouseY,random(mouseX,mouseY));

  stroke(0);
  

}

