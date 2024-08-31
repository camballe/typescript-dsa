class KthLargest {
  k: number;
  minHeap = new MinHeap();

  constructor(k: number, nums: number[]) {
    this.k = k;
    for (const num of nums) {
      this.minHeap.insert(num);
    }

    while (this.minHeap.length() > k) {
      this.minHeap.heapPop();
    }
  }

  add(val: number): number {
    this.minHeap.insert(val);
    if (this.minHeap.length() > this.k) {
      this.minHeap.heapPop();
    }

    return this.minHeap.getMinValue() as number;
  }
}

class MinHeap {
  private heapArray: number[];

  constructor() {
    this.heapArray = [];
  }

  public length(): number {
    return this.heapArray.length;
  }

  public heapPop(): number | undefined {
    if (this.heapArray.length === 0) return undefined;

    const rootValue = this.heapArray[0];
    const lastValue = this.heapArray.pop() as number;

    if (this.heapArray.length > 0) {
      this.heapArray[0] = lastValue;
      this.heapify(0);
    }

    return rootValue;
  }

  public compare(firstValue: number, secondValue: number): boolean {
    return firstValue < secondValue;
  }

  public getMinValue(): number | undefined {
    if (this.heapArray.length === 0) return undefined;
    return this.heapArray[0];
  }

  public getHeapArray(): number[] {
    return this.heapArray;
  }

  public insert(value: number): void {
    this.heapArray.push(value);
    let index = this.getHeapArray().length - 1;
    while (
      this.hasParent(index) &&
      this.compare(
        this.heapArray[index],
        this.heapArray[this.getParentIndex(index)]
      )
    ) {
      const parentIndex = this.getParentIndex(index);
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  public heapify(index: number): void {
    while (true) {
      let compareIndex = index;
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      if (
        this.hasLeftChild(index) &&
        this.compare(
          this.heapArray[leftChildIndex],
          this.heapArray[compareIndex]
        )
      ) {
        compareIndex = leftChildIndex;
      }

      if (
        this.hasRightChild(index) &&
        this.compare(
          this.heapArray[rightChildIndex],
          this.heapArray[compareIndex]
        )
      ) {
        compareIndex = rightChildIndex;
      }

      if (compareIndex === index) break;

      this.swap(index, compareIndex);
      index = compareIndex;
    }
  }

  private swap(index1: number, index2: number): void {
    const temp = this.heapArray[index1];
    this.heapArray[index1] = this.heapArray[index2];
    this.heapArray[index2] = temp;
  }

  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  private hasParent(index: number): boolean {
    return this.getParentIndex(index) >= 0;
  }
  private hasLeftChild(index: number): boolean {
    return this.getLeftChildIndex(index) < this.heapArray.length;
  }
  private hasRightChild(index: number): boolean {
    return this.getRightChildIndex(index) < this.heapArray.length;
  }
}
