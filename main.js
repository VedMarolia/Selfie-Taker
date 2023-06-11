var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
        document.getElementById("textbox").innerHTML=content;
    if (content=="take my selfie"){
        
        speak();
    } 
}

function speak(){
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterThis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
setTimeout(function(){
    take_Snapshot();
    save();
},5000);
    
}

Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:100
})
camera=document.getElementById("camera");

function take_Snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snap' src='"+data_uri+"'>";
    })
}

function save(){
    link=document.getElementById("link");
    image=document.getElementById("snap").src;
    link.href=image;
    link.click();
}

