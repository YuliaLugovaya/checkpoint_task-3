// Задача 1
// Заполните массив следующим образом: в первый элемент запишите '1', 
// во второй '22', в третий '333' и так далее.

function newArr(num) {
  let arr = [];
  for (let i = 1; i <= num; i++) {
    let el = i.toString().repeat(i);
    arr.push(+el);
  }
  return arr;
}
console.log(newArr(5));