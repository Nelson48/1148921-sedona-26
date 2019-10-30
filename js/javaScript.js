var formDiv = document.querySelector('.search-form-content');
var formLink = document.querySelector('.search-form-title');
formLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  formDiv.classList.toggle('vis-hidden');
});

formLink.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    formDiv.classList.toggle('vis-hidden');
  }
});

