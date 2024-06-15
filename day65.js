// Find all triplets with zero sum
// Input: arr[] = { 0, - 1, 2, -3, 1}
// Output: (0 -1 1), (2 -3 1)
const arr=[0, - 1, 2, -3, 1]
const findAlltiplate = (arr) => { 
            let fount=false

    for (let i = 0; i < arr.length; i++){
        for (let j = i + 1; j < arr.length; j++){
            for (let k = j + 1; k < arr.length; k++){
                if (arr[i] + arr[j] + arr[k] === 0) {
                    console.log(arr[i], arr[j], arr[k]) 
                    fount=true
                }
                
            
            }
        }
    }
    if(!fount) console.log("Not Found")

}
console.log(findAlltiplate(arr))