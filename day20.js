// //**Find K most occurring elements in the given Array**/

// ///Input: arr[] = {3, 1, 4, 4, 5, 2, 6, 1}, K = 2
// //Output: 4 1

// const arr = [3, 1, 4, 4, 5, 2, 6, 1, "raka"];

// const findMustOccurrenceNo = (arr) => {
//   if (arr.length === 0) return "Array is empty";

//   let frequency = {};

//   for (let val of arr) {
//     if (frequency[val]) {
//       frequency[val]++;
//     } else {
//       frequency[val] = 1;
//     }
//   }
//   let maxFrequency = 0;
//   let mostOccurringNumber;
//   for (let key in frequency) {
//     console.log(frequency["key"]);
//     if (frequency[key] >= maxFrequency) {
//       maxFrequency = frequency[key];
//       mostOccurringNumber = key;
//     }
//   }

//   return mostOccurringNumber;
// };

// console.log(findMustOccurrenceNo(arr));
