// Print Fibonacci Series with recurssion

// function findFibonacci(term) {
//     if (term === 0)
//         return 0;
//     else if (term === 1)
//         return 1
//     else
//         return findFibonacci(term-1)+findFibonacci(term-2)


    
// }

// for (let i = 0; i < 10; i++)
//     console.log(findFibonacci(i))

//Without Recurssion

function findFibonacci(term) {
    let a = 0, b = 1, c;
    console.log(a)
    console.log(b)
    for (i = 2; i < term; i++){
        c = a + b;
        a = b;
        b = c;
        console.log(b)
    }


    
}

findFibonacci(10);