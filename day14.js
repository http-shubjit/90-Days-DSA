//**IBM Question**/

// function appendAndDelete(s, t, k) {
//   let j = Math.min(s.length, t.length);
//   if (s.length + t.length <= k) {
//     return "Yes";
//   }
//   for (let i = 0; i < j; i++) {
//     if (s[i] !== t[i]) {
//       j = i;
//       break;
//     }
//   }
//   k = k - (s.length - j);
//   k = k - (t.length - j);
//   return k >= 0 && k % 2 == 0 ? "Yes" : "No";
// }

// console.log(appendAndDelete("hackerhappy", "hackerrank", 9));

//**returns the Fibonacci sequence up to a given number of terms. **/

// const fibonacci = (num) => {
//** return the fibonaci series**/
// let prev = 0;
// let next = 1;
// console.log(prev);
// while (num - 2 > 0) {
//   let temp = prev + next;
//   prev = next;
//   next = temp;
//   num--;
//   console.log(prev);
// }
//* Return fibonacci series Last No*/
// if (num === 0) return 0;
// else if (num === 1) return 1;
// else {
//   return fibonacci(num - 1) + fibonacci(num - 2);
// }
// };
// console.log(fibonacci(6));

// function fibonacci(num) {
//   if (num === 0) return 0;
//   else if (num === 1) return 1;
//   else {
//     return fibonacci(num - 1) + fibonacci(num - 2);
//   }
// }
// const printFibonacciSeries = (n) => {
//   for (let i = 0; i < n; i++) {
//     console.log(fibonacci(i));
//   }
// };

// printFibonacciSeries(10);

//**Write a JavaScript program to convert a string to title case **//

// const wordCapitalize = (word) => {
//   //By Inbuild
//   // return word.replace(/\b\w/g, (l) => l.toUpperCase());
//   let a = word.split(" ");
//   let res = [];

//   for (i = 0; i < a.length; i++) {
//     res.push(a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase());
//   }
//   return res.join(" ");
// };

// console.log(wordCapitalize("raka biswal"));

//** slice method use for extract element like if i give one parameter then it extract element from that index to end but if i give to parameter then it extract element from first parameter to lastparameter -1 elment**/
