//**Triplet Sum in Array (3sum)
// const arr = [12, 3, 4, 1, 6, 9];
// let res = [];
// let k = 24;
// const find3sum = (arr, k) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       for (let k = 0; k < arr.length; k++) {
//         if (arr[i] + arr[j] + arr[k] === 24) {
//           res.push([arr[i], arr[j], arr[k]]);
//         }
//       }
//     }
//   }
//   return res;
// };
// console.log(find3sum(arr, k));

// Minimum increment by k operations to make all elements equal

// Input : arr[] = {4, 7, 19, 16},  k = 3
// Output : 10

// Input : arr[] = {4, 4, 4, 4}, k = 3
// Output : 0

// Input : arr[] = {4, 2, 6, 8}, k = 3
// Output : -1

const arr = [4, 4, 4, 4];
const k = 3;
const findminOps = (arr,k) => {
    let max=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) {
            max=arr[i]
        }
    }
    let res = 0
    for (let j = 0; j < arr.length; j++){
        if ((max-arr[j]) % k !== 0)
            return -1
        else if ((max - arr[j]) % k === 0) {
            res = res + ((max - arr[j]) / k);
        }
    }
    return res
};

console.log(findminOps(arr,k));