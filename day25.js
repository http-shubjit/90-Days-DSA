//**Reversal algorithm for Array rotation**//

// const arr = [1, 3, 5, 7, 9];
// const d = 2;
// function arrayRotation(arr, d) {
//   let i = 0;
//   while (i < d) {
//     arr.push(arr[0]);
//     arr.shift();
//     i++;
//   }
//   return arr;
// }
// console.log(arrayRotation(arr, d));

//**Sort an array in wave form**//
// Input: arr[] = {20, 10, 8, 6, 4, 2}
// Output: arr[] = {20, 10, 8, 6, 4, 2}

// const arr = [20, 10, 8, 6, 4, 2];
// function arrayWaveSort(arr) {
//   if (arr.length === 0) return;

//   let i = 0;
//   let len = arr.length;
//   while (i < len) {
//     if (arr[i] < arr[i + 1]) {
//       [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//     }
//     i += 2;
//   }
//   return arr;
// }

// console.log(arrayWaveSort(arr));
