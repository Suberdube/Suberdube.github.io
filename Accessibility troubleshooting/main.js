/*
Name: Brydon Burrell
File: main.js
Date: 2025/08/02
If you read this, say hi in the comments of the assignment submission!
*/

// Elements for show/hide functionality
const showHideBtn = document.querySelector('.show-hide');
const commentWrapper = document.querySelector('.comment-wrapper');

// Hide comments section by default and set aria-expanded
commentWrapper.style.display = 'none';
showHideBtn.setAttribute('aria-expanded', 'false');

showHideBtn.onclick = function () {
  const isHidden = commentWrapper.style.display === 'none';

  if (isHidden) {
    showHideBtn.textContent = 'Hide comments';
    commentWrapper.style.display = 'block';
    showHideBtn.setAttribute('aria-expanded', 'true');
    commentWrapper.setAttribute('tabindex', '-1'); // make focusable
    commentWrapper.focus();
  } else {
    showHideBtn.textContent = 'Show comments';
    commentWrapper.style.display = 'none';
    showHideBtn.setAttribute('aria-expanded', 'false');
  }
};

// Elements for comment form
const form = document.querySelector('.comment-form');
const nameField = document.querySelector('#name');
const commentField = document.querySelector('#comment');
const list = document.querySelector('.comment-container');

// Handle form submission
form.onsubmit = function (e) {
  e.preventDefault();
  submitComment();
};

function submitComment() {
  const nameValue = nameField.value.trim();
  const commentValue = commentField.value.trim();

  // Prevent empty submissions
  if (!nameValue || !commentValue) {
    alert('Please enter both your name and a comment.');
    return;
  }

  // Create list item with accessible markup
  const listItem = document.createElement('li');
  const namePara = document.createElement('p');
  const commentPara = document.createElement('p');

  namePara.textContent = nameValue;
  namePara.classList.add('comment-author');
  commentPara.textContent = commentValue;
  commentPara.classList.add('comment-text');

  listItem.appendChild(namePara);
  listItem.appendChild(commentPara);
  list.appendChild(listItem);

  // Clear fields and refocus name input for convenience
  nameField.value = '';
  commentField.value = '';
  nameField.focus();
}
