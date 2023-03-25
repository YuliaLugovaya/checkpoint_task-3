// Задача 6
// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]

function deleteRepeat(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}
console.log(deleteRepeat([1, 2, 3, 1, 2]));