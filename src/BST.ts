import { BTNode, BinaryTree } from "./binaryTree";

export class BinarySearchTree<T> extends BinaryTree<T> {
  constructor(entry: T) {
    super(entry)
  }

  public append(node: BTNode<T>, entry: BTNode<T> = this.entry): void {
    if (entry.value === node.value) return console.error("this value is exists")

    else if (entry.value < node.value) {
      if (entry.left) return this.append(node, entry.left)
      else entry.left = node; return
    }

    else if (entry.value > node.value) {
      if (entry.right) return this.append(node, entry.right)
      else entry.right = node; return
    }
  }

  public get(value: T): BTNode<T> | null {
    return this.search(value, this.entry)
  }

  private search(value: T, entry: BTNode<T>): BTNode<T> | null {
    if (entry.value === value) return entry
    else if (entry.value < value && entry.left) return this.search(value, entry.left)
    else if (entry.value > value && entry.right) return this.search(value, entry.right)

    return null
  }
}