const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const Login = prompt("Введите логин").trim();
const Password = prompt("Введите пароль").trim();

if (Login === existedUserLogin && Password === existedUserPassword) {
  alert(`Добро пожаловать ${Login}!`);
} else {
  alert("Логин и (или) пароль введены невепно");
}
