function insert(intervals: number[][], newInterval: number[]): number[][] {
  const newIntervals: number[][] = [];

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];

    if (newInterval[1] < interval[0]) {
      newIntervals.push(newInterval);
      const remainingIntervals = intervals.splice(i, intervals.length - i);
      return [...newIntervals, ...remainingIntervals];
    }
    if (newInterval[0] > interval[1]) {
      newIntervals.push(interval);
    } else {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
    }
  }

  newIntervals.push(newInterval);
  return newIntervals;
}
