var slideCount = 0;
var x, y;

let slides = [];
slides.push("You are supportive of and enthusiastic about all my accomplishments, no matter how big or how small.",
    "...and you go to great lengths to show how proud you are of me!",
    "You take pride in providing for our family, whether it's getting something good to eat...",
    "...or having the most amazing time on vacation!",
    "No matter how tough things get, you have never given up on me, and have shown me that there is always hope for the future.",
    "You are always down to hang out, have fun, and celebrate the people you love.",
    "I know I can always count on you.",
    "HAPPY FATHER'S DAY!<br>Thank you for always being there for me!<br>I LOVE YOU!");

let fronts = [];
fronts.push("front1.jpg",
    "front2.jpg",
    "front3.jpg",
    "front5.jpg",
    "front4.jpg",
    "front7.jpg",
    "front6.jpg",
    "front8.jpg")

window.addEventListener('load', welcomeFade, false);

function welcomeFade () {
    setTimeout(function() {
        document.getElementById("box__bottom").style.visibility = "visible";
        document.getElementById("box__top").style.opacity = "0";
        document.querySelector("body").style.backgroundColor = "#2072B2";
    },10000);
    
    setTimeout(function() {
        document.getElementById("box__top").style.display = "none";
    },11000);


    setTimeout(function() {
        document.getElementById("para1").style.opacity = "1";
    },12000);

    setTimeout(function() {
        document.getElementById("para1").innerHTML = "Here are all the reasons I am blessed to call you...";
    },13000);

    setTimeout(function() {
        document.getElementById("para1").style.fontFamily = "'Rock Salt', cursive";
        document.getElementById("para1").innerHTML = "My Awesome Dad";

    },14000);

    setTimeout(function() {
        document.getElementById("para1").style.transform = "none";

    },15000);

    setTimeout(function() {
        document.getElementById("box__bottom__nav").style.opacity = "1";
    },15200);

    setTimeout(function() {
        document.getElementById("para2").style.opacity = "1";
    },15500);
}

function moveMe() {
    document.getElementById("poo").style.transition = "all 0.5s ease-out";
    x = Math.random() * 80;
    y = Math.random() * 80;
    document.getElementById("poo").style.top = x + "%";
    document.getElementById("poo").style.left = y + "%";
}

function changeForw() {
    if(slideCount == 7) {return};
    slideCount++;
    document.querySelector("#front").src = 'images/' + fronts[slideCount];
    document.getElementById("para2").innerHTML = slides[slideCount];
}

function changeBack() {
    if(slideCount == 0) {return};
    slideCount--;
    document.getElementById("front").src = 'images/' + fronts[slideCount];
    document.getElementById("para2").innerHTML = slides[slideCount];
}