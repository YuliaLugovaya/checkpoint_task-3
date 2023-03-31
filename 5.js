// Задача 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]


// Первоначальное решение
function deleteEl(arr, arrDel) {
  let newArr = [];
  arr.forEach((el) => {
    if (arrDel.includes(el)) {
      el++;
    } else {
      newArr.push(el);
    }
  })
  return newArr;

  // второй способ
  // arrDel.forEach((elDel) => {
  //   return arr = arr.filter((el) => el !== elDel)
  // });
  // return arr;
}
console.log(deleteEl([1, 2, 3, 1, 2, 4, 5], [1, 2, 4]));


// Улучшенное решение после созвона по разбору домашки
// Изменила вариант, где нужно создавать дополнительный массив. Вместо него выбрала filter. Здесь мы идем по первому массиву и фильтруем элементы на основе тех элементов, которые нужно удалить. Благодаря ! мы оставляем только те, которые не совпадают с arrDel. Также применила variadic параметры вместо оборачивания в массив элементов для удаления
const deleteElUpdate = (arr, ...arrDel) => {
  return arr.filter((el) => !arrDel.includes(el));
}
console.log(deleteElUpdate([1, 2, 3, 1, 2, 4, 5], 1, 2, 4));