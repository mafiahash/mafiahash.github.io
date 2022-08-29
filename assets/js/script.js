$('.nav__burger').on('click', function(e) {
    e.preventDefault();
    $('.mobile__nav').toggleClass('mobile__nav_active');
  })


  let header = document.getElementById('header').classList
  let active_class = "header-active"
  
  /**
   * Слушаем событие прокрутки
   */
  window.addEventListener('scroll', e => {
    if(scrollY > 10) header.add(active_class)
    else header.remove(active_class)
  })

  let mobile_header = document.getElementById('header__mobile').classList


  window.addEventListener('scroll', e => {
    if(scrollY > 10) mobile_header.add(active_class)
    else mobile_header.remove(active_class)
  })


const openPopUp = document.getElementById('open_pop_up')
const closePopUp = document.getElementById('close_pop_up')
const PopUp = document.getElementById('pop_up')

openPopUp.addEventListener('click', function(e){
  e.preventDefault();
  PopUp.classList.add('popup__active');
})

closePopUp.addEventListener('click', function(e){
  e.preventDefault();
  PopUp.classList.remove('popup__active');
})