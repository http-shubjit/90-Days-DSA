// Inversion count in Array
// Input: arr[] = {8, 4, 2, 1}
// Output: 6
// Explanation: Given array has six inversions: (8, 4), (4, 2), (8, 2), (8, 1), (4, 1), (2, 1).

// Input: arr[] = {1, 20, 6, 4, 5}
// Output: 5
// Explanation: Given array has five inversions: (20, 6), (20, 4), (20, 5), (6, 4), (6, 5).

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
