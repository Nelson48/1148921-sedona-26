var formDiv = document.querySelector('.search-form-content');
// Читаем код, объявляю переменную formDiv (var formDiv), она будет являться (=) следующим. Я ищу в document селектор .search-form
var formLink = document.querySelector('.search-form-title');
// Тоже самое, ищу селектор в документа .search-form-title и засовываю в переменную formLink
// Прикольно, что переменная formLink, но там селектор заголовка)
formLink.addEventListener('click', function (evt) {
  // Навешиваем какое-то событие на кнопку, в скобках говорим, что событие клик мыши
  evt.preventDefault();
  // Тут вообще пока не пытайся понять, кусок кода говорит типа, что сбрасываем все эффекты нажатия, которые могут быть на кнопке
  formDiv.classList.toggle('vis-hidden');
  // Тоглим класс нужный. При одном нажатии будет добавляться, при другом - появляться
});

formLink.addEventListener('keydown', function (evt) {
  // Навешиваем какое-то событие на кнопку, в скобках говорим, что событие нажатие клавиши клавиатуры
  if (evt.keyCode === 27) {
    // Проверям, что есть кнопка клавиатуры - Enter, у неё свой код, 27
    formDiv.classList.toggle('vis-hidden');
    // Делаем тоже самое
  }
});

