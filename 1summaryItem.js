// summary item
const sumArray = (arr) => {
  let sum = 0;
  for (const element of arr) {
    sum += element;
  }
  return sum;
};

const sumArrayFor = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log('Sum:', sumArray([1, 2, 3, 4]));
