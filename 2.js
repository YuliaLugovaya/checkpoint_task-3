// Задача 2
// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

function sumNumbers(arr, num) {
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(sum <= num) {
      sum += arr[i];
    } else {
      return i;
    }
  }
}
console.log(sumNumbers([3, 2, 16, 8, 35, 7], 10))