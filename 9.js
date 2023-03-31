// Задача 9
// Напишите функцию, которая разделяет массив на части заданного размера.
// Ожидаемый результат: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]


// Первоначальное решение
function getParts(arr, num) {
  let newArray = [];
  for (i = 0; i < arr.length; i = i) {
    newArray.push(arr.splice(i, num));
  }
  return newArray;
}
console.log(getParts([1, 2, 3, 4, 5], 2));


// Исправленное решение после созвона по разбору домашек
// Создала копию массива, потому что splice изменяет исходный. Убрала цикл for, который здесь не нужен, вставила решение в while.
const getPartsUpdate = (arr, num) => {
  let arrCopy = [...arr];
  let newArray = [];
  while (arrCopy.length > 0) {
    newArray.push(arrCopy.splice(0, num));
  }
  return newArray;
}
console.log(getPartsUpdate([1, 2, 3, 4, 5], 2));



// Новые решения

// С помощью slice вместо splice - здесь не изменяется исходный массив, поэтому такой вариант лучше
const getPartsNew = (arr, num) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i = i + num) {
    newArray.push(arr.slice(i, i + num));
  }
  return newArray;
}
console.log(getPartsNew([1, 2, 3, 4, 5], 2));


// Вариант с new Array и fill (просто оставлю, такое в работе не писать)
const getPartsNewArray = (arr, num) => {
  let newArr = new Array(Math.ceil(arr.length / num)); // создаем новый массив с количеством элементов, которое равно длине arr / num и округленное вверх (например, 5 на 2 - это 2.5, округлили - стало 3)
  return newArr.fill(null).map((el, i) => { // сначала заполнили массив пустыми значениями, потом применили map
    return arr.slice(i * num, i * num + num) // и делаем slice. Так как у нас уже три итерации (элементов в новом массиве три), то чтобы вычислить индексы для слайса, нужно умножать индексы на num
  })
}
console.log(getPartsNewArray([1, 2, 3, 4, 5], 2));