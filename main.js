function setup() {
   canvas=createCanvas(640,480 )
   canvas.center();
   video = createCapture(VIDEO)
   video.hide();
   tint_color ="";
}

function draw() {
    fill("red")
    rect(90,120,490,20)
    rect(40,120,20,280)
    rect(90,420,490,20)
    rect(600,120,20,280)
    fill("green")
    image(video,230,150,220,200)
    circle(50, 120 , 80)
    circle(50, 420 , 80)
    circle(600, 120 , 80)
    circle(600, 420 , 80)
}


function take_snapshot() {
    save('student.png');
}