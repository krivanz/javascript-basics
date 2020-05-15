// Search

const indexOfArray = (arr, element) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return i;
    }
  }
  return -1;
};

console.log('IndexOf', indexOfArray([1, 2, 3, 4], 5));
console.log('IndexOf in JS', [1, 2, 3, 4].indexOf(5));
