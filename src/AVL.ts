import { BSTree } from "./BST";
import { BTNode } from "./BT";

export class AVLNode<T> extends BTNode<T> {
  public height: number = 0

  constructor(
    public value: T,
    public left?: AVLNode<T>,
    public right?: AVLNode<T>,
    public parent?: AVLNode<T>
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

  public override append(node: AVLNode<T>, entry: AVLNode<T> = this.entry): void {

  }
}