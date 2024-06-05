// Input : arr[] = {3, 2, 5, 1, 8, 9|
//      Query 1: start = 2, end = 5, k = 2
//      Query 2: start = 1, end = 6, k = 4
// Output : 2
//          5
// Explanation:
// [2, 5, 1, 8] represents the range from 2 to
// 5 and 2 is the 2nd smallest number
// in the range[3, 2, 5, 1, 8, 9] represents
// the range from 1 to 6 and 5 is the 4th
// smallest number in the range

const arr = [3, 2, 5, 1, 8, 9]
const query=[1,6,4]
const findKthsmallestno = (arr, query) => {
    const start = query[0]-1
    const end = query[1]
    const eleme = query[2]
    let resarr=[]
    for (let i = start; i < end; i++){
        resarr.push(arr[i])     
    }
    for (let i = start; i < end; i++) {
   for (let j = 0; j < resarr.length; j++){
            if (resarr[i] < resarr[j]) {
                let temp=resarr[j]
                resarr[j] = resarr[i]
                resarr[i]=temp
            }
        } }
     
    return resarr[eleme-1]
    
    
}
console.log(findKthsmallestno(arr ,query))