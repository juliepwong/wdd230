const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

//*following the steps of the activity with Brother Blazzard's codes *//
  

async function getProphetData(url) {
  const response = await fetch(url);
  const data = await response.json();
  // console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData(url);

const displayProphets = (prophets) => {
  const cards = document.querySelector('div.cards');
  
  prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');

    h2.textContent = `${prophet.name} ${prophet.lastname}`;

    portrait.setAttribute('src', prophet.imageurl)
    portrait.setAttribute('alt', `${prophet.name} ${prophet.lastname}`)
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(portrait);

    cards.appendChild(card);
  }) //close of for each loop
}