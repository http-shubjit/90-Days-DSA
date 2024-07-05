// //  Median of Two Sorted Arrays
// var findMedianSortedArrays = function(nums1, nums2) {
//   let nums=nums1.concat(nums2);
//   nums.sort((a,b)=>a-b)
// let res=Math.floor(nums.length/2)

//   if(nums.length%2===0){
// return (nums[res]+nums[res-1])/2;
//   }
//   else{
//     return nums[res]
//   }

// };


// merge 2 array without concat
const arr1 = [1, 2, 3, 4,5,6]
const arr2 = [4, 5, 6, 7]
let arr=[]
for (let i = 0; i < arr1.length; i++){
    arr.push(arr1[i])
}
for (let i = 0; i < arr2.length; i++){
    arr.push(arr2[i])
}
console.log(arr)