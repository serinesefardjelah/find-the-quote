const circle = document.getElementsByClassName("circle")[0];
const body = document.getElementsByTagName("body")[0];
const btnOn = document.getElementById("on");
const btnOff = document.getElementById("off");
const hidetext = document.getElementsByClassName("hidewhite");


//Functions
function lightsOff(){
    
    body.style.backgroundColor = "black";
    circle.style.display = "block";
    btnOff.style.display="none";
    btnOn.style.display="block";
    for(var i=0; i< hidetext.length; i++){
        hidetext[i].style.display="block";
    }
    //hidetext.style.display="block";
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

// Events
btnOff.addEventListener("click", lightsOff)

btnOn.addEventListener("click", lightsOn)

window.addEventListener("mousemove", mouseCoordinations)
