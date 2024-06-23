function countValidArrays(n, k) {
    const MOD = 10000;
    
    // Initialize dp array with 0s
    let dp = Array.from({ length: k + 1 }, () => Array(n + 1).fill(0));

    // Base case: for arrays of length 1, each number from 1 to N is a valid array
    for (let j = 1; j <= n; j++) {
        dp[1][j] = 1;
    }

    // Fill the dp array using the transition relation
    for (let i = 2; i <= k; i++) {
        for (let j = 1; j <= n; j++) {
            // Sum over all valid previous elements
            for (let m = 1; m <= n; m++) {
                if (j % m === 0) {
                    dp[i][j] = (dp[i][j] + dp[i - 1][m]) % MOD;
                }
            }
        }
    }

    // Sum up all valid arrays of length k
    let result = 0;
    for (let j = 1; j <= n; j++) {
        result = (result + dp[k][j]) % MOD;
    }

    return result;
}

// Example usage
let n = 3;
let k = 2;
console.log(countValidArrays(n, k)); // Output: 5
