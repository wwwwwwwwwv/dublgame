//   // Получаем элементы формы и кнопки
// const form = document.querySelector('form');
// const usernameInput = document.querySelector('#username');
// const passwordInput = document.querySelector('#password');
// const submitButton = document.querySelector('#submit');

// // Обработчик отправки формы
// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     // Получаем значения логина и пароля
//     const username = usernameInput.value;
//     const password = passwordInput.value;

//     // Проверяем правильность логина и пароля
//     if (username === 'admin' && password === 'admin123') {
//         alert('Вход выполнен успешно!');
//     } else {
//         alert('Неверный логин или пароль. Повторите попытку.');
//     }

//     // Сбрасываем значения в полях ввода
//     usernameInput.value = '';
//     passwordInput.value = '';
// });

// // Дополнительный обработчик для кнопки входа
// submitButton.addEventListener('click', function(event) {
//     form.dispatchEvent(new Event('submit'));
// });
