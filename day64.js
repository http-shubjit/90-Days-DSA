
let str="Raka"
const findReverse = (str) =>
{
    const rev = str.split('').reverse().join("")
    return rev

 }
console.log(findReverse(str))