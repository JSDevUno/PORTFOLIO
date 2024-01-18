//FOR PRE-LOADER
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
//FOR NAVBAR
window.addEventListener('scroll', function() {
    const navi = document.querySelector('nav');
    const scrolled = window.scrollY;
  
    if (scrolled) {
      navi.style.borderBottom = '1px solid white';
      navi.style.transition = '.3s';
      navi.style.backdropFilter = 'blur(5px)';
    } else {
      navi.style.borderBottom = '2px solid transparent';
      navi.style.backdropFilter = 'none';
    }
  });
  const sidenav = document.querySelector(".sidenav");

  function opennav(){
      sidenav.style.right = "0";
  }
  function closenav(){
      sidenav.style.right = "-200px";
  }
//FOR FACE GLITCH ANIMATION
const images = document.querySelectorAll('.face1 img');
let currentIndex = 0;
let slideshowInterval;

function showNextImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');

  if (currentIndex === 0) {
    clearInterval(slideshowInterval);
    setTimeout(() => {
      startSlideshow(); 
    }, 2000);
  }
}
function startSlideshow() {
  slideshowInterval = setInterval(showNextImage, 100); 
}
setTimeout(() => {
  startSlideshow(); 
}, 1  000);

//FOR TEXT REPEAT
const dynamicText = document.querySelector("h1 span");
const words = ["Jeevy B. Seguerra", "a Student", "a Developer", "a Freelancer", "an Editor"];

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
//FOR TEXT WRITER
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
//FOR SKILLS WRITER
  const text = document.querySelector('.desc');
    const textContent = text.innerHTML;
    text.innerHTML = '';

    let x = 0;
    function type() {
      if (x < textContent.length) {
        text.innerHTML += textContent.charAt(x);
        x++;
        setTimeout(type, 70);
      }
    }

    window.onscroll = function() {
      type();
    };
//FORM VALIDATION
function validateForm() {
  document.getElementById('name').classList.remove('invalid-input');
  document.getElementById('subject').classList.remove('invalid-input');
  document.getElementById('email').classList.remove('invalid-input');
  document.getElementById('message').classList.remove('invalid-input');

  var name = document.getElementById('name').value;
  var subject = document.getElementById('subject').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;
  if (name === '') {
      alert('Please enter your name');
      document.getElementById('name').classList.add('invalid-input');
      return false;
  }
  if (subject === '') {
      alert('Please enter the subject');
      document.getElementById('subject').classList.add('invalid-input');
      return false;
  }
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      document.getElementById('email').classList.add('invalid-input');
      return false;
  }
  if (message === '') {
      alert('Please enter your message');
      document.getElementById('message').classList.add('invalid-input');
      return false;
  }
  return true;
}
//LIGHTBOX GALLERY
function lightbox(imagePath) {
  
  var overlay = document.createElement("div");
  overlay.className = "lightbox-overlay";

  var container = document.createElement("div");
  container.className = "lightbox-container";

  var image = document.createElement("img");
  image.src = imagePath;
  image.alt = "Lightbox Image";
  image.className = "lightbox-image";

  container.appendChild(image);
  overlay.appendChild(container);
  document.body.appendChild(overlay);

  overlay.style.display = "flex";

  overlay.onclick = function() {
      overlay.style.display = "none";
  };
}