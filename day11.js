//**Find the missing number in a given integer array of 1 to 100 **/

// let orginalArray = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41,
//   42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60,
//   61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79,
//   80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98,
//   99, 100,
// ];

// let givenArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const findMissingNumber = (orginalArray, givenArray) => {
//   let ret = [];
//   let i = 0;
//   while (i < orginalArray.length) {
//     let res = givenArray.includes(orginalArray[i]);
//     if (!res) {
//       ret.push(orginalArray[i]);
//     }
//     i++;
//   }
//   return ret;
// };
// console.log(findMissingNumber(orginalArray, givenArray));

//**Find a duplicate number in an array of integers **/

// const findDuplicate = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         res.push(arr[i]);
//       }
//     }
//   }

//   return res;
// };

// console.log(findDuplicate([1, 2, 3, 4, 1, 3]));

//**Find the largest and smallest number in an unsorted array of integers**//

// const findLargeSmall = (arr) => {
//   let large, small;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] <= arr[i + 1]) {
//       large = arr[i + 1];
//     }
//   }
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] >= arr[i + 1]) {
//       small = arr[i + 1];
//     }
//   }

//   return { large: large, small: small };
// };

// console.log(findLargeSmall([3, 2, 4, 1]));
