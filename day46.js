// Find a peak element which is not smaller than its neighbours

// const arr = [10, 20, 15, 2, 23, 90, 67];

// const findPeakelement = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i == 0 || i == arr.length - 1) {
//       continue;
//     } else if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// console.log(findPeakelement(arr));