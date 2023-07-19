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

async function getFruitData(url) {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.fruit);
    displayFruit(data.fruit);
  }
  
  getFruitData(url);
  
  const displayFruit = (fruit) => {
    const cards = document.querySelector('div.cards');
    
    fruit.forEach((fruit) => {
      let card = document.createElement('section');
      let genus = document.createElement('p');
      let name = document.createElement('p');
      let id = document.createElement('p');
      let family = document.createElement('p');
      let order = document.createElement('p');
      let nutritions = document.createElement('p');
  
      // console.log(fruit)
      genus.textContent = `Genus: ${fruit.genus}`;
      name.textContent = `Name: ${fruit.name}`;
      id.textContent = `ID: ${fruit.id}`;
      family.textContent = `Family: ${fruit.family}`;
      order.textContent = `Order: ${fruit.order}`;
      nutritions.textContent = `Nutritions: ${fruit.nutritions}`;
      carbohydrates.textContent = `Carbohydrates: ${fruit.carbohydrates}`;
      protein.textContent = `Protein: ${fruit.protein}`;
      fat.textContent = `Fat: ${fruit.fat}`;
      calories.textContent = `Calories: ${fruit.calories}`;
      sugar.textContent = `Sugar: ${fruit.sugar}`;
  
      card.appendChild(genus);
      card.appendChild(name);
      card.appendChild(id);
      card.appendChild(family);
      card.appendChild(order);
      card.appendChild(nutritions);
      card.appendChild(carbohydrates);
      card.appendChild(protein);
      card.appendChild(fat);
      card.appendChild(calories);
      card.appendChild(sugar);
  
      cards.appendChild(card);
    }) //close of for each loop
  }