//**Best Time to Buy and Sell Stock**/

// Input: prices[] = {7, 1, 5, 3, 6, 4}
// Output: 5
// Explanation:
// The lowest price of the stock is on the 2nd day, i.e. price = 1. Starting from the 2nd day, the highest price of the stock is witnessed on the 5th day, i.e. price = 6.
// Therefore, maximum possible profit = 6 – 1 = 5.

// const sellStock = (prices) => {
//   let buy = prices[0],
//     max_profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     // Checking for lower buy value
//     if (buy > prices[i]) buy = prices[i];
//     // Checking for higher profit
//     else if (prices[i] - buy > max_profit) max_profit = prices[i] - buy;
//   }
//   return max_profit;
// };

// console.log(sellStock([7, 6, 4, 3, 1]));
