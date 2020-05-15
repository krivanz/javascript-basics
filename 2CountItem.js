// countItem
const countElement = (arr, element) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      count++;
    }
  }
  return count;
};

console.log('Count 1:', countElement([1, 2, 1, 3, 1], 1));
