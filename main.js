

prediction1 = "";
prediction2 = "";

Webcam.set({
    width :350 ,
    height :300,
    image_format : "png",
png_quality : 90 
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id='capturedPic' src='"+data_uri+"'>'";
    });
}

console.log(ml5.version);

classifier = ml5.imageClassifier ("https://teachablemachine.withgoogle.com/models/yMVduvp5F/model.json/",modelloaded);

function modelloaded(){
    console.log("modelloaded is loaded");
}

function speech(){
speaker = window.speechSynthesis;
speak_data_1 = " The first prediction is " + prediction1;
speak_data_2 = " The second prediction is " + prediction2;
utterThis = new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
 speaker.speak(utterThis);
}

function gestureCheck(){
    img = document.getElementById("capturedPic");
    classifier.classify(img,gotResult);
    }
    function gotResult(error,result){
        if(error){ 
            console.log(error) ;
        }
        else{
    console.log(result);
    document.getElementById("result_gesture_name").innerHTML = result[0].label;
    document.getElementById("result_gesture_name2").innerHTML = result[1].label;
    
    prediction1 = result[0].label ; 
    prediction2 = result[1].label ;
    
    speech() ;
    
    if(result[0].label == "Victory"){
        document.getElementById("gesture_p").innerHTML = "&#9996";
    }
    
    if(result[0].label == "Best"){
        document.getElementById("gesture_p").innerHTML = "&#128077";
    }
    
    if(result[0].label == "Ok"){
        document.getElementById("gesture_p").innerHTML = "&#128076";
    }
    
    
    if(result[1].label == "Victory"){
        document.getElementById("gesture2_p").innerHTML = "&#9996";
    }
    
    if(result[1].label == "Best"){
        document.getElementById("gesture2_p").innerHTML = "&#128077";
    }
    
    if(result[1].label == "Ok"){
        document.getElementById("gesture2_p").innerHTML = "&#128076";
    }
    
        }
    
    }
    
    
    