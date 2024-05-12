const arr = [8, 4, 2, 1];

const inversionCount = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      while (j < arr.length) {
        if (arr[i] > arr[j]) {
          count++;
        }
        j++;
      }
    }
  }
  return count;
};

console.log(inversionCount(arr));
