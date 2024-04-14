//**We have group of people in the form of array and you have to group people basis upon age ?**//
// let peopleArr = [
//   { name: "A", age: 10 },
//   { name: "B", age: 17 },
//   { name: "C", age: 14 },
//   { name: "D", age: 10 },
// ];

// let resultObj = {};
// for (let i = 0; i < peopleArr.length; i++) {
//   if (resultObj[peopleArr[i].age]) {
//     resultObj[peopleArr[i].age].push(peopleArr[i].name);
//   } else {
//     resultObj[peopleArr[i].age] = [peopleArr[i].name];
//   }
// }
// console.log(resultObj);

//**How do you remove duplicates from an integer array**//

// const removeDuplicateEle = (inputArr) => {
//   let uniqueArr = [];
//   for (let i = 0; i < inputArr.length; i++) {
//     if (!uniqueArr.includes(inputArr[i])) uniqueArr.push(inputArr[i]);
//   }
//   return uniqueArr;
// };
// console.log(removeDuplicateEle([1, 2, 3, 5, 3, 1, 9]));

//**Write a program to find duplicate numbers in an integer array ?**//

// const findDuplicateNo = (arr) => {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         res.push(arr[i]);
//       }
//     }
//   }
//   return res;
// };

// console.log(findDuplicateNo([1, 2, 3, 5, 3, 1, 9]));
