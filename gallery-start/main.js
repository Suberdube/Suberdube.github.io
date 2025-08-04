/*
	Name: Brydon Burrell
	File: gallery-start/main.js
	Date: 2025/08/01
  This is a image gallery example
*/


// variable declarations
const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const imageFilenames = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];
/* Declaring the alternative text for each image file */
const altText = {
  'pic1.jpg': 'Closeup of a blue human eye',
  'pic2.jpg': 'Rock that looks like a wave',
  'pic3.jpg': 'Purple and white pansies',
  'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
  'pic5.jpg': 'Large moth on a leaf'
};
/* Looping through images */
for (const filename of imageFilenames) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', `images/${filename}`);
  newImage.setAttribute('alt', altText[filename]);
  thumbBar.appendChild(newImage);

  // When thumbnail is clicked, update main image
  newImage.addEventListener('click', () => {
    displayedImage.setAttribute('src', `images/${filename}`);
    displayedImage.setAttribute('alt', altText[filename]);
  });
}


const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
  if (btn.classList.contains('dark')) {
    btn.classList.remove('dark');
    btn.classList.add('light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.classList.remove('light');
    btn.classList.add('dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});