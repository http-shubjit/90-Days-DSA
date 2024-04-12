//**Checking Square of a number of array , present or not in another array **/

// const checkSquare = (arr1, arr2) => {
//   let res = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] * arr1[i] === arr2[j]) {
//         res.push({ arr1no: arr1[i], arr2value: arr2[j] });
//       }
//     }
//   }
//   return res;
// };

// console.log(checkSquare([1, 2], [1, 4, 9]));

//**Recurssion function Calling  **//

// let count = 1;
// const Recurrssion = (num) => {
//   if (num > count) {
//     console.log(`Fucnction call ${count} times`);
//     count++;
//   } else return;
//   Recurrssion(num);
// };

// Recurrssion(13);

//**Sort an arrray without using sort method  **/

// const sortArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] > arr[j]) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//       }
//     }
//   }
//   return arr;
// };

// console.log(sortArray([2, 3, 1, 9, 8, 5]));

//**check a word or string pailndrome or not**/

// const checkPailndrome = (str) => {
//   if (str.length > 1) {
//     let mainstr = str;
//     let revstr = str.split("").reverse().join("");
//     console.log(revstr);
//     if (mainstr === revstr) {
//       console.log("true");
//     } else {
//       console.log("false");
//     }
//   }
// };

// checkPailndrome("madam");
