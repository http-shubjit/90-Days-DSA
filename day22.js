//**Array Rotations**//
let larr = [1, 2, 3, 4, 5, 6];
let rarr = [1, 2, 3, 4, 5, 6];

let d = 2;

const leftRotaion = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let l = arr.shift();
    arr.push(l);
  }
  return arr;
};

const rightRotation = (arr, d) => {
  for (let i = 0; i < d; i++) {
    let l = arr.pop();
    arr.unshift(l);
  }
  return arr;
};
console.log("RightRotation : " + rightRotation(larr, d));
console.log("LeftRotaion : " + leftRotaion(rarr, d));
