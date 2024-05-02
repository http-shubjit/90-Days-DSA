//**Print all Distinct ( Unique ) Elements in given Array**//

// const arr = [12, 10, 9, 45, 2, 10, 10, 45];

// const printDistinctelement = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!res.includes(arr[i])) {
//       res.push(arr[i]);
//     }
//   }
//   return res;
// };
// console.log(printDistinctelement(arr));

//**Leaders in an array**//

// Input: arr[] = {16, 17, 4, 3, 5, 2},
// Output: 17, 5, 2

//**1st Approach
const arr = [16, 17, 4, 3, 5, 2];

// function leaders(arr) {
//   let result = [];
//   if (!arr) return;

//   for (let i = 0; i < arr.length; i++) {
//     let check = false;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         check = true;
//       } else {
//         check = false;
//         break;
//       }
//     }
//     if (check) {
//       result.push(arr[i]);
//     }
//   }
//   if (!result.includes(arr[arr.length - 1])) {
//     result.push(arr[arr.length - 1]);
//   }
//   return result;
// }

// console.log(leaders(arr));

//*2nd Approach

// function leader(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let j;
//     for (j = i + 1; j < arr.length; j++) {
//       if (arr[i] <= arr[j]) break;
//     }

//     if (j === arr.length) {
//       result.push(arr[i]);
//     }
//   }
//   console.log(result);
//   return result;
// }

// console.log(leader(arr));
