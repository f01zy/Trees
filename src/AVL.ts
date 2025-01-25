import { BSTree } from "./BST";
import { BTNode } from "./BT";

export class AVLNode<T> extends BTNode<T> {
  public height: number = 1

  constructor(
    public value: T,
    public left?: AVLNode<T>,
    public right?: AVLNode<T>
  ) {
    super(value)
  }
}

export class AVLTree<T> extends BSTree<T> {
  constructor(
    protected override entry: AVLNode<T>
  ) {
    super(entry)
    this.entry = entry
  }

  private height(p?: AVLNode<T>): number {
    return p ? p.height : 0
  }

  private factor(p?: AVLNode<T>): number {
    return this.height(p?.left) - this.height(p?.right)
  }

  private fixH(p: AVLNode<T>): void {
    const hl = this.height(p.left)
    const hr = this.height(p.right)
    p.height = (hl > hr ? hl : hr) + 1
  }

  private rotateR(p: AVLNode<T>): AVLNode<T> {
    const q = p.left; if (!q) return p
    p.left = q.right
    q.right = p
    this.fixH(p)
    this.fixH(q)
    return q
  }

  private rotateL(q: AVLNode<T>): AVLNode<T> {
    const p = q.right; if (!p) return q
    q.right = p.left
    p.left = q
    this.fixH(q)
    this.fixH(p)
    return p
  }

  public override append(value: T, entry: AVLNode<T> = this.entry): void {

  }
}