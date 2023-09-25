document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
  
    const changeHeaderBackground = () => {
      if (window.scrollY > 20) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    };
  
    window.addEventListener('scroll', changeHeaderBackground);
  });
  