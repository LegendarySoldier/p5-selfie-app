function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

    
}

function draw(){
    
    image(video, 225, 160, 200, 180);
    circle(50,50,100,);
    circle(590,50,100);
    circle(50,430,100);
    circle(590,430,100);
    rect(95,25,450,50);
    rect(95,405,450,50);
    rect(25,95,50,290);
    rect(565,95,50,290);
    
}

function take_snapshot(){
    save('blahblahblaaaaaaaaaaaaaaaaaaaaah.png');
}

