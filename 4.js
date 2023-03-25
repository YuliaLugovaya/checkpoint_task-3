// Задача 4
// Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение.
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }

function getObject(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j += 2) {
      obj[arr[i][j]] = arr[i][j + 1];
    }
  }
  return obj;
}
console.log(getObject([['a', 1], ['b', 2]]));