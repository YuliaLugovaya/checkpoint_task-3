// Задача 9
// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function getParts(arr, num) {
  let newArray = [];
  for(i = 0; i < arr.length; i = i){
    newArray.push(arr.splice(i, num));
  }
  return newArray;
}
console.log(getParts([1, 2, 3, 4, 5], 2));