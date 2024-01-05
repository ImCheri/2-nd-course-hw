let a = 10;
alert(a); // Выводит 10
a = 20;
alert(a);

let yearOfFirstIphone = 2007;
alert(yearOfFirstIphone);

let creatorOfJavaScript = "Brendan Eich";
alert(creatorOfJavaScript);
let num1 = 10;
let num2 = 2;

let sum = num1 + num2;
let difference = num1 - num2;
let product = num1 * num2;
let quotient = num1 / num2;

alert("Сумма: " + sum);
alert("Разность: " + difference);
alert("Произведение: " + product);
alert("Частное: " + quotient);


let base = 2;
let exponent = 5;

let result = Math.pow(base, exponent);

alert("Результат 2 в 5-й степени: " + result);

let aa = 9;
let b = 2;

let remainder = aa % b;

alert("Остаток от деления 9 на 2: " + remainder);
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

let age = prompt("Сколько вам лет?");
alert("Ваш возраст: " + age);

let user = {
  name: "John",
  age: 25,
  isAdmin: true
};
user["city of residence"] = "Москва";
user.age = 30;
delete user["city of residence"];


let info = prompt("Какую информацию хотите узнать о пользователе?");

if (info in user) {
  alert(user[info]);
} else {
  alert("Неверное свойство");
}
let name = prompt("Введите ваше имя:");
alert("Привет, " + name + "!");


