// выбираем все ссылки в навигационной панели
const navLinks = document.querySelectorAll('header a');

// добавляем обработчик событий для каждой ссылки
navLinks.forEach(function(link) {
  link.addEventListener('click', function(event) {
    // отменяем стандартное поведение браузера
    event.preventDefault();

    // получаем идентификатор секции, на которую ссылается ссылка
    const sectionId = link.getAttribute('href');

    // получаем элемент секции
    const section = document.querySelector(sectionId);

    // скроллим до секции с дополнительным отступом сверху на 80 пикселей
    const sectionTop = section.getBoundingClientRect().top + window.pageYOffset - 95;
    window.scrollTo({top: sectionTop, behavior: "smooth"});
  });
});

window.addEventListener("scroll", function() {
  var navLinks = document.querySelectorAll("nav a");
  var fromTop = window.scrollY;

  navLinks.forEach(function(link) {
    var section = document.querySelector(link.hash);

    if (section.offsetTop - 95 <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {

      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Get all links with hashes
const links = document.querySelectorAll('footer a');

// Loop through each link
for (const link of links) {
  // Add click event listener to each link
  link.addEventListener('click', function(e) {
    // Prevent default behavior of clicking on the link
    e.preventDefault();

    // Get the target element's id
    const targetId = link.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);

    // Calculate the target's position from the top of the page
    const targetPosition = target.offsetTop - 95;

    // Scroll smoothly to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}

