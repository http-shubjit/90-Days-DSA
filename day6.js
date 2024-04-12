//**Reverse Vowels of a string**/

// var reverseVowels = function (s) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const sArray = s.split("");
//   let i = 0;
//   let j = sArray.length - 1;

//   while (i < j) {
//     while (i < j && !vowels.includes(sArray[i])) {
//       //!vowels.includes(sArray[i]) =if sArray[i] is not vowel then i will increase if it is a vowel then this loopnot excute it going to next loop
//       i++;
//     }
//     while (i < j && !vowels.includes(sArray[j])) {
//       j--;
//     }
//     if (i < j) {
//       [sArray[i], sArray[j]] = [sArray[j], sArray[i]];
//       i++;
//       j--;
//     }
//   }

//   return sArray.join("");
// };

// console.log(reverseVowels("subhajit"));

//** Reverse sentence**/

//ex: my name is raka=raka is name my

// const reverseWord = (str) => {
//   str = str.split(" ").reverse().join(" ");
//   return str;
// };
// console.log(reverseWord("my name is raka"));

//** Reverse  word in a sentence**/
//ex:my name is raka=ym eman si akar

// const reverseWord = (str) => {
//   str = str.split(" ");
//   let i = 0;
//   let resstr = [];
//   while (i < str.length) {
//     let revstr = str[i].split("").reverse().join("");
//     resstr.push(revstr);
//     i++;
//   }
//   return resstr.join(" ");
// };

// console.log(reverseWord("my name is raka"));
