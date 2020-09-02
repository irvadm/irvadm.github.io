/* Image changer */
let myImage = document.querySelector('img');
myImage.onclick = function () {
  let src = myImage.getAttribute('src');
  if (src === 'images/logo.png') {
    myImage.setAttribute('src', 'images/logo2.png');
  } else {
    myImage.setAttribute('src', 'images/logo.png');
  }
}

/* Adding a personalized welcome message */
let btn = document.querySelector('button');
let heading = document.querySelector('h1');

function setUsername() {
  let name = prompt('Please enter your name.');
  if (!name) {
    setUsername();
  } else {
    localStorage.setItem('name', name);
    heading.innerHTML = 'Python is cool, ' + name;
  }
}

if (!localStorage.getItem('name')) {
  setUsername();
} else {
  let storedName = localStorage.getItem('name');
  heading.textContent = 'Python is cool, ' + storedName;
}

btn.onclick = function () {
  setUsername();
}