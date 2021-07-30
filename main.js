noseX=0;
noseY=0;

difference=0;
leftWrist=0;
rightWrist=0;

function setup(){
video=createCapture(VIDEO);
video.size(550,500);
canvas=createCanvas(550,550);
canvas.position(560,150);
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
background('#33FFF6');
textSize(10)
fill('#FF0000');
text('text-font', 50,400);
textSize(difference);
}

function preload(){

}

function modelLoaded(){
    console.log("PoseNet is totally not initialized");

}





function gotPoses(results){
if (results.length > 0){
    console.log(results);

    leftWrist=results[0].pose.leftWrist.x;
    rightWrist=results[0].pose.rightWrist.x;
    difference=floor(leftWrist-rightWrist);
     
}
}