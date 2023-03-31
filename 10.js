// Задача 10
// Напишите функцию, которая создаст массив из уникальных значений, которые есть в каждом из предоставленных массивов.
// Ожидаемый результат:
// ([1, 2], [2, 3]) => [2]
// (['a', 'b'], ['b', 'c'], ['b', 'e', 'c']) => ['b']


// Первоначальное решение
function uniqueValues(arr) {
  let obj = {};
  arr.forEach((el) => {
    for (let i = 0; i < el.length; i++) {
      if (obj[el[i]] === undefined) {
        obj[el[i]] = 1;
      } else {
        obj[el[i]]++;
      }
    }
  })

  let arrNew = [];

  for (let key in obj) {
    if (obj[key] >= arr.length) {
      let arrEvery = arr.every((el) => el.includes(key));
      if (arrEvery = true) {
        if (isNaN(key)) {
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


// Исправленное решение: мое первое решение не во всех случая работало корректно - например, если в первом массиве было 2 цифры 2, а во втором их не было, то функция все равно выводила 2 как один общий элемент
const uniqueValuesUpdate = (...arr) => {
  let obj = {};
  arr.forEach((el) => {
    el.forEach((e) => {
      if (obj[e] === undefined) {
        obj[e] = 1;
      } else {
        obj[e]++;
      }
    })
  })

  let arrNew = [];

  for (let key in obj) {
    if (obj[key] > 1 && arr.every((el) => {
      if (isNaN(key)) {
        return el.includes(key);
      } else {
        return el.includes(+key);
      }
    })) {
      if (isNaN(key)) {
        arrNew.push(key);
      } else {
        arrNew.push(Number(key))
      }
    }
  }
  return arrNew;
}
console.log(uniqueValuesUpdate([2, 5], [1, 3, 2]));
console.log(uniqueValuesUpdate(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));



// Новые решения с созвона

// С использованием фильтра
const uniqueValuesNew = (...arr) => {
  let arrNew = arr.shift(); // берем первый элемент (массив) для сравнения и фильтра
  arr.forEach((el) => {
    arrNew = arrNew.filter((e) => el.includes(e));
  })
  return [...new Set(arrNew)]; // почистить повяторяющиеся с помощью Set
  //return arrNew.filter((el, i) => arrNew.indexOf(el) === i); // почистить повяторяющиеся с помощью методов, ещё можно как 6 задаче с помощью объектов
}
console.log(uniqueValuesNew([2, 5, 2], [1, 3, 2, 5, 2]));
console.log(uniqueValuesNew([1, 2, 2], [3], [2, 3]));
console.log(uniqueValuesNew(['a', 'b'], ['b', 'c'], ['b', 'e', 'c']));


// Решение с помощью reduce, которое можно переписать в одну строчку (но не надо)
const uniqueValuesNewMore = (...arr) => {
  let arrNew = arr.reduce((acc, el) => {
    return acc.filter((e) => el.includes(e));
  }, arr.shift());
  return [...new Set(arrNew)];

  // return arr.reduce((acc, el) => acc.filter((e) => el.includes(e)), arr.shift()).filter((elem, index, array) => array.indexOf(elem) === index);
}
console.log(uniqueValuesNewMore([2, 5, 2], [1, 3, 2, 5, 2]));