const featuredArtists = [
  {
    name: 'Machine Gun Kelly',
    picture: '../multimedia/mgk.png',
    description: 'Delivering lyrics with the speed of a bullet train, Cleveland rapper Machine Gun Kelly experienced a meteoric rise in late 2011.',
    genre: 'Rap, Pop/rock, Punk',
  },
  {
    name: 'Green Day',
    picture: '../multimedia/greenday.png',
    description: 'One of the most celebrated and successful bands in the world. Snarling, energetic, and highly melodic brand of pop-punk.',
    genre: 'Pop/rock, Punk',
  },
  {
    name: 'Bruce Springsteen',
    picture: '../multimedia/bruce.png',
    description: 'American singer, songwriter, and bandleader who became the archetypal rock performer of the 1970s and \'80s.',
    genre: 'Heartland rock, Americana',
  },
  {
    name: 'Taylor Swift',
    picture: '../multimedia/tay.png',
    description: 'Multi-Grammy award-winning American singer-songwriter who became the youngest artist in history to win the Grammy Award for Album of the Year.',
    genre: 'Pop, Country, Indie',
  },
  {
    name: 'Martin Garrix',
    picture: '../multimedia/martin.png',
    description: 'Topping DJ rank lists in the late 2010s, Garrix has remained a global club favorite, climbing the charts with high-profile crossover collaborations. ',
    genre: 'Electronic, House, EDM',
  },
  {
    name: 'Lasso',
    picture: '../multimedia/lasso.png',
    description: 'Latin Grammy nominee for Best New Artist 2021.Winner Pop Rock Artist of the Year at Premios Heat 2015.',
    genre: 'Pop-rock, flamanco',
  },
];

const hmgIcon = document.querySelector('.hmg-menu');
const overlayMenu = document.querySelector('.overlay-menu');

hmgIcon.addEventListener('click', () => {
  hmgIcon.classList.toggle('active');
  overlayMenu.classList.toggle('active');
});

document.querySelectorAll('.link').forEach((n) => n
  .addEventListener('click', () => {
    hmgIcon.classList.remove('active');
    overlayMenu.classList.remove('active');
    overlayMenu.style.display = 'none';
  }));

const featuredSection = document.querySelector('#featured-artists');
const artistContainer = document.createElement('div');
artistContainer.classList.add('a-container');

function createCard(section) {
  const artistCard = document.createElement('article');
  artistCard.classList.add('artist-card');
  artistContainer.appendChild(artistCard);

  const picture = document.createElement('img');
  picture.classList.add('artist-img');
  picture.setAttribute('src', section.picture);
  picture.setAttribute('alt', 'Artist thumbnail');
  artistCard.appendChild(picture);

  const artistContent = document.createElement('div');
  artistContent.classList.add('artist-content');
  artistCard.appendChild(artistContent);

  const artistName = document.createElement('h3');
  artistName.classList.add('artist-name');
  artistName.textContent = section.name;
  artistContent.appendChild(artistName);

  const artistGenre = document.createElement('span');
  artistGenre.classList.add('a-genre');
  artistGenre.textContent = section.genre;
  artistContent.appendChild(artistGenre);

  const pText = document.createElement('p');
  pText.classList.add('desc-p');
  pText.textContent = section.description;
  artistContent.appendChild(pText);

  artistContainer.appendChild(artistCard);
}

window.addEventListener('load', () => {
  if (document.title === 'Nova Frazu\'s 2022 Summer Festival') {
    featuredSection.appendChild(artistContainer);
    featuredArtists.forEach(createCard);
  }
});
