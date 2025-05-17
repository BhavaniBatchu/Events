function demo(){
    console.log("hi demo"); 
}

function d1(){
    window.location.href = "https://www.google.com"
}

let b = document.body
function color1(){
    b.style.backgroundColor="red"
}

function color2(){
    b.style.backgroundColor="white"
}

function random1(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    b.style.backgroundColor=`rgb(${red},${green},${blue})`
}
let h = document.getElementById("d2")
h.onclick=()=>{
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    b.style.backgroundColor=`rgb(${red},${green},${blue})`
}