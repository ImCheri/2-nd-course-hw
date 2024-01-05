/*function getSeason(monthNumber) {
    if (monthNumber < 1 || monthNumber > 12 || isNaN(monthNumber)) {
        alert('Ошибка: введен неверный номер месяца');
    } else if (monthNumber === 12 || monthNumber <= 2) {
        alert('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        alert('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        alert('Лето');
    } else {
        alert('Осень');
    }
}
function getSeason(month) {
  if (month === 12 || month === 1 || month === 2) {
    alert("Это Зима!");
  } else if (month >= 3 && month <= 5) {
    alert("Это Весна!");
  } else if (month >= 6 && month <= 8) {
    alert("Это Лето!");
  } else if (month >= 9 && month <= 11) {
    alert("Это Осень!");
  } else {
    alert("Некорректный номер месяца");
  }
}

// Пример использования функции
let month = 7;
getSeason(month);*/





function getSeason() {
    let month = prompt ("Введите номер месяца (1-12):");
    if (month === null || month === "") {
      alert("Отмена ввода");
      return;
    }
    month = parseInt(month);
    if (month >= 1 && month <= 12) {
      if (month === 12 || month === 1 || month === 2) {
        alert("Это Зима!");
      } else if (month >= 3 && month <= 5) {
        alert("Это Весна!");
      } else if (month >= 6 && month <= 8) {
        alert("Это Лето!");
      } else if (month >= 9 && month <= 11) {
        alert("Это Осень!");
      }
    } else {
      alert("Некорректный номер месяца");
    }
  }
  
  // Привязываем функцию к кнопке
  document.getElementById("seasonButton").addEventListener("click", getSeason);