function setup() {
  createCanvas(640, 640);
  background (85,55,150);
}

let dia=150



function draw() {
  background(225,55,155);
  circle(width/2, height/2, dia)
  dia=dia+10
}