//**Count Largest Sum Of Consecutive digit **/

// const lrgConsecutiveNosum = (arr, numlen) => {
//   let max = 0;
//   if (numlen > arr.length) {
//     throw new Error("Pair is larger then array");
//   } else {
//     for (i = 0; i < arr.length - numlen + 1; i++) {
//       let temp = 0;
//       for (j = 0; j < numlen; j++) {
//         temp = temp + arr[i + j];
//       }
//       console.log("Temp", temp);
//       if (temp > max) {
//         max = temp;
//       }
//     }
//     return max;
//   }
// };
// console.log(lrgConsecutiveNosum([1, 2, 3, 4, 5, 6], 2));

//**Approach 2 **/

// const lrgConsecutiveNosum = (arr, numlen) => {
//   let max = 0;
//   arr = arr.sort((a, b) => a - b);
//   for (let i = arr.length - 1; i > numlen + 1; i--) {
//     max = max + arr[i];
//   }
//   return max;
// };
// console.log(lrgConsecutiveNosum([1, 2, 3, 4, 5, 6], 2));

//**set all the empty pockket of an array at last **/

// const handleZero = (arr) => {
//   let i = 0;
//   let notemptyarr = [];
//   let emptyarr = [];
//   while (i < arr.length) {
//     if (arr[i] !== 0) {
//       notemptyarr.push(arr[i]);
//       notemptyarr.sort();
//     } else {
//       emptyarr.push(arr[i]);
//     }
//     i = i + 1;
//   }
//   return notemptyarr.sort().concat(emptyarr);
// };
// console.log(handleZero([3, 0, 1, 0, 2, 3, 4, 5, 2, 3, 5, 3, 4]));

//**rotate the elements of an array by a given number of positions.**/

// Input: [1, 2, 3, 4, 5], 2;
// Output: [4, 5, 1, 2, 3];
// const rotateArray = (arr, k) => {
//   let rotate = arr.slice(arr.length - k); //(start index , end index) slice the emement from start index
//   let remaining = arr.slice(0, arr.length - k); //(start index , end index) slice the emement from start index to end index

//   return rotate.concat(remaining);
// };
// console.log(rotateArray([1, 2, 3, 4, 5], 2));
