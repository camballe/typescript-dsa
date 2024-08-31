class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

// // dfs
// function invertTree(root: TreeNode | null): TreeNode | null {
//   if (root === null) return null;
//   const temp = invertTree(root.left);
//   root.left = invertTree(root.right);
//   root.right = temp;
//   return root;
// }

// bfs
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  const q: TreeNode[] = [];
  q.push(root);

  while (q.length > 0) {
    // biome-ignore lint/style/useConst: <explanation>
    let cur = q.shift() as TreeNode;

    // biome-ignore lint/style/useConst: <explanation>
    let l = cur?.left;
    // biome-ignore lint/style/useConst: <explanation>
    let r = cur?.right;
    cur.left = r;
    cur.right = l;

    if (cur.left) q.push(cur.left);
    if (cur.right) q.push(cur.right);
  }

  return root;
}
