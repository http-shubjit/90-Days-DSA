// // Given an array arr[] of size N, the task is to find the maximum possible sum of i*arr[i] when the array can be rotated any number of times.
// Find maximum value of Sum( i*arr[i]) with only rotations on given array allowed

// Input: arr[] = {1, 20, 2, 10}
// Output: 72.We can get 72 by rotating array twice.
// {2, 10, 1, 20}
// 20*3 + 1*2 + 10*1 + 2*0 = 72
const arr=[1, 20, 2, 10]
const findMaxbyRotatingArray = (arr) => {
    let maxsum = 0;
    for (let i = 0; i < arr.length; i++){
        let sum = 0;
        for (let j = 0; j < arr.length; j++){
            let index = (i + j) % arr.length;
            sum += j * arr[index];
        }

        if (maxsum < sum) maxsum = sum;
    }

    return maxsum;
}
console.log(findMaxbyRotatingArray(arr))