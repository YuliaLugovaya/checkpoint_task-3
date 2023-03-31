// Задача 1
// Заполните массив следующим образом: в первый элемент запишите '1', во второй '22', в третий '333' и так далее.


// Первоначальное решение
function newArr(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let el = i.toString().repeat(i);
    arr.push(+el);
  }
  return arr;
}
console.log(newArr(5));


// Исправленное решение после созвона по разбору домашки
// Переписала на стрелочную, убрала лишнюю переменную в цикле, изменила метод с toString на String, исправила ошибку - раньше я пушила числа, а по условию надо, чтобы в результате были строки
const newArrUpdate = (num) => {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(String(i).repeat(i));
  }
  return arr;
}
console.log(newArrUpdate(5));



// Новые решения

// Развернуто с помощью new Array
const newArray = (num) => {
  let newArr = new Array(num).fill(''); // создаем новый массив длиной, равной num, и применяем метод fill, заполняя массив элементом ""
  return newArr.map((el, index) => {    // применяем к массиву map с элементом и индексом в параметрах
    return String(index + 1).repeat(index + 1) // работаем с индексом: берем индекс (на первой итерации ноль), прибавляем 1 и применяем repeat
  });
}
console.log(newArray(5));


// В одну строчку (оставлю как образец)
const newArrayHard = (num) => new Array(num).fill('').map((el, index) => String(index + 1).repeat(index + 1));
console.log(newArrayHard(5));