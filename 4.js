// Задача 4
// Напишите функцию, которая возвращает объект, составленный из значений вложенных массивов. Первое элемент массива - ключ, второй - зачение.
// Ожидаемый результат: [['a', 1], ['b', 2]] => { a: 1, b: 2 }


// Первоначальное решение (слишком универсальное, по условию нет необходимости)
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


// Исправленное решение после созвона по разбору домашки
const getObjectUpdate = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    obj[el[0]] = el[1];
  })
  return obj;
}
console.log(getObjectUpdate([['a', 1], ['b', 2]]));


// Новое решение
const getObjectNew = (arr) => Object.fromEntries(arr); // с помощью метода объекта (для работы с массивом массивов, где есть ключ-значение)
console.log(getObjectNew([['a', 1], ['b', 2]]));