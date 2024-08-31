class TrieNode {
  children: Map<string, TrieNode>;
  isEndOfWord: boolean;
  constructor() {
    this.children = new Map<string, TrieNode>();
    this.isEndOfWord = false;
  }
}

class Trie {
  root: TrieNode;

  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) {
        node.children.set(char, new TrieNode());
      }

      node = node.children.get(char) as TrieNode;
    }

    node.isEndOfWord = true;
  }

  search(word: string, isPrefix = false): boolean {
    let node = this.root;
    for (const char of word) {
      if (!node.children.has(char)) return false;
      node = node.children.get(char) as TrieNode;
    }

    return isPrefix || node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    return this.search(prefix, true);
  }
}
