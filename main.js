
noseX=0;
noseY=0;

function preload(){
  clown_nose=loadImage('https://i.postimg.cc/fTFcdQZ7/m.png');
    
}

function setup(){
canvas=createCanvas(350,350);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw(){
 image(video,0,0,350,350);
  image(clown_nose,noseX,noseY,100,40);
}

function take_snapshot(){
save('myFilterImage.png');
}

function modelLoaded(){
    console.log("poseNet loaded");
}

function gotPoses(results){
  /* if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x + 5;
        noseY = results[0].pose.nose.y + 7;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
/
        
    }*/

    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x +-28;
        noseY = results[0].pose.nose.y +40 ;
        console.log("nose x =" + noseX);
        console.log("nose y =" + noseY);
    }
}