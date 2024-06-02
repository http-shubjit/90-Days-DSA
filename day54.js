// Range Lcm Queries
// Input: arr[] = {5, 7, 5, 2, 10, 12 ,11, 17, 14, 1, 44}
// query[] = {{2, 5}, {5, 10}, {0, 10}}
// Output: 60,15708, 78540
const arr = [5, 7, 5, 2, 10, 12 ,11, 17, 14, 1, 44]
const query = [2, 5]
const findLcm = (arr, query) => {
    let lcm = 1;
    let start = query[0]
    let end=query[1]
    for (let i = start; i <= end; i++){
        let no = 2;
        if (arr[i] % no===0) {
            lcm = lcm * no;
        }
        else {
            while (arr[i] % no !== 0)
                no++
            lcm=lcm*no
            
        }
    }    
    console.log(lcm)
}
console.log(findLcm(arr,query))