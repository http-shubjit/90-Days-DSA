//**Consider a string, sentence, of words separated by spaces where each word is a substring consisting of English alphabetic letters only. Find the first word in the sentence that has a length which is both an even number and greater than or equal to the length of any other word of even length in the sentence. If there are multiple words meeting the criteria, return the one which occurs first in the sentence.
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
