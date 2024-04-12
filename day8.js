//**Write a program to check if a string or word or number is palindrome**/

// const checkPailndrome = (str) => {
//   let strrev = str.split("").reverse().join("");
//   if (str === strrev) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkPailndrome("aaa"));

//**Write a program to check if value/target exists or not in ascending array**/

// const isPresent = (arr, num) => {
//   arr = arr.sort();
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     console.log("start :" + start);
//     console.log("end :" + end);
//     let mid = Math.floor((start + end) / 2);
//     console.log("mid :" + mid);
//     if (num === arr[mid]) {
//       return true;
//     } else if (num < arr[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
// };

// console.log(isPresent([1, 4, 3, 2, 6], 6));

//**Write a program to get total vowel count from String**/

// const vowelCount = (vwl) => {
//   let vowels = "aeiouAEIOU";
//   let count = 0;
//   let i = 0;
//   while (i < vwl.length) {
//     if (vowels.includes(vwl[i])) {
//       count++;
//     }
//     i++;
//   }
//   return count;
// };
// console.log(vowelCount("aedvhjashjhjbuA"));
