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

// const data = [
//   [
//     {
//       Alcohol: 1,
//       "Malic Acid": 14.23,
//       Ash: 1.71,
//       "Alcalinity of ash": 2.43,
//       Magnesium: 15.6,
//       "Total phenols": 127,
//       Flavanoids: 2.8,
//       "Nonflavanoid phenols": 3.06,
//       Proanthocyanins: ".28",
//       "Color intensity": 2.29,
//       Hue: 5.64,
//       "OD280/OD315 of diluted wines": 1.04,
//       Unknown: 3.92,
//     },
//     {
//       Alcohol: 1,
//       "Malic Acid": 13.2,
//       Ash: 1.78,
//       "Alcalinity of ash": 2.14,
//       Magnesium: 11.2,
//       "Total phenols": 100,
//       Flavanoids: 2.65,
//       "Nonflavanoid phenols": 2.76,
//       Proanthocyanins: ".26",
//       "Color intensity": 1.28,
//       Hue: 4.38,
//       "OD280/OD315 of diluted wines": 1.05,
//       Unknown: 3.4,
//     },
//     {
//       Alcohol: 1,
//       "Malic Acid": 13.16,
//       Ash: 2.36,
//       "Alcalinity of ash": 2.67,
//       Magnesium: 18.6,
//       "Total phenols": 101,
//       Flavanoids: 2.8,
//       "Nonflavanoid phenols": 3.24,
//       Proanthocyanins: ".3",
//       "Color intensity": 2.81,
//       Hue: 5.68,
//       "OD280/OD315 of diluted wines": 1.03,
//       Unknown: 3.17,
//     },
//     {
//       Alcohol: 1,
//       "Malic Acid": 14.37,
//       Ash: 1.95,
//       "Alcalinity of ash": 2.5,
//       Magnesium: 16.8,
//       "Total phenols": 113,
//       Flavanoids: 3.85,
//       "Nonflavanoid phenols": 3.49,
//       Proanthocyanins: ".24",
//       "Color intensity": 2.18,
//       Hue: 7.8,
//       "OD280/OD315 of diluted wines": ".86",
//       Unknown: 3.45,
//     },
//   ],
// ];

// // Extracting Flavanoids values
// const flavanoidsValues = data[0].map(item => item.Flavanoids);

// // Calculating the average
// const totalFlavanoids = flavanoidsValues.reduce((acc, val) => acc + val, 0);
// const averageFlavanoids = totalFlavanoids / flavanoidsValues.length;

// console.log("Flavanoids values:", flavanoidsValues);
// console.log("Average Flavanoids:", averageFlavanoids);
