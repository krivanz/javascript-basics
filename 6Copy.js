// Copy

const copy2x = (src, dest) => {
  for (let i = 0; i < src.length; i++) {
    dest[i] = src[i] * 2;
  }
  return dest;
};

console.log('Copy', copy2x([1, 2, 3, 4], []));
