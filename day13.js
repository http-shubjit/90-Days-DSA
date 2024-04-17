//**Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.**/

// const findNumber = (arr, num) => {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         result.push({ pair: `${arr[i]}, ${arr[j]}` });
//       }
//     }
//   }
//   return result;
// };
// console.log(findNumber([1, 4, 2, 3], 5));

//**Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.**/

// var findMedianSortedArrays = function (nums1, nums2) {
//   let res;
//   let num = nums1.concat(nums2);
//   num = num.sort((a, b) => a - b);
//   let mid;
//   if (num.length % 2 === 0) {
//     mid = Math.floor(num.length / 2);
//     res = (num[mid - 1] + num[mid]) / 2;
//   } else {
//     mid = Math.floor(num.length / 2);
//     res = num[mid];
//   }

//   return res;
// };

// console.log(findMedianSortedArrays([1, 2], [3, 4]));

//**Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.**/

var threeSum = function (nums) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]]);
        }
      }
    }
  }
  return res;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
