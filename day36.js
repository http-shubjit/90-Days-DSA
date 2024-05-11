// // Smallest subarray with sum greater than a given value
// // Last Updated : 21 Oct, 2023
// // Given an array arr[] of integers and a number x, the task is to find the smallest subarray with a sum greater than the given value.

// // Examples:

// // arr[] = {1, 4, 45, 6, 0, 19}
// //    x  =  51
// // Output: 3
// // Minimum length subarray is {4, 45, 6}
// // arr[] = {1, 10, 5, 2, 7}
// //    x  = 9
// // Output: 1
// // Minimum length subarray is {10}
// // arr[] = {1, 11, 100, 1, 0, 200, 3, 2, 1, 250}
// //     x = 280
// // Output: 4

// const arr = [1, 4, 45, 6, 0, 19];
// const x = 51;
// const findsmallestSubarray = (arr, x) => {
//   let minlen = arr.length + 1;
//   for (let start = 0; start < arr.length; start++) {
//     let cursum = arr[start];
//     if (cursum > x) return 1;
//     for (let end = start + 1; end < arr.length; end++) {
//       cursum = cursum + arr[end];
//       if (cursum > x && end - start + 1 < minlen) {
//         minlen = end - start + 1;
//       }
//     }
//   }
//   return minlen;
// };

// console.log(findsmallestSubarray(arr, x));
