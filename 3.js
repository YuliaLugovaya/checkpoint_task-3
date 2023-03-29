// Задача 3
// Напишите функцию, которая очищает массив от нежелательных значений, таких как false, undefined, пустые строки, ноль, null.
// Ожидаемый результат:
// [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]


// Первоначальное решение
function clearArr(arr) {
  return arr.filter(el => Boolean(el) === true);
}
console.log(clearArr([0, 1, false, 2, undefined, '', "hello", 3, null]));


// Сокращенное решение после созвона по разбору домашки
const clearArrUpdate = (arr) => {
  return arr.filter(Boolean);
}
console.log(clearArrUpdate([0, 1, false, 2, undefined, '', "hello", 3, null]));


// Новое решение
const clearArrNew = (arr) => arr.filter(el => el);
console.log(clearArrNew([0, 1, false, 2, undefined, '', "hello", 3, null]));