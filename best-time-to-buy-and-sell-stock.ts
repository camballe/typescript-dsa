// function maxProfit(prices: number[]): number {
//   let maximumProfit = 0;

//   for (let i = 0; i < prices.length; i++) {
//     const buyPrice = prices[i];

//     for (let j = i + 1; i < prices.length; j++) {
//       const sellPrice = prices[j];
//       const profit = sellPrice - buyPrice;

//       if (profit > maximumProfit) {
//         maximumProfit = profit;
//       }
//     }
//   }

//   return maximumProfit;
// }
function maxProfit(prices: number[]): number {
  let maximumProfit = 0;
  let minPrice = prices[0];

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minPrice) {
      minPrice = prices[i];
    }

    const profit = prices[i] - minPrice;

    if (profit > maximumProfit) {
      maximumProfit = profit;
    }
  }

  return maximumProfit;
}
