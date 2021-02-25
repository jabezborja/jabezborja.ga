const navigation_home = document.getElementById('navbar-nav');

document.addEventListener("scroll", function(){
    var scrollY = window.scrollY;
    
    // NAVIGATION ANIMATION TRANSPARENCY \\
    if (scrollY >= 60){
        navigation_home.classList.add('transparent');
        if (navigation_home.classList.contains('show-color')){
            navigation_home.classList.remove('show-color');
        }
    }else{
        navigation_home.classList.remove('transparent');
        navigation_home.classList.add('show-color');
    }
})

// FOR TITLE TYPING \\
const typedTextSpan = document.querySelector('.typed-text');
const iLoveyouToo = document.querySelector('.button-contact');
const typing = document.getElementById('title-text')

const textArray = ["Jabez Borja", "a student", "a gamer", "a computer enthusiast", "a software developer", "a web developer"]
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typing.classList.add('typing')
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        typing.classList.remove('typing')
        setTimeout(erase, 2000);
    }
}

function erase() {
    if(charIndex > 0){
        typing.classList.add('typing')
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
        charIndex--;
        setTimeout(erase, 75)
    }else {
        textArrayIndex++;
        if(textArrayIndex>=textArray.length) textArrayIndex = 0;
        setTimeout(type, 100)
    }
}

document.addEventListener("DOMContentLoaded", function() {
    typing.classList.remove('typing')
    setTimeout(type, 500);
})


