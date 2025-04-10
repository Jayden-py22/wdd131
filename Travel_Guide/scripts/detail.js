import { destinations } from './data.mjs';

const params = new URLSearchParams(window.location.search);
const id     = params.get('id');
const dest   = destinations.find(d => d.id === id);
const detail = document.getElementById('detail');

if (dest) {
  const highlightsHTML = dest.highlights
    ? `<section class="details">
         <h2>Highlights</h2>
         <ul>${dest.highlights.map(h => `<li>${h}</li>`).join('')}</ul>
       </section>`
    : '';

  const galleryHTML = dest.extraImages
    ? `<section class="gallery">
         ${dest.extraImages.map(img => `<img src="${img}" alt="${dest.name} view">`).join('')}
       </section>`
    : '';

  detail.innerHTML = `
    <section class="hero">
      <div class="hero-img"><img src="${dest.image}" alt="${dest.name}"></div>
      <div class="hero-text">
        <h1>${dest.headline}</h1>
        <p>${dest.description}</p>
      </div>
    </section>
    ${highlightsHTML}
    ${galleryHTML}`;
} else {
  detail.innerHTML = '<p style="padding:2rem">Destination not found.</p>';
}