//**Find the Rotation Count in Rotated Sorted array**//

// Input: arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2
// Explanation: Initial array must be {2, 3, 6, 12, 15, 18}.
// We get the given array after rotating the initial array twice.

// Input: arr[] = {7, 9, 11, 12, 5}
// Output: 4

// Input: arr[] = {7, 9, 11, 12, 15};
// Output: 0

// const arr = [7, 9, 11, 12, 5];

// const findRotation = (arr) => {
//   let count = 0;
//   let min = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//       min = arr[i];
//       count = i;
//     }
//   }
//   return count;
// };
// console.log(findRotation(arr));

//**K-th Largest Sum Contiguous Subarray**/

//1st arr
const arr = [10, -10, 20, -40];
const k = 6;
//[10, 0, 20, -20, -10, 10, -30, 20, -20, -40];

//2nd arr
// const arr = [20, -5, -1];
// const k = 3;
// [20, 15, 14, -5, -1, -1];

const kthLargestSum = (arr, k) => {
  if (!arr) return;

  let res = [];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr[i];
    res.push(arr[i]);
    for (let j = i + 1; j < arr.length; j++) {
      sum = sum + arr[j];
      res.push(sum);
    }
  }
  for (let v = 0; v < k; v++) {
    if (v === k - 1) {
      return res[v];
    }
  }
};
console.log(kthLargestSum(arr, k));
