// Задача 7
// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// Ожидаемый результат:
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false


// Первоначальное решение
function equal(arr1, arr2) {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] === arr2[i]) {
        i++;
      } else {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
console.log(equal([1, 2, 3], [1, 2, 3, 4]));


// Исправленное решение после созвона по разбору домашки
// Убрала в условии внутри цикла второй i++, потому что так цикл неправильно идет, переписала условие на обратное
const equalUpdate = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};
console.log(equalUpdate([1, 2, 3], [1, 2, 3, 4]));


// Новое решение через every
// Если длины равны, проверяем внутри условия, что каждый елемент первого массива равен элементу второго с учетом индексов
const equalNew = (arr1, arr2) => {
  if (arr1.length === arr2.length) {
    arr1.every((el, i) => el === arr2[i])
    return true;
  } else {
    return false;
  }
};
console.log(equalNew([1, 2, 3], [1, 2, 3, 4]));