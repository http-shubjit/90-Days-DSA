// Merge two sorted arrays with O(1) extra space
// Last Updated : 20 Apr, 2024
// We are given two sorted arrays. We need to merge these two arrays such that the initial numbers (after complete sorting) are in the first array and the remaining numbers are in the second array

// Examples:

// Input: ar1[] = {10}, ar2[] = {2, 3}
// Output: ar1[] = {2}, ar2[] = {3, 10}

// Input: ar1[] = {1, 5, 9, 10, 15, 20}, ar2[] = {2, 3, 8, 13}

// Javascript program to merge two
// sorted arrays with O(1) extra space.

let arr1 = [1, 5, 9, 10, 15, 20];
let arr2 = [2, 3, 8, 13];

function merge(m, n) {
  for (let i = n - 1; i >= 0; i--) {
    let j,
      last = arr1[m - 1];
    for (j = m - 2; j >= 0 && arr1[j] > arr2[i]; j--) arr1[j + 1] = arr1[j];

    if (last > arr2[i]) {
      arr1[j + 1] = arr2[i];
      arr2[i] = last;
    }
  }
}

merge(arr1.length, arr2.length);
document.write("After Merging <br>First Array: ");
for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}
document.write("<br>Second Array:  ");
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//  This code is contributed by avanitrachhadiya2155
