// Dutch National Flag problem
// Input: {
//   0, 1, 2, 0, 1, 2;
// }
// Output: {
//   0, 0, 1, 1, 2, 2;
// }

const arr = [0, 1, 2, 0, 1, 2];
const flagProblem = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
};

console.log(flagProblem(arr));
