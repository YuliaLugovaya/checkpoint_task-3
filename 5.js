// Задача 5
// Напишите функцию, возвращает новый массив без предоставленных значений.
// Ожидаемый результат: [1, 2, 3, 1, 2] без 1, 2 => [3]

function deleteEl(arr, arrDel) {
  let newArr = [];
  arr.forEach((el) => {
    if(arrDel.includes(el)) {
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