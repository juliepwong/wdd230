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
// document.getElementById("date").innerHTML = date.toLocaleDateString('en-us', options);

async function getFruitData(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    loadMenu(data);
  }
  
  getFruitData(url);
  
  const loadMenu = (fruitOptions) => {
    const selectMenus = document.querySelectorAll("select");
    selectMenus.forEach((menu) => {
  
      fruitOptions.forEach((fruit) => {
        console.log(fruit.nutritions.sugar);
        const newOption = document.createElement("option");
        newOption.value=fruit.name;
        newOption.text=fruit.name;
        menu.appendChild(newOption);
  
      });
    })
  }

  const onSubmit = () => {
    const firstName = document.querySelector("#fname");
    const mail = document.querySelector("#mail");
    const number = document.querySelector("#number");
    const firstFruit = document.querySelectorAll("firstFruit");
  } 

//   W3School helped me create a click link. https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_webstorage_session //
  function clickCounter() {
    if (typeof(Storage) !== "undefined") {
      if (localStorage.clickcount) {
        localStorage.clickcount = Number(localStorage.clickcount)+1;
      } else {
        localStorage.clickcount = 1;
      }
      document.getElementById("result").innerHTML = "Number of " + localStorage.clickcount + " drink(s).";
    } else {
      document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
  }