// Задача 2
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.


// Первоначальное решение
function sumNumbers(arr, num) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (sum <= num) {
      sum += arr[i];
    } else {
      return i;
    }
  }
}
console.log(sumNumbers([3, 5, 21], 10))


// Исправленное решение после созвона по разбору домашки
// Переписала условие: сначала прибавляем к сумме элементы, и если сумма становится больше числа, возвращаем следующий индекс. Прошлое решение не всегда работало корректно: когда заканчивался цикл, сумма не проверялась
const sumNumbersUpdate = (arr, num) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > num) {
      return i + 1;
    }

    // с помощью тернарного оператора
    // return sum <= num ? sum += arr[i] : i + 1;
  }
}
console.log(sumNumbersUpdate([3, 5, 21], 10));



// Новые решения

// С помощью while
const sumNumbers1 = (arr, num) => {
  let sum = 0;
  let i = 0;
  while (sum <= num) {
    sum += arr[i];
    i++;
  }
  return i;
}
console.log(sumNumbers1([3, 7, 21], 10));


// С помощью reduce
const sumNumbers2 = (arr, num) => {
  return arr.reduce((acc, el, i) => ( // берем reduce и задаем 3 параметра, initialValue - объект с суммой 0 и будущим ответом
    {
      sum: acc.sum + el, // на каждой итерации аккумулятор (объект) будет плюсовать в сумму элемент
      answer: acc.sum + el > num && acc.sum <= num ? i + 1 : acc.answer, // и если сумма с предыдущих итераций не превышает num, а сейчас, когда мы прибавили элемент, превышает, то записываем индекс + 1 элемента (т.е. количество элементов для суммы), а если сумма с предыдущих итераций превышает num, то мы берем значение предыдущих итераций, которые уже есть в ответе
    }
  ), { sum: 0, answer: undefined }).answer; // выводим ответ
}
console.log(sumNumbers2([3, 7, 21], 10));


// В одну строчку (оставлю как образец)
const sumNumbers3 = (arr, num) => arr.reduce((acc, el, i) => ({ sum: acc.sum + el, answer: acc.sum + el > num && acc.sum <= num ? i + 1 : acc.answer, }), { sum: 0, answer: undefined }).answer;
console.log(sumNumbers3([3, 5, 21], 10));