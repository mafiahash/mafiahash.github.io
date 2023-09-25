document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
  
    const toggleBurgerMenu = () => {
      header.classList.toggle('burger-active');
    };
  
    burger.addEventListener('click', toggleBurgerMenu);
  
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (header.classList.contains('burger-active')) {
          toggleBurgerMenu();
        }
      });
    });
  });
  