//**Rearrange positive and negative numbers**//
//*Ex:1 *//
// Input: [-1, 2, -3, 4, 5, 6, -7, 8, 9];
// Output: [9, -7, 8, -3, 6,-1,  5, 4,  2];
//*Ex:2 *//
// Input: [-1, 3, -2, -4, 7, -5];
// Output: [ 7, -5, 3, -4, -2, -1];

// const arr = [-1, 3, -2, -4, 7, -5];

// const rearrangeNumber = (arr) => {
//   let res = [];
//   let parr = [];
//   let narr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       parr.push(arr[i]);
//     } else {
//       narr.push(arr[i]);
//     }
//   }
//   parr.sort((a, b) => b - a);
//   narr.sort((a, b) => a - b);

//   for (let j = 0, n = 0, p = 0; j < arr.length; j++) {
//     if (j % 2 !== 0) {
//       if (n < narr.length) {
//         res.push(narr[n]);
//         n++;
//       } else {
//         res.push(parr[p]);
//         p++;
//       }
//     } else {
//       if (p < parr.length) {
//         res.push(parr[p]);
//         p++;
//       } else {
//         res.push(narr[n]);
//         n++;
//       }
//     }
//   }

//   return res;
// };

// console.log(rearrangeNumber(arr));
