// задача №1
const fill = (arraySize, value) => {
  // решение здесь
  if (typeof(arraySize) !== 'number') {
    return 'Error: ArrSize is not a number';
  }
  const resultArr = [];
  for (let i = 1; i <= arraySize; i += 1) {
    resultArr.push(value);
  }
  return resultArr;
};
console.log('задача №1');
console.log('');

console.log(fill(3, 'a')); // [ 'a', 'a', 'a' ]
console.log(fill(0, 'a')); // []
console.log(fill(-2, 'a')); // []
console.log(fill(3, 123)); // [ 123, 123, 123 ]
console.log(fill('blabla', 'a')); // 'Error: ArrSize is not a number'

console.log('');

// задача №2
const reverse = (array) => {
  // решение здесь
  if (Array.isArray(array) !== true) {
    return 'Error: value is not an array';
  }
  const resultArr = [];
  for (let i = 0; i < array.length; i += 1) {
    resultArr.unshift(array[i]);
  }
  return resultArr;
 }
console.log('задача №2');
console.log('');

console.log(reverse([ 1, 2, 3 ])); // [3, 2, 1]
console.log(reverse([])); // []
console.log(reverse(123)); // 'Error: value is not an array'

console.log('');

// задача №3
const compact = (array) => {
  // решение здесь
  if (Array.isArray(array) !== true) {
    return 'Error: value is not an array';
  }
  const resultArr = [];
  for (let i = 0; i < array.length; i += 1) {
    if (typeof(array[i]) === 'number') {
      resultArr.push(array[i]);
    }
  }
  return resultArr;
}

console.log('задача №3');
console.log('');

const data = [0, 1, false, 2, undefined, '', 3, null];

console.log(compact(data)); // [ 0, 1, 2, 3 ]
console.log(compact([])); // []
console.log(compact([false, undefined, null, ''])); // []
console.log(compact(123)); // 'Error: value is not an array'
