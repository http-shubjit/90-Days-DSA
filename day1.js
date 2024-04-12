1; //**Find largset 3 no of an array ? **//

//** approach - 1;

// const jarr = [12, 13, 1, 10, 34, 1];

// const findGreatest = (arr) => {
//   const resArr = arr.sort((a, b) => b - a);
//   return resArr.slice(0, 3);
// };

// const [first, second, third] = findGreatest(jarr);

// console.log(first, second, third);

//** approach - 2;

// function print3largest(arr, arr_size) {
//   let first, second, third;

//   if (arr_size < 3) {
//     document.write(" Invalid Input ");
//     return;
//   }

//   third = first = second = Number.MIN_VALUE;
//   for (let i = 0; i < arr_size; i++) {
//     if (arr[i] > first) {
//       third = second;
//       second = first;
//       first = arr[i];
//     } else if (arr[i] > second) {
//       third = second;
//       second = arr[i];
//     } else if (arr[i] > third) third = arr[i];
//   }

//   document.write(
//     "Three largest elements are " + first + " " + second + " " + third + "<br>"
//   );
// }

// let arr = [12, 13, 1, 10, 34, 1];
// let n = arr.length;
// print3largest(arr, n);

2; //**find Second largest element in an array **/

// let arr = [12, 13, 1, 10, 34, 1];

// arr = arr.sort((a, b) => b - a);
// console.log(arr[1]);

3; //** move all element to end of the array**/
// let arr = [1, 2, 0, 4, 3, 0, 5, 0];

// arr = arr.sort((a, b) => b - a);
// console.log(arr);

4; //**check sum of pair is zero **/

//** approach - 1;

// const arr = [-4, -3, 1, 0, 3, 6, -8];
// const checkSumzero = function (arr) {
//   arr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === 0) {
//         return [arr[i], arr[j]];
//       }
//     }
//   }
// };

// console.log(checkSumzero(arr));

//** approach - 2;
const arr = [-8, -4, -3, 0, 1, 3, 4, 6];
const checkSumzero = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  let res = [];
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      res.push({ left: arr[left], right: arr[right] });
      left++;
      right--;
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
  return res;
};

console.log(checkSumzero(arr));
