import { BTNode, BT } from "./BT";

export class BSTree<T> extends BT<T> {
  constructor(entry: BTNode<T>) {
    super(entry)
  }

  protected search(value: T, entry: BTNode<T>): BTNode<T> | null {
    if (entry.value === value) return entry
    else if (entry.value < value && entry.left) return this.search(value, entry.left)
    else if (entry.value > value && entry.right) return this.search(value, entry.right)

    return null
  }

  public append(value: T, entry: BTNode<T> = this.entry): void {
    if (entry.value < value) {
      if (entry.left) return this.append(value, entry.left)
      else entry.left = new BTNode(value)
    }

    if (entry.value > value) {
      if (entry.right) return this.append(value, entry.right)
      else entry.right = new BTNode(value)
    }
  }

  public get(value: T): BTNode<T> | null {
    return this.search(value, this.entry)
  }
}