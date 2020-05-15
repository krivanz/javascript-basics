// Maximum
const maxArr = (arr) => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

console.log('Max', maxArr([300, -5, 2, 10, 20, -2]));
