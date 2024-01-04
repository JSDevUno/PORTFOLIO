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