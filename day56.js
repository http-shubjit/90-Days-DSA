// Given an array arr[] where each element represents the max number of steps that can be made forward from that index. The task is to find the minimum number of jumps to reach the end of the array starting from index 0.

// // Input: arr[] = {1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9}
// // Output: 3 (1-> 3 -> 9 -> 9)
// // Explanation: Jump from 1st element to 2nd element as there is only 1 step.
// // Now there are three options 5, 8 or 9. If 8 or 9 is chosen then the end node 9 can be reached. So 3 jumps are made.

// // Input:  arr[] = {1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1}
// // Output: 10
// // Explanation: In every step a jump is needed so the count of jumps is 10

// const arr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
// const findJump = (arr) => {
//     const end = arr.length - 1;
//     let step = arr[0];
//     let jump = 0;

//     for (let i = 1; i < arr.length; i++){
//         if (step >end) {
//            return jump
//         }
//         else if (step === end)
//             return jump+1
//         else {
//             step += arr[i]
//             jump = jump + 1;
//         };
//     }

//  }

// console.log(findJump(arr))