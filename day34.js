//**Difference Array | Range update query in O(1)**//
// Input : A [] { 10, 5, 20, 40 }
//         update(0, 1, 10)
//         printArray()
//         update(1, 3, 20)
//         update(2, 2, 30)
//         printArray()
// Output : 20 15 20 40
//          20 35 70 60
// Explanation : The query update(0, 1, 10)
// adds 10 to A[0] and A[1]. After update,
// A[] becomes {20, 15, 20, 40}

// const input = [10, 5, 20, 40];
// const update = (input, idx1, idx2, query) => {
//   for (let i = 0; i < input.length; i++) {
//     if (i === idx1 || i == idx2) {
//       if (idx1 == idx2) {
//         input[i] = input[i] + 2 * query;
//         break;
//       } else {
//         input[i] = input[i] + query;
//       }
//     }
//   }
//   return input;
// };
// console.log(update(input, 0, 1, 10));
// console.log(update(input, 1, 3, 20));
// console.log(update(input, 2, 2, 30));
