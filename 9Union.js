// Union
const section = (src1, src2) => {
  const out = [];
  let count = 0;
  for (let i = 0; i < src1.length; i++) {
    for (let j = 0; j < src2.length; j++) { // Eldöntés, ahol a tömb az src2, a keresett elem az src1[i]
      count++;
      if (src1[i] === src2[j] && !out.includes(src1[i])) {
        out.push(src1[i]);
        break;
      }
    }
  }
  console.log('Lépések', count);
  return out;
};
console.log('Section', section([1, 2, 3, 4, 5, 6, 1], [7, 8, 1, 2, 5]));

const union = (src1, src2) => {
  const out = [];
  for (const element of src1) { // Másolás tétel feltétel nélkül
    out.push(element);
  }
  for (let i = 0; i < src2.length; i++) {
    if (!out.includes(src2[i])) {
      out.push(src2[i]);
    }
  }
  return out;
};

console.log('Union', union([1, 2, 3, 4, 5, 6], [7, 8, 1, 2, 5]));
