//**Find the smallest missing number**//
// Given a sorted array of n distinct integers where each integer is in the range from 0 to m-1 and m > n. Find the smallest number that is missing from the array.

// Examples:

// Input: {0, 1, 2, 6, 9}, n = 5, m = 10
// Output: 3

// Input: {4, 5, 10, 11}, n = 4, m = 12
// Output: 0

// Input: {0, 1, 2, 3}, n = 4, m = 5
// Output: 4

// Input: {0, 1, 2, 3, 4, 5, 6, 7, 10}, n = 9, m = 11
// Output: 8

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 10];
// const n = 9;
// const m = 11;
// const findmissingNumber = (arr, n, m) => {
//   let res = [];
//   if (arr.length !== n || m <= arr[n - 1]) {
//     return "can Not Evalute";
//   } else if (m - 1 !== arr[n - 1]) {
//     for (let i = 0; i < m; i++) {
//       if (arr[i] !== i) {
//         res.push(i);
//       }
//     }
//   } else {
//     arr = arr.sort((a, b) => a - b);
//     for (let j = 0; j < arr.length; j++) {
//       if (j !== arr[j]) {
//         res.push(j);
//       }
//     }
//   }

//   return res[0];
// };
// console.log(findmissingNumber(arr, n, m));
