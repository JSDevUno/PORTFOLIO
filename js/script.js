const preloader = document.querySelector(".preloader");

window.addEventListener('load', () => {
    preloader.remove();
});
 const logo = document.querySelector(".logo");

 logo.style.cursor="pointer";
 logo.addEventListener('click', ()=>{
    logo.style.color="red";
    logo.style.transition=".3s";
 });

const dynamicText = document.querySelector("h1 span");
const words = ["Jeevy Seguerra", "a Student", "a Developer", "an Editor"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {      
        charIndex++;
        setTimeout(typeEffect, 80);
    } else if (isDeleting && charIndex > 0) {        
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {       
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 500);
    }
}
typeEffect();

const textArray = [
    "As a developer, I possess a unique balance, focusing ",
    "on both frontend and backend aspects in",
    "Web, GUI, and Android development."
  ];
  const speed = 15; 
  let i = 0;
  let j = 0;
  function typeWriter() {
    if (i < textArray.length) {
      if (j < textArray[i].length) {
        document.getElementById('typed-text').innerHTML += textArray[i].charAt(j);
        j++;
        setTimeout(typeWriter, speed);
      } else {
        document.getElementById('typed-text').innerHTML += '<br>'; 
        i++;
        j = 0;
        setTimeout(typeWriter, speed * 10);
      }
    }
  }
  window.onload = function() {
    typeWriter();
  };
  
