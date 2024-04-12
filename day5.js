//**search element using Binary search  **/
// let arr = [1, 4, 34, 2, 5];
// searchelem = 4;
// start = arr[0];
// end = arr.length;
//go to right if searchelem is> arr[mid] else go to left

// const binarySearch = (arr, elem) => {
//   elem = elem;
//   arr = arr.sort((a, b) => a - b);
//   console.log(arr);
//   let start = 0;
//   let end = arr.length - 1;
//   let mid = Math.floor(start + end / 2);
//   console.log(mid);
//   while (start <= end) {
//     if (elem === arr[mid]) {
//       return mid;
//     } else if (elem > arr[mid]) {
//       start = mid + 1;
//     } else {
//       end = mid - 1;
//     }
//     mid = Math.floor(start + end / 2);
//   }
//   return "not found";
// };

// console.log("index of 34 : " + binarySearch([1, 2, 43, 34, 5], 4));

//**Factorial Of a Number Using recurssion **/

// recurssion=base case+recurssion relation
//ex: 2^10=2*2^9

// const factorial = (num) => {
//   //base case
//   if (num === 0) return 1;
//   //recursive relation

//   // let small = factorial(num - 1);
//   // console.log("small:" + small);
//   // let big = num * small;
//   // console.log("Big:" + big);
//   // return big;

//   //           or

//   return num * factorial(num - 1);
// };

// console.log(factorial(5));

//**Powe of a Number using Recurssion**/

// const power = (num, sqr) => {
//   if (sqr === 0) return 1;

//   let smallNum = power(num, sqr - 1);
//   let bigNum = num * smallNum;
//   return bigNum;
// };

// console.log(power(2, 3));
