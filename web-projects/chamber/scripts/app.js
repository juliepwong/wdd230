let text = document.lastModified; 
document.getElementById("time").innerHTML = text;

const date = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', options);

//if today is monday or tuesday get banner and show grid//

if (date.getDay() === 1 || date.getDay() === 2) {
    banner = document.getElementById("banner");
    banner.style.display = "flex";
}

// responsive hamburger menu functionality

let hamburger = document.querySelector(".hamburger-menu");
let navigator = document.querySelector("nav");

hamburger.addEventListener('click', () => {
    navigator.classList.toggle('responsive');
});

