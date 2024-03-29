const album = document.querySelector('.album');
const items = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition += 300;
  if (currentPosition > 0) {
    currentPosition = -900;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${currentPosition}px)`;
  }
});

nextButton.addEventListener('click', () => {
  currentPosition -= 300;
  if (currentPosition < -900) {
    currentPosition = 0;
  }
  for (let i = 0; i < items.length; i++) {
    items[i].style.transform = `translateX(${currentPosition}px)`;
  }
});