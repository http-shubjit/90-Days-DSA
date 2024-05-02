// let arr = [10, 200, 101, 300, 21, 22, 100];

// function findTriangle(arr) {
//   arr = arr.sort((a, b) => a - b);
//   let count = 0;
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       for (let k = j + 1; k < arr.length; k++) {
//         if (
//           arr[i] + arr[j] > arr[k] &&
//           arr[i] + arr[k] > arr[j] &&
//           arr[k] + arr[j] > arr[i]
//         ) {
//           res.push([arr[i], arr[j], arr[k]]);
//           count++;
//         }
//       }
//     }
//   }
//   return { Combination: res, No_Of_Triangle: count };
// }

// console.log(findTriangle(arr));
