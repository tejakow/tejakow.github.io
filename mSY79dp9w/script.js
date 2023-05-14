window.addEventListener('load', welcomeFade, false);

function welcomeFade () {
    setTimeout(function() {
        document.querySelector('#topstuff').style.opacity = "1";
        document.querySelector('#topstuff').style.transform = "scale(1)";
    },100);

    setTimeout(function() {
        document.querySelector('#topstuff p:nth-child(2)').style.transform = "scale(1)  translateY(-20px)"
    },2000)

    setTimeout(function() {
        document.querySelector('#flexy').style.opacity = "1";
        document.querySelector('#flexy').style.transform = "scale(1) translateY(-30px)";
    },4000);
}