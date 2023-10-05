let img;

function preload() {
  img = loadImage("js/christine-darden.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  //image(name, x, y, w, h);
  image(img, 0, 0, width, (img.height / img.width) * width);

  //get() function gets pixel data from the pixel array
  //at the coordinates
  let c = get(mouseX, mouseY);
  fill(c);
  //rect(x,y,w,h);
  rect(mouseX, mouseY, 50, 50);
  print(c);
}
