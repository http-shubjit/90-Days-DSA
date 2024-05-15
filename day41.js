//count total unique no in a array
//arr=[1,2,3,4,1,2]
//op:4
const arr = [1, 2, 3, 4, 1, 2];

const findUniqueno = (arr) => {
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr2.push(arr[i]);
      }
    }
  }
  let count = arr.length - arr2.length;
  return count;
};
console.log(findUniqueno(arr));
