// // Construct an array from its pair-sum array

// // Given a pair - sum array and size of the original array(n), construct the original array.
// // A pair-sum array for an array is the array that contains sum of all pairs in ordered form. For example pair-sum array for arr[] = {6, 8, 3, 4} is {14, 9, 10, 11, 12, 7}.

// const arr=[6, 8, 3, 4]
// var ConstructPairSumArray = (arr) => {
//     let sumarr = []
    
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i + 1; j < arr.length; j++){
//             let sum = 0;
//             sum = arr[i] + arr[j]
//             sumarr.push(sum)
//         }
//     }
//     return sumarr;
    
// }
// console.log(ConstructPairSumArray(arr))
