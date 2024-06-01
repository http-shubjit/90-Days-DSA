// Range LCM Queries
// Input: arr[] = {5, 7, 5, 2, 10, 12 ,11, 17, 14, 1, 44}
// query[] = {{2, 5}, {5, 10}, {0, 10}}
// Output: 60,15708, 78540
const arr = [5, 7, 5, 2, 10, 12 ,11, 17, 14, 1, 44]
const query=[1,3]

const findLcm = (arr, query) => {
    let res = [];
    let start = query[0];
    let end = query[1];
    for (let i =start ; i <=end; i++){
        res.push(arr[i]);
    } 
    res.sort((a, b) => a - b);
    let lcm = res[0];
    for (let i = 0; i <res.length; i++){
        if (res[i] % lcm !== 0) {
            return 1;
        }

    }
    return lcm;
}
console.log(findLcm(arr,query))