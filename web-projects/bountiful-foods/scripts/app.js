const url = 'https://brotherblazzard.github.io/canvas-content/fruit.json';

let hamburger = document.querySelector(".hamburger-menu");
let navigator = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    navigator.classList.toggle('responsive');
});

let text = document.lastModified; 
document.getElementById("time").innerHTML = text;

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', options);