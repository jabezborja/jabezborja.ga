const navigation_home = document.getElementById('navbar-nav');

// document.addEventListener("scroll", function(){
//     var scrollY = window.scrollY;
    
//     const sticked = document.getElementById("sticked");
//     const pyfyre_sticker = document.getElementById("pyfyre-sticker");
//     const pyfyre_image = document.getElementById("pyfyre-image");

//     if (scrollY >= 700) {
//         sticked.appendChild(pyfyre_image);
//     } else {
//         pyfyre_sticker.appendChild(pyfyre_image);
//     }
// })

// FOR TITLE TYPING \\
const typedTextSpan = document.querySelector('.typed-text');
const typing = document.getElementById('title-text')

const textArray = ["Jabez."]
let textArrayIndex = 0;
let charIndex = 0;

function type(){
    if(charIndex < textArray[textArrayIndex].length){
        typing.classList.add('typing')
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
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


// Fixed
