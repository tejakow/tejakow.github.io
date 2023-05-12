window.addEventListener('load', welcomeFade, false);

let item1 = "You are always happy to see me and give the best hugs!";
let item2 = "I always enjoy hanging out with you, no matter what we do.";
let item3 = "...and we have the coolest memories of fun times together!";
let item4 = "You have been there to support me during all the important times.";
let item5 = "...and taught me how to be strong during tough times.";
let item6 = "You patiently listen to my rants and rambles and do your best to ease my anxiety.";
let item7 = "You have always gone above and beyond for me, and I love and admire how creative you are!";
let item8 = "You are one of the brightest people I know! I am blessed to have received part of my brain from you.";
let item9 = "And obviously you are sooooo beautiful! Glad to have gotten some of that from you too :)";
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
    },1000);

    setTimeout(function() {
        document.querySelector('#content').style.opacity = "1";
    },2000)
}

function changeDeck(hi, newPic, itemNo) {
    document.getElementById('content').style.opacity = "0";
    document.querySelector('.nav__link[data-pos="1"]').removeAttribute('data-pos');
    hi.setAttribute('data-pos', "1");
    document.querySelector('#front').style.backgroundImage = "url(" + newPic + ")"
    document.querySelector('#content').style.transition = "opacity 0.8s ease-out";

    setTimeout(function() {
        document.querySelector('#content p').textContent = itemNo;
    }, 999);

    setTimeout(function() {
        document.getElementById('content').style.opacity = "1";
    },1000);
}