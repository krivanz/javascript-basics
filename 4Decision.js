// Decision
const containsElement = (arr, element) => {
  for (const actual of arr) {
    if (actual === element) {
      return true;
    }
  }
  return false;
};

const containsElement2 = (arr, element) => {
  let i = 0;
  while (i < arr.length && arr[i] !== element) {
    i++;
  }
  // return i < arr.length;
  if (i < arr.length) {
    return true;
  } else {
    return false;
  }
};

console.log('Decision', containsElement2([1, 2, 3], 3));
console.log('Decision in JS', [1, 2, 3].includes(1));
