window.addEventListener('load', welcomeFade, false);

let item1 = "You are always so happy to see me!";
let item2 = "You go above and beyond for me, and are very creative!";
let item3 = "I always enjoy hanging out with you.";
let item4 = "You are beautiful :D ";
let item5 = "We have the coolest memories of fun times together!";
let item6 = "";
let item7 = "You have been there to support me through everything.";
let item8 = "You patiently listen to my rants and rambles and know what to say.";
let item9 = "You are one of the brightest people I know!";
let item10 = "Thank you for being my mom! I LOVE YOU!!";

function welcomeFade () {
    document.querySelector('#main').style.transform = 'scale(0.9)';
    setTimeout(function() {
        document.querySelector('#main').style.transition = "all 1s ease-out";
        document.querySelector('#main').style.opacity = "1";
    },1);

    setTimeout(function() {
        document.querySelector('#main').style.transform = "none";
    },100);

    setTimeout(function() {
        document.querySelector('#topstuff p:nth-child(2)').style.transform = 'scale(1)';
    },1500);

    setTimeout(function() {
        document.querySelector('#content').style.opacity = "1";
    },3000)
}

function changeDeck(hi, newPic, itemNo) {
    document.getElementById('content').style.opacity = "0";
    document.querySelector('.nav__link[data-pos="1"]').removeAttribute('data-pos');
    hi.setAttribute('data-pos', "1");
    document.querySelector('#front').style.backgroundImage = "url(" + newPic + ")"
    document.querySelector('#content').style.transition = "opacity 0.8s ease-out";

    setTimeout(function() {
        document.querySelector('#content p').textContent = itemNo;
    }, 1499);

    setTimeout(function() {
        document.getElementById('content').style.opacity = "1";
    },1500);
}