//Задание 1
console.log('Привет');
console.log('Привет');

//Задание 2
for (let i = 1; i <= 5; i++) {
    console.log(i);
  }

  //Задание 3
  for (let i = 7; i <= 22; i++) {
    console.log(i);
  }
  //Задание 4
  let obj = {
    "Коля": "200",
    "Вася": "300",
    "Петя": "400"
  };
  
  for (let key in obj) {
    document.write(key + ' — зарплата ' + obj[key] + ' долларов.<br>');
  }
  //Задание 5
  let n = 1000;
let num = 0;

while (n >= 50) {
  n = n / 2;
  num++;
}

console.log(n); // Результат деления
console.log(num); // Количество итераций

//Задание 6

let firstFriday = 5; // Номер первой пятницы месяца (в данном случае пусть будет 5)

for (let day = firstFriday; day <= 31; day += 7) {
  console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}
