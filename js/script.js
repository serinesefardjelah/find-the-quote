const circle = document.getElementsByClassName("circle")[0];
const body = document.getElementsByTagName("body")[0];
const btnOn = document.getElementById("on");
const btnOff = document.getElementById("off");
const hidetext = document.getElementsByClassName("hidewhite");
const result = document.getElementById("result");
const submit = document.getElementById("submit");
const mySound = document.getElementById("sound");
const balcont = document.getElementById("balloon-container");
const p = document.getElementsByTagName("p")
  

//Functions
function check(){
    if(Theresult == "It is during our darkest moments that we must focus to see the light."){
        alert("you are right");
    
    }
    else{
        alert("you are wrong");
    }
}
function lightsOff(){
    
    body.style.backgroundColor = "black";
    circle.style.display = "block";
    btnOff.style.display="none";
    
    btnOn.style.display="block";
    
    for(var i=0; i< hidetext.length; i++){
        hidetext[i].style.display="inline";
    }
    
}

function lightsOn(){
    body.style.backgroundColor = "white";
    circle.style.display = "none";
    btnOn.style.display="none";
    btnOff.style.display="block";
    for(var i=0; i< hidetext.length; i++){
        hidetext[i].style.display="none";
    }
    

}

function mouseCoordinations(e){
    circle.style.top = e.clientY +"px";
    circle.style.left = e.clientX +"px";
}

function validate(){
    let x = document.forms["Form"]["result"].value;
    if (x == "It's during our darkest moments that we must focus to see the light"){
        mySound.play();

        balcont.style.display = "flex";
        createBalloons(100);
          
        alert("congratulations");
        
        return false;
    }
    else{
        alert("you are wrong");
    }
}
function random(num) {
    return Math.floor(Math.random()*num)
  }
  
  function getRandomStyles() {
    var r = random(255);
    var g = random(255);
    var b = random(255);
    var mt = random(200);
    var ml = random(50);
    var dur = random(5)+5;
    return `
    background-color: rgba(${r},${g},${b},0.7);
    color: rgba(${r},${g},${b},0.7); 
    box-shadow: inset -7px -3px 10px rgba(${r-10},${g-10},${b-10},0.7);
    margin: ${mt}px 0 0 ${ml}px;
    animation: float ${dur}s ease-in infinite
    `
  }
  
  function createBalloons(num) {
    var balloonContainer = document.getElementById("balloon-container")
    for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();           balloonContainer.append(balloon);
    }
  }
  
// Events
btnOff.addEventListener("click", lightsOff)

btnOn.addEventListener("click", lightsOn)

window.addEventListener("mousemove", mouseCoordinations)
check();


