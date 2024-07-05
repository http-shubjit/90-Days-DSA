//  Median of Two Sorted Arrays
var findMedianSortedArrays = function(nums1, nums2) {
  let nums=nums1.concat(nums2);
  nums.sort((a,b)=>a-b)
let res=Math.floor(nums.length/2)

  if(nums.length%2===0){
return (nums[res]+nums[res-1])/2;
  }  
  else{
    return nums[res]
  }

};