//**Fibonic Series Using Recurssion **//

// const fiboonaicSeries = (n) => {
//   if (n <= 1) return n;
//   let ans = fiboonaicSeries(n - 1) + fiboonaicSeries(n - 2);
//   return ans;
// };
// console.log(fiboonaicSeries(3));

//**Without Using recurssion **/
// const fiboonaicSeries = (n) => {
//   let prev = 0;
//   let nxt = 1;
//   let series;
//   for (let i = 2; i <= n; i++) {
//     series = prev + nxt;
//     prev = nxt;
//     nxt = series;
//   }
//   return series;
// };
// console.log(fiboonaicSeries(3));

//**say digits in word **/

// const sayDigit = (n) => {
//   let numString = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   let result = [];

//   while (n > 0) {
//     let rem = n % 10;
//     numString.map((item, index) => {
//       if (rem === index) {
//         result.push(item);
//       }
//     });
//     n = Math.floor(n / 10);
//   }
//   result = result.reverse().join(" ");
//   return result;
// };
// console.log(sayDigit(14));

//** Array Is Sorted or Not**/
function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];

console.log(isSorted(arr1));
console.log(isSorted(arr2));
