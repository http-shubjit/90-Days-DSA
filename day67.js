//  RPG game

// Input           Output                Output description 

// 2                 2                 Initial experience level is 123 points. 
// 123                                 Defeat the first monster having power of 78 and bonus of 10.
// 78                                  Experience level is now 123+10=133. 
// 130                                 Defeat the second monster. 
// 10 
// 0                                     
                                  
                                   
const arr = [3 ,100 ,101 ,100 ,304 ,100 ,1 ,524 ]

const RPGgame = (arr) => {
    let totalMonster = arr[0]
    let intialExperience = arr[1]
    let defeat = 0;
    let powers = []
    let bonous = []
   for (let i = 0; i < totalMonster; i++) {
            powers.push(arr[2 + i])
            bonous.push(arr[2 + totalMonster + i])
    }
    powers.sort((a,b)=>a-b)
    for (let k = 0; k < powers.length; k++){
        if (intialExperience >= powers[k]) {
            intialExperience += bonous[k]
            defeat++
        }
        
    }
    return defeat;

    
}
console.log(RPGgame(arr))