noseX =0
noseY =0


function preload(){

}

function setup(){
    canvas = createCanvas(300,300)
    canvas.center()
    video = createCapture(VIDEO)
    
    video.hide()

    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotResults)
}

function draw(){
    image(video,0,0,300,300) 
}

function takeSnapshot(){
    save("downlaod.jpg")
}



function modelloaded(){
    console.log("hi")
}
function gotResults(results){

 noseX = results[0].pose.nose.x
 noseY = results[0].pose.nose.y
 righteyeX = results[0].pose.rightEye.x
 lefteyeX = results[0].pose.leftEye.x


}