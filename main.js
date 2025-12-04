  const navBar = document.querySelector('.navbar');
  const burger = document.querySelector('.hamburger');

  burger.addEventListener('click', () => {
    navBar.classList.toggle('open');
  });