// Задача 6
// Напишите функцию, которая убирает повторяющиеся значения.
// Ожидаемый результат: [1, 2, 3, 1, 2] => [1, 2, 3]


// Первоначальное решение
function deleteRepeat(arr) {
  return arr.filter((el, i) => arr.indexOf(el) === i);
}
console.log(deleteRepeat([1, 2, 3, 1, 2]));


// Улучшенное решение после созвона по разбору домашки
// Первое решение уже правильное, поэтому просто переписаа в одну строчку
const deleteRepeatUpdate = (arr) => arr.filter((el, i) => arr.indexOf(el) === i);
console.log(deleteRepeatUpdate([1, 2, 3, 1, 2]));



// Дополнительные способы

// Решение, которое скорее всего быстрее работает, чем первый вариант. Set - это множество уникальных значений. А через [...] мы превращаем сет обратно в массив
const deleteRepeatNew = (arr) => [...new Set(arr)];
console.log(deleteRepeatNew([1, 2, 3, 1, 2]));


// Решение через объект: более длинное, но оставлю
const deleteRepeatMore = (arr) => {
  let obj = {};
  return arr.reduce((acc, el) => {
    if (!obj[el]) {
      obj[el] = true;
      acc.push(el);
    }
    return acc;
  }, [])
}
console.log(deleteRepeatMore([1, 2, 3, 1, 2]));