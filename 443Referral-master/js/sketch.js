let mic

function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

mic = new p5.AudioIn();
mic.start();


function draw() {
    background(220);

    fill(255, 255, 255);
    ellipse(400, 400, 200);

}