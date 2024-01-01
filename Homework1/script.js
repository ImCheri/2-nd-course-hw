function getSeason(monthNumber) {
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
