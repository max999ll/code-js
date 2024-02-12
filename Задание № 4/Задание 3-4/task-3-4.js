let userName = prompt("Введите имя");

userName = userName.trim().toLowerCase();

let userAge = prompt("Укажите Ваш возраст");
userAge = Number(userAge.trim());

alert(`Вас зовут ${userName} и вам ${userAge} лет/года`);
