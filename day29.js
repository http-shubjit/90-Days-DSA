//Its a Beautifull Question ummah....
//**Rearrange an array such that arr[i] = i**//
// Input: arr = {- 1, -1, 6, 1, 9, 3, 2, -1, 4, -1}
// Output: [-1, 1, 2, 3, 4, -1, 6, -1, -1, 9];
// basically the question tell that write the code , bassed on given array if the i value is present on the given array then write the i value else -1

// const arr = [
//   19, 7, 0, 3, 18, 15, 12, 6, 1, 8, 11, 10, 9, 5, 13, 16, 2, 14, 17, 4,
// ];
const arr = [-1, -1, 6, 1, 9, 3, 2, -1, 4, -1];
function rearrangeArray(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.includes(i)) {
      res.push(i);
    } else {
      res.push(-1);
    }
  }
  return res;
}

console.log(rearrangeArray(arr));
