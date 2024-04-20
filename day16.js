const students = [
  { name: "Dhishan Debnath", Roll: 1 },
  { name: "Animesh Gupta", Roll: 2 },
  { name: "Tapas Sen", Roll: 3 },
  { name: "Misti Dutta", Roll: 4 },
  { name: "Chini Misra", Roll: 5 },
];
const Details = [
  { Roll: 5, subjects: { math: 35, english: 56, chemistry: 76, computer: 68 } },
  { Roll: 3, subjects: { math: 33, chemistry: 12, computer: 50, english: 35 } },
  { Roll: 1, subjects: { math: 55, english: 75, chemistry: 76, computer: 94 } },
  { Roll: 4, subjects: { english: 12, chemistry: 85, computer: 68, math: 45 } },
  { Roll: 2, subjects: { math: 55, english: 56, computer: 48, chemistry: 12 } },
];

// function generateStudentMarkSheets(students, Details) {
//   let studentsMarkSheets = [];

//   for (let i = 0; i < students.length; i++) {
//     for (let j = 0; j < Details.length; j++) {
//       if (students[i].Roll === Details[j].Roll) {
//         let name = students[i].name;
//         let Roll = Details[j].Roll;
//         let math = Details[j].subjects.math;
//         let english = Details[j].subjects.english;
//         let chemistry = Details[j].subjects.chemistry;
//         let computer = Details[j].subjects.computer;
//         let total =
//           Details[j].subjects.math +
//           Details[j].subjects.english +
//           Details[j].subjects.chemistry +
//           Details[j].subjects.computer;
//         let status = total >= 200 ? "Pass" : "Fail";
//         studentsMarkSheets.push({
//           name: name,
//           Roll: Roll,
//           math: math,
//           english: english,
//           chemistry: chemistry,
//           computer: computer,
//           total: total,
//           status: status,
//         });
//         break;
//       }
//     }
//   }
//   return studentsMarkSheets;
// }

// console.log(generateStudentMarkSheets(students, Details));
