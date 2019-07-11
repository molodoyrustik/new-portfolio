module.exports = () => {
  const authButton = document.querySelector('#auth-button');
  if (authButton) {
    const flipCardInner = document.querySelector('.flip-card__inner');
    authButton.addEventListener('click', (e) => {
      e.preventDefault();
      
      authButton.classList.add('hide');
      flipCardInner.classList.add('flip-card__inner--active');
    
      const goToMainButton = document.querySelector('#go-to-main');
      goToMainButton.addEventListener('click', (e) => {
        e.preventDefault();
        authButton.classList.remove('hide');
        flipCardInner.classList.remove('flip-card__inner--active');
      })
    })
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.flip-card') && !e.target.closest('.welcome__auth-btn')) {
        authButton.classList.remove('hide');
        flipCardInner.classList.remove('flip-card__inner--active');
      }
    })  
  }
};
