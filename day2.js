//** String Anagram Problem**/

// const value = function anagramCheck(str1, str2) {
//   if (str1.length !== str2.length) {
//     console.log("false");
//   } else {
//     str1 = str1.split("").sort().join("");
//     str2 = str1.split("").sort().join("");
//     if (str1 === str2) console.log("true");
//     else console.log("false");
//   }
// };
// value("hello", "olhleh");

//**Find unique number in a array **/

// const findNonRepeatingElement = (nums) => {
//   const nonRepeatingElements = [];
//   for (let i = 0; i < nums.length; i++) {
//     let chk = false;
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] === nums[j]) {
//         console.log("inner loop" + i, j);
//         chk = true;
//         break;
//       }
//     }
//     if (!chk) {
//       console.log("outer loop" + i);
//       nonRepeatingElements.push(nums[i]);
//     }
//     console.log(chk);
//     console.log("chek");
//   }
//   return nonRepeatingElements;
// };

// const nums = [1, 2, 3, 1, 2];
// console.log(findNonRepeatingElement(nums));
