// Задача 10
// Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
// Ожидаемый результат:
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']

function uniqueValues (arr) {
  let obj = {};
  arr.forEach((el) => {
    for(let i = 0; i < el.length; i++){
      if(obj[el[i]] === undefined){
        obj[el[i]] = 1;
      } else {
        obj[el[i]]++;
      }
    }
  })

  let arrNew = [];

  for(let key in obj){
    if(obj[key] >= arr.length){
      let arrEvery = arr.every((el) => el.includes(key));
      if(arrEvery = true) {
        if(isNaN(key)){
          arrNew.push(key)
        } else {
          arrNew.push(Number(key))
        }
      }
    }
  }
  return arrNew;
}
console.log(uniqueValues([[1, 2], [2, 3]]));