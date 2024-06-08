// Input Data Stream: 5, 15, 1, 3
// Output: 5, 10,5, 4
// Explanation:
// After reading 1st element of stream – 5 -> median = 5
// After reading 2nd element of stream – 5, 15 -> median = (5+15)/2 = 10
// After reading 3rd element of stream – 5, 15, 1 -> median = 5
// After reading 4th element of stream – 5, 15, 1, 3 -> median = (3+5)/2 = 4
const arr=[5, 15, 1, 3]
const findMean = () => {
    let resarr = []
    let i ;
    

  
    for (i = 0; i < arr.length; i++){
        eachMean(arr,i)
    }

    function eachMean(arr, i) {
        const temparr = []
        for (let j = 0; j <= i; j++){
        temparr.push(arr[j])
        }
        temparr.sort((a, b) => a - b)

        if (temparr.length % 2 !== 0) 
       { 
            let item = ((temparr.length + 1) / 2) - 1
            resarr.push(temparr[item])
        }

        else {
            let first = ((temparr.length) / 2) - 1
            let second = ((temparr.length ) / 2)
             resarr.push((temparr[first]+temparr[second])/2)
        
        }
    }

    return resarr;
}
console.log(findMean())
