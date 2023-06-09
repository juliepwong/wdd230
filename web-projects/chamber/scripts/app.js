const url = 'https://juliepwong.github.io/wdd230/web-projects/chamber/directory/data.json';

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


// directory
async function getDirectoryData(url) {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectoru(data.directory);
}

getDirectoryData(url)

const displayDirectory = (directory) => {
  const cards = document.querySelector('div.cards');
    
  directory.forEach((directory) => {
      let image = document.createElement('img');
      let address = document.createElement('p');
      let death = document.createElement('p');
      let length = document.createElement('p');
      let order = document.createElement('p');

      image.setAttribute('src', image.imageurl)
      image.setAttribute('loading', 'lazy');
      image.setAttribute('width', '150');
      image.setAttribute('height', '300');
      
      
      place.textContent = `Place: ${directory.place}`;
      address.textContent = `Address: ${directory.address}`;
      phone.textContent = `Phone Number: ${directory.phone}`;
      website.textContent = `Website URLs: ${directory.wesite}`;
      image.textContent = `Membership Level: ${directory.image}`;
      membership.textContent = `Membership Level: ${directory.membership}`;

      card.appendChild(place);
      card.appendChild(address);
      card.appendChild(phone);
      card.appendChild(website);
      card.appendChild(image);
      card.appendChild(membership);
      })
}



