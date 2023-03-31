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
// Переписала на forEach, убрала лишний цикл
const getObjectUpdate = (arr) => {
  let obj = {};
  arr.forEach((el) => {
    obj[el[0]] = el[1];
  })
  return obj;
}
console.log(getObjectUpdate([['a', 1], ['b', 2]]));


// Новые решения

// С помощью метода объекта (для работы с массивом массивов, где есть ключ-значение)
const getObjectNew = (arr) => Object.fromEntries(arr);
console.log(getObjectNew([['a', 1], ['b', 2]]));

// С помощью reduce
const getObjectNew2 = (arr) => {
  return arr.reduce((acc, el) => {
    acc[el[0]] = el[1];
    return acc;
  }, {})
}
console.log(getObjectNew2([['a', 1], ['b', 2]]));