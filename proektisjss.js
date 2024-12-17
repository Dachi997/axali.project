var btn = document.getElementById("mobilemenu");
var teleponisnav = document.getElementById("teleponisnav");

teleponisnav.style.left = "-100%";

btn.onclick = function(){
    if(teleponisnav.style.left == "-100%"){
        teleponisnav.style.left = "50%";
        btn.src = "images/icon-close.svg";
    }

    else{
        teleponisnav.style.left = "-100%";
        btn.src = "images/icon-hamburger.svg";
    }
}