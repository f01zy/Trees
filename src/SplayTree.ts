/*

Еще не дописал. Некорректно работает функция rebalance + выглядит ужасно.

*/

import { BSTree } from "./BST";
import { BTNode } from "./BT";

export class SplayTree<T> extends BSTree<T> {
  constructor(entry: BTNode<T>) {
    super(entry)
  }

  private rotateR(p: BTNode<T>): BTNode<T> {
    const q = p.left; if (!q) return p
    p.left = q.right
    q.right = p
    return q
  }

  private rotateL(q: BTNode<T>): BTNode<T> {
    const p = q.right; if (!p) return q
    q.right = p.left
    p.left = q
    return p
  }

  private rebalance(entry: BTNode<T>): void {
    if (this.entry.value === entry.value) return
    else if (this.entry.left && this.entry.left.value === entry.value) this.rotateR(this.entry)
    else if (this.entry.right && this.entry.right.value === entry.value) this.rotateL(this.entry)
    else if (this.entry.left && this.entry.left.left && this.entry.left.left.value === entry.value) { const temp = this.entry.left; this.rotateR(this.entry); this.rotateR(temp) }
    else if (this.entry.right && this.entry.right.right && this.entry.right.right.value === entry.value) { const temp = this.entry.right; this.rotateL(this.entry); this.rotateL(temp) }
    else if (this.entry.left && this.entry.left.right && this.entry.left.right.value === entry.value) { this.rotateL(this.entry.left); this.rotateR(this.entry) }
    else if (this.entry.right && this.entry.right.left && this.entry.right.left.value === entry.value) { this.rotateR(this.entry.right); this.rotateL(entry) }
  }

  protected override search(value: T, entry: BTNode<T>): BTNode<T> | null {
    if (entry.value === value) {
      this.rebalance(entry)
      return entry
    }

    if (entry.value < value && entry.left) {
      return this.search(value, entry.left)
    }

    else if (entry.value > value && entry.right) {
      return this.search(value, entry.right)
    }

    return null
  }
}