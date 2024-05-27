// Sparse Table
// Input:  arr[]   = {7, 2, 3, 0, 5, 10, 3, 12, 18};
//         query[] = [0, 4], [4, 7], [7, 8]

// Output: Minimum of [0, 4] is 0
//         Minimum of [4, 7] is 3
//         Minimum of [7, 8] is 12


const arr = [7, 2, 3, 0, 5, 10, 3, 12, 18];
const query = [0, 4];
const findSparsetable = (arr, query) => {
    let res=0;
    for (let i = 0; i < query.length; i++){
        if (arr[i] < res) {
          res=arr[i]
      }
    }
    return res  
}
console.log(findSparsetable(arr,query));