//let slider
//let button;
// var song

let r;
let g;
let b;


let balls = [];

let threshold = 30;
let accChangeX = 0;
let accChangeY = 0;
let accChangeT = 0;

//let s = second();

// function preload() {
//   song = loadSound('calm_lofi_smaller.mp3');
// }


function randomizeColors() {
  r = random(255);
  g = random(255);
  b = random(255);
}


function setup() {
  createCanvas(displayWidth/1.5, displayHeight/1.5);
  frameRate(30);
 // slider = createSlider(0, 1, 0.5, 0.01)
 //song.play();

 

  
  
  // slider = createSlider(0, 255, 100);
  // slider.position(10,10)
  // slider.style('width', '80px');


 

  for (let i = 0; i < 30; i++) {
    balls.push(new Ball());
  }

//   button = createButton('click me');
//   button.position(0, 0);
//   button.mousePressed(changeBG);
// }


function draw() {

  // let val = slider.value();
  // background(val);

// song.setVolume(slider.value());
 //background(0)
  for (let i = 0; i < balls.length; i++) {
    balls[i].move();
    balls[i].display();
  }


  // {
  //   let val = slider.value();
  // }
  
  checkForShake();
}

function checkForShake() {
  // Calculate total change in accelerationX and accelerationY
  accChangeX = abs(accelerationX - pAccelerationX);
  accChangeY = abs(accelerationY - pAccelerationY);
  accChangeT = accChangeX + accChangeY;
  // If shake
  if (accChangeT >= threshold) {
    for (let i = 0; i < balls.length; i++) {
      balls[i].shake();
      balls[i].turn();
    }
  }
  // If not shake
  else {
    for (let i = 0; i < balls.length; i++) {
      balls[i].stopShake();
      balls[i].turn();
      balls[i].move();
    }
  }
}

// Ball class
class Ball {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.xspeed = random(-2, 2);    //this.xspeed = random(-2, 2);  
    this.yspeed = random(-2, 2);    //this.yspeed = random(-2, 2);
    this.oxspeed = this.xspeed;
    this.oyspeed = this.yspeed;
    this.direction = 0.5;  
   
  }

  move() {
    this.x += this.xspeed * this.direction;
    this.y += this.yspeed * this.direction;
  }

  // Bounce when touch the edge of the canvas
  turn() {
    if (this.x < 0) {
      this.x = 0;
      this.direction = -this.direction;
    } else if (this.y < 0) {
      this.y = 0;
      this.direction = -this.direction;
    } else if (this.x > width - 20) {
      this.x = width - 20;
      this.direction = -this.direction;
    } else if (this.y > height - 20) {
      this.y = height - 20;
      this.direction = -this.direction;
    }
  }



  // Add to xspeed and yspeed based on
  // the change in accelerationX value
  shake() {
    this.xspeed += random(5, accChangeX / 3);
    this.yspeed += random(5, accChangeX / 3);
  }

  // Gradually slows down 
  stopShake() {
    if (this.xspeed > this.oxspeed) {
      this.xspeed -= 0.05;
    } else {
      this.xspeed = this.oxspeed;
    }
    if (this.yspeed > this.oyspeed) {
      this.yspeed -= 0.05;
    } else {
      this.yspeed = this.oyspeed;
    }
  }

  display() {
   noFill();
   strokeWeight(0.25)
   stroke(255, 0, 255);
    circle(this.x, this.y, this.diameter, this.diameter);
   
    
  }
}

  
// if (time < 2) {
//   this.xspeed = false;
//}
  

// function changeBG() {
//   let val = circle(this.x, this.y, this.diameter, this.diameter);;
//   background(val);
// }
}
