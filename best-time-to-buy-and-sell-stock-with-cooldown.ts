function maxProfit(prices: number[]): number {
  const cache = new Map<number, number>();

  const getMaxProfit = (i: number, isBuying: boolean): number => {
    if (i >= prices.length) return 0;
    const cacheKey = 10 * i + (isBuying ? 1 : 0);
    if (cache.has(cacheKey)) return cache.get(cacheKey) as number;
    const cooldown = getMaxProfit(i + 1, isBuying);

    if (isBuying) {
      const buyProfit = getMaxProfit(i + 1, false) - prices[i];
      cache.set(cacheKey, Math.max(buyProfit, cooldown));
    } else {
      const sellProfit = getMaxProfit(i + 2, true) + prices[i];
      cache.set(cacheKey, Math.max(sellProfit, cooldown));
    }
    return cache.get(cacheKey) as number;
  };

  return getMaxProfit(0, true);
}
