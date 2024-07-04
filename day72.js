const strs = ["eat", "tea", "tan", "ate", "nat", "bat"]

   
//     let words = []
//     for (let i = 0; i < strs.length; i++){
//         words.push(strs[i].split("").sort().join(''))
//     }
// console.log(words)

const find = (strs) => {
    let retarr=[]
    for (let i = 0; i < strs.length; i++){
         let str1 = strs[i].split("").sort().join();
        let resarr = []
        resarr.push(strs[i])
        for (let j = i + 1; j < strs.length; j++){
            let str2 = strs[j].split("").sort().join()
            if (str1 === str2) {
                resarr.push(strs[j])
            };
            
        }

       retarr.push(resarr)
       
    }
    
console.log(retarr)

    

}
console.log(find(strs))




