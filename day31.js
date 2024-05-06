//**Reorder an array according to given indexes**//

// Input:  arr[]   = [10, 11, 12];
//         index[] = [1, 0, 2];
// Output: arr[]   = [11, 10, 12]
//         index[] = [0,  1,  2]

// const arr = [50, 40, 70, 60, 90];
// const index = [3, 0, 4, 1, 2];

// const reorderByindex = (arr, index) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = index[i];
//     let val = arr[i];
//     res[temp] = val;
//   }
//   return res;
// };
// console.log(reorderByindex(arr, index));

//**Search an element in a sorted and rotated Array**//

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 3
// Output : Found at index 8

// Input  : arr[] = {5, 6, 7, 8, 9, 10, 1, 2, 3}, key = 30
// Output : Not found

// Input : arr[] = {30, 40, 50, 10, 20}, key = 10
// Output : Found at index 3

// const arr = [5, 6, 7, 8, 9, 10, 1, 2, 3];
// const key = 0;
// const searchElement = (arr, key) => {
//   if (arr.length < 0) return;

//   if (arr.includes(key)) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === key) return `${key} found at index of ${i}`;
//     }
//   } else {
//     return "not present";
//   }
// };
// console.log(searchElement(arr, key));
