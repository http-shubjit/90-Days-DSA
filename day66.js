// print prime no from 1,100
const findPrimeno = () => { 
    for (let i = 2; i <= 100; i++){
        let count = 0;
        for (let j = 1; j <= i; j++){
            if (i % j === 0) count++
        }
        if (count === 2)
            console.log(i)
    }

}
findPrimeno()