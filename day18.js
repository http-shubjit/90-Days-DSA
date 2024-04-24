//**Find The Longest even no of a sentence**//
// function findFirstLongestEvenWord(sentence) {
//   const words = sentence.split(" ");
//   let longestEvenWord = "";

//   if (words.length == 1 && words.length % 2 !== 0) return "00";
//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     if (word.length % 2 === 0 && word.length > longestEvenWord.length) {
//       longestEvenWord = word;
//     }
//   }

//   return longestEvenWord;
// }

// const sentence = "Time to write great code";
// const result = findFirstLongestEvenWord(sentence);
// console.log(result);
