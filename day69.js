// • Bitwise subsequence

// Input            Output                          Output description
//                                         One possible subsequence is: 5 12
// 5                  2
// 15
// 6
// 5
// 12
// 1

const arr=[7 ,
17 ,
16 ,
12 ,
2 ,
8 ,
17 ,
17  ]
const bitwiseSubsequence = (arr) => {
        let maxcount = 0;
    for (let i = 0; i < arr.length; i++){
        let count = 0;
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] < arr[j] && (arr[i] & arr[j]) * 2 < (arr[i] | arr[j]))
                count ++; 
            else
                break;
        }
        if(count>maxcount) maxcount=count
    }
    return maxcount;

    
}
console.log(bitwiseSubsequence(arr))