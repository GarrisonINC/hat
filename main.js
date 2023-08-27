hatX=0;
hatY=0;

function preload(){
Hat=loadImage("Hat.png")
}

function setup() {
canvas= createCanvas(400,400);
canvas.center();
video= createCapture(VIDEO);
video.size(400,400);
video.hide();
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotPoses);
}

function draw(){
image(video,0,0,400,400);
image(Hat,hatX,hatY,150,150);
}

function take_snapshot() {
save("snap.png");
}

function modelLoaded() {
    console.log("The model has been loaded");
}

function gotPoses(results) {
    if(results.length>0) {
        console.log(results);
        hatX=results[0].pose.nose.x-70;
        console.log("noseX="+hatX);
        hatY=results[0].pose.nose.y-170;
        console.log("noseY="+hatY);
    }
else{
    console.log("error")
}

}








