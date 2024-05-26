
// MO’s Algorithm (Query Square Root Decomposition) | Set 1 (Introduction)
const arr = [1, 1, 2, 1, 3, 4, 5, 2, 8];
const query=[0,4]

const findSumofSubarr = (arr, query) => {
            let sum = 0;
    for (let i = query[0]; i <=query[1]; i++){
    sum=sum+arr[i]    
    }   
    return sum;
}
console.log(findSumofSubarr(arr,query));