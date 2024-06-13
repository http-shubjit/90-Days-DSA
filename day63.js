// // Maximum equilibrium sum in an array
// Input : arr[] = {-1, 2, 3, 0, 3, 2, -1}
// Output : 4
// Prefix sum of arr[0..3] =
//             Suffix sum of arr[3..6]

const arr = [-1, 2, 3, 0, 3, 2, -1]
const n=arr.length

function findMaxSum(arr, n) 
{ 
    var res = -1000000000; 
    for (var i = 0; i < n; i++) 
    { 
    var prefix_sum = arr[i]; 
    for (var j = 0; j < i; j++) 
        prefix_sum += arr[j]; 
  
    var suffix_sum = arr[i]; 
    for (var j = n - 1; j > i; j--) 
        suffix_sum += arr[j]; 
  
    if (prefix_sum == suffix_sum) 
        res = Math.max(res, prefix_sum); 
    } 
    return res; 
} 
console.log(findMaxSum(arr,n))