import { destinations } from './data.mjs';

const heroContainer  = document.getElementById('hero');
const cardsContainer = document.getElementById('dest-cards');
const searchInput    = document.getElementById('search');

// ---------- Utilities ----------
const rand = arr => arr[Math.floor(Math.random() * arr.length)];

const createCard = d => {
  const c = document.createElement('div');
  c.className = 'card';
  c.innerHTML = `
    <img src="${d.image}" alt="${d.name}">
    <h3>${d.headline}</h3>
    <p>${d.description}</p>
    <a href="destination.html?id=${d.id}">Read more</a>`;
  return c;
};

// ---------- Build Hero ----------
function buildHero() {
  const d = rand(destinations);
  heroContainer.innerHTML = `
    <div class="hero-img"><img src="${d.image}" alt="${d.name}"></div>
    <div class="hero-text">
      <h1>${d.headline}</h1>
      <p>${d.description}</p>
      <a class="btn primary" href="destination.html?id=${d.id}">Explore</a>
    </div>`;
}

// ---------- Build Cards ----------
function buildCards() {
  destinations.forEach(d => cardsContainer.appendChild(createCard(d)));
}

// ---------- Search Filter ----------
function filterCards(q) {
  q = q.toLowerCase();
  Array.from(cardsContainer.children).forEach(c => {
    c.style.display = c.textContent.toLowerCase().includes(q) ? '' : 'none';
  });
}

// ---------- Init ----------
buildHero();
buildCards();
searchInput.addEventListener('input', e => filterCards(e.target.value));