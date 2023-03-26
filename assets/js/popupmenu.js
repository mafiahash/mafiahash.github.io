document.addEventListener('DOMContentLoaded', function() {
  var openModalBtn = document.getElementById('open-modal-btn');
  var modal = document.getElementById('modal');
  var closeBtn = document.querySelector('.close-btn');

  openModalBtn.onclick = function() {
      modal.style.display = 'block';
  }

  closeBtn.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  }
});
