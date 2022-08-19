$('.nav__burger').on('click', function(e) {
    e.preventDefault();
    $('.mobile__nav').toggleClass('mobile__nav_active');
  })