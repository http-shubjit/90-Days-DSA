// find sub array in array
// arr = [1, 2, 3, 4, 5];
//subarrays=[[1,2],[2,3],[3,4],[4,5]]
const arr = [1, 2, 3, 4, 5];
const len = 2;

// const findSubarrays = (arr, len) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       let subarray = [];
//       for (k = i; k <= j; k++) {
//         subarray.push(arr[k]);
//       }
//       res.push(subarray);
//     }
//   }
// };
// console.log(findSubarrays(arr, len));

const findSubarrays = (arr, len) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let subarray = [];
    let count = 0;
    let j = i;

    if (j === arr.length - 1) {
      break;
    } else {
      while (count < len) {
        subarray.push(arr[j]);
        j++;
        count++;
      }
    }
    res.push(subarray);
  }
  return res;
};

console.log(findSubarrays(arr, len));
