var ohio = "";
var right_wristY = "";
var left_wristY = "";
var right_wristX = "";
var left_wristX = "";
var score_left_wrist = "";
var score_right_wrist = "";

function preload() {
 ohio = loadSound("video(1).mp3");
}
function setup() {
canvas = createCanvas(700,500);
canvas.position(500,250);
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotResults);
}
function draw() {
image(video,0,0,700,500);
fill("#FF0000");
stroke("#FF0000");
if(score_right_wrist >0.2){
circle(right_wristX,right_wristY,30);
if(right_wristY>0 && right_wristY<=100){
    ohio.rate(0.5);
    document.getElementById("hello").innerHTML = "Speed : 0.5";
    }
if(right_wristY>100 && right_wristY<=200){
    ohio.rate(1.0);
    document.getElementById("hello").innerHTML = "Speed : 1.0";
    }
if(right_wristY>200 && right_wristY<=300){
    ohio.rate(1.5);
    document.getElementById("hello").innerHTML = "Speed : 1.5";
    }
if(right_wristY>300 && right_wristY<=400){
    ohio.rate(2.0);
    document.getElementById("hello").innerHTML = "Speed : 2.0";
    }
if(right_wristY>400 && right_wristY<=500){
    ohio.rate(2.5);
    document.getElementById("hello").innerHTML = "Speed : 2.5";
    }
}
if(score_left_wrist > 0.2) {
circle(left_wristX,left_wristY,30);
a1 = Number(left_wristY);
a2 = floor(a1);
volume = a2/500;
document.getElementById("hi").innerHTML = "Volume : " + volume;
ohio.setVolume(volume);
}

}
function play() {
 ohio.play();
 ohio.setVolume(1);
 ohio.rate(1);
}
function modelLoaded() {
    console.log("Stomach paining thing. Very DANJORUS!!");
}
function gotResults(results) {
    if(results.length>0) {
        console.log(results);
        right_wristX = results[0].pose.rightWrist.x;
        right_wristY = results[0].pose.rightWrist.y;
        left_wristX = results[0].pose.leftWrist.x;
        left_wristY = results[0].pose.leftWrist.y;
        console.log("Hello",right_wristX);
        console.log("Hola",left_wristX);
        console.log("Vanakkam",right_wristY);
        console.log("Namaskar",left_wristY);
        score_left_wrist = results[0].pose.keypoints[9].score;
        console.log("Bye",score_left_wrist)
        score_right_wrist = results[0].pose.keypoints[9].score;
        console.log("No",score_right_wrist)
    }
}