//**Find Subarray with given sum**/
//Input: arr[] = {1, 4, 20, 3, 10, 5}, sum = 33
// Output: Sum found between indexes 2 and 4
// const arr = [1, 4, 20, 3, 10, 5];
// const sum = 5;

// function findSubarray(arr, sum) {
//   if (!arr) return;
//   let ressum;
//   let resarr = [];
//   for (let i = 0; i < arr.length; i++) {
// check if the sum of elemnent already present in array
//     ressum = arr[i];
//     if (sum === arr[i]) {
//       resarr.push({ i: i });
//     }
//     for (let j = i + 1; j < arr.length; j++) {
//       ressum = ressum + arr[j];
//       if (ressum === sum) {
//         while (i <= j) {
//           resarr.push(i);
//           i++;
//         }
//       }
//     }
//   }

//   return resarr;
// }
// console.log(findSubarray(arr, sum));
