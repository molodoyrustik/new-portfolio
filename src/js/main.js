const authButton = document.querySelector('#auth-button');
authButton.addEventListener('click', (e) => {
  e.preventDefault();
  const flipCardInner = document.querySelector('.flip-card__inner');
  authButton.classList.add('hide');
  flipCardInner.classList.add('flip-card__inner--active');

  const goToMainButton = document.querySelector('#go-to-main');
  goToMainButton.addEventListener('click', (e) => {
    e.preventDefault();
    authButton.classList.remove('hide');
    flipCardInner.classList.remove('flip-card__inner--active');
  })
})