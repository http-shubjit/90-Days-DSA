//**Implement a function that takes two sorted arrays and merges them into a single sorted array//

// const mergeArray = (arr1, arr2, sort) => {
//   sort(arr1, arr2);
//   return arr1.concat(arr2);
// };

// const sort = (arr1, arr2) => {
//   arr1.sort();
//   arr2.sort();
// };
// console.log(mergeArray([1, 3, 2], [10, 6, 8, 5], sort));

//** Return an integer that is the maximum distance between the indices of two (not necessarily different) prime numbers in nums.**//

// var maximumPrimeDifference = function (nums) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       continue;
//     } else if (nums[i] === 2) {
//       res.push(i);
//     } else if (nums[i] % 2 !== 0) {
//       res.push(i);
//     }
//   }
//   console.log(res);
//   if (res.length == 1) {
//     return 0;
//   } else {
//     return res[res.length - 1] - res[0];
//   }
// };
// console.log(maximumPrimeDifference([4, 2, 9, 5, 3]));

//** Return an integer prime numbers in nums arry.**//
// var primeArray = function (nums) {
//   let res = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] === 1) {
//       continue;
//     } else if (nums[i] === 2) {
//       res.push(nums[i]);
//     } else if (nums[i] % 2 !== 0) {
//       res.push(nums[i]);
//     }
//   }
//   return res;
// };
// console.log(primeArray([1, 2, 3, 4, 5]));
