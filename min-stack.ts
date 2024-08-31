class MinStack {
  private stack: { val: number; min: number }[];

  constructor() {
    this.stack = [];
  }

  push(val: number): void {
    const min = this.stack.length > 0 ? Math.min(this.getMin(), val) : val;

    this.stack.push({ val, min });
  }

  pop(): void {
    this.stack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1].val;
  }

  getMin(): number {
    return this.stack[this.stack.length - 1].min;
  }
}
