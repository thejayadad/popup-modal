

let box = document.getElementById("box");
let btn = document.getElementById("btn");
let close = document.getElementById("close")


btn.onclick = function(){
    box.style.display = "block";
}

close.onclick = function (){
    box.style.display = "none";
}