// 书籍数据数组
const articles = [
	{
	  id: 1,
	  title: 'Septimus Heap Book One: Magyk',
	  date: 'July 5, 2022',
	  description:
		'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
	  imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
	  imgAlt: 'Book cover for Septimus Heap 1',
	  ages: '10-14',
	  genre: 'Fantasy',
	  stars: '****'
	},
	{
	  id: 2,
	  title: 'Magnus Chase Book One: Sword of Summer',
	  date: 'December 12, 2021',
	  description:
		'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
	  imgSrc:
		'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
	  imgAlt: 'Book cover for Magnus Chase 1',
	  ages: '12-16',
	  genre: 'Fantasy',
	  stars: '⭐⭐⭐⭐'
	}
  ];
  
  function renderArticles(data) {
	const container = document.getElementById('book-list');
	container.innerHTML = '';
  
	data.forEach(book => {
	  const bookView = document.createElement('div');
	  bookView.classList.add('book-view');
  
	  const ratingDiv = document.createElement('div');
	  ratingDiv.classList.add('rating');
	  ratingDiv.innerHTML = `
		<p aria-label="release date">${book.date}</p>
		<p aria-label="age rating">${book.ages}</p>
		<p aria-label="genre">${book.genre}</p>
		<p aria-label="rating">${book.stars}</p>
	  `;
  
	  const reviewDiv = document.createElement('div');
	  reviewDiv.classList.add('review');
	  reviewDiv.innerHTML = `
		<h3>${book.title}</h3>
		<div class="book-image">
		  <img src="${book.imgSrc}" alt="${book.imgAlt}">
		</div>
		<p>${book.description}</p>
	  `;
  
	  bookView.appendChild(ratingDiv);
	  bookView.appendChild(reviewDiv);
	  container.appendChild(bookView);
	});
  }
  
  window.addEventListener('DOMContentLoaded', () => {
	renderArticles(articles);
  });