// Задача 7
// Напишите функцию, которая сравнивает два массива и возвращает true, если они идентичны.
// Ожидаемый результат:
// ([1, 2, 3], [1, 2, 3]) => true
// ([1, 2, 3], [1, 2, 3, 4]) => false

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