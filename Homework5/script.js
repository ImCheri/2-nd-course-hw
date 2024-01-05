//Задание 1
function minNumber(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

// Примеры использования:
let result11 = minNumber(8, 4);
let result22 = minNumber(6, 6);

console.log(result11);  // Выведет 4
console.log(result22);  // Выведет 6

//Задание 2
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

// Примеры использования:
let result1 = checkEvenOdd(8);
let result2 = checkEvenOdd(7);

console.log(result1);  // Выведет 'Число четное'
console.log(result2);  // Выведет 'Число нечетное'

//Задание 3
function printSquare(num) {
    console.log(num * num);
}

// Пример использования:
printSquare(5); // Выведет 25 в консоль

function returnSquare(num) {
    return num * num;
}

// Пример использования:
let result = returnSquare(6);
console.log(result); // Выведет 36 в консоль

//Задание 4

function checkAgeAndGreet() {
    let age = prompt('Сколько вам лет?');

    if (age < 0) {
        console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
        console.log('Привет, друг!');
    } else {
        console.log('Добро пожаловать!');
    }
}

// Пример использования:
checkAgeAndGreet();


//Задание 5
function multiplyNumbers(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    } else {
        return num1 * num2;
    }
}

// Пример использования:
console.log(multiplyNumbers(5, 10)); // Выведет 50 в консоль
console.log(multiplyNumbers('a', 10)); //  Выведет 'Одно или оба значения не являются числом' в консоль
console.log(multiplyNumbers(7, 'b')); //  Выведет 'Одно или оба значения не являются числом' в консоль
console.log(multiplyNumbers('x', 'y')); //  Выведет 'Одно или оба значения не являются числом' в консоль

//Задание 6
function cubeNumber() {
    let number = prompt('Введите число:');
    if (isNaN(number) || number === '' || number === null) {
        return 'Переданный параметр не является числом';
    } else {
        let cubedValue = Math.pow(Number(number), 3);
        return `${number} в кубе равняется ${cubedValue}`;
    }
}

// Пример использования:
for (let i = 0; i <= 10; i++) {
    console.log(cubeNumber(i));
}
//Задание 7
let circle1 = {
    radius: 5,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  // Определение объекта circle2
  let circle2 = {
    radius: 8,
    getArea: function() {
      return Math.PI * this.radius ** 2;
    },
    getPerimeter: function() {
      return 2 * Math.PI * this.radius;
    }
  };
  
  // Пример использования
  console.log("Площадь круга circle1:", circle1.getArea()); 
  console.log("Периметр окружности circle1:", circle1.getPerimeter()); 
  console.log("Площадь круга circle2:", circle2.getArea()); 
  console.log("Периметр окружности circle2:", circle2.getPerimeter()); 


  