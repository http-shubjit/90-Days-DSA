// // • Unique Birthday Gift INFOSYS
// N: Represents the maximum possible value that each element in the arrays can take. This means each element in the array will be in the range from 1 to N.

// K: Represents the length of the arrays that we are interested in generating and counting. This means we are looking for arrays of length K
const n = 2;
const k = 2;

const totalBirthdayGift = (n, k) => {
    let res = [];
    for (let i = 1; i <= n; i++){
        for (let j = i; j <= n; j++){
            if (j % i === 0) {
res.push([i,j])            }
        }
    }

    return res;
}
console.log(totalBirthdayGift(n,k))