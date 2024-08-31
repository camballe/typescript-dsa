class TreeNode {
  value: number;
  children: TreeNode[];

  constructor(value: number, children: TreeNode[] = []) {
    this.value = value;
    this.children = children;
  }
}

const dfs = (rootNode: TreeNode | null, targetValue: number): boolean => {
  if (rootNode === null) return false;

  if (rootNode.value === targetValue) return true;

  for (const child of rootNode.children) {
    if (dfs(child, targetValue)) return true;
  }

  return false;
};

const rootNode = new TreeNode(1, [
  new TreeNode(2, [new TreeNode(4), new TreeNode(5)]),
  new TreeNode(3, [new TreeNode(6), new TreeNode(7)]),
]);

const targetValue = 67;
console.log(dfs(rootNode, targetValue));
