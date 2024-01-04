const preloader = document.querySelector(".preloader");

window.addEventListener('load', () => {
    preloader.remove();
});
 const logo = document.querySelector(".logo");

 logo.addEventListener('mouseover', ()=>{
    logo.style.color="red";
    logo.style.transition=".3s";
 });