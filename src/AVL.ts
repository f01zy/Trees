import { BinarySearchTree } from "./BST";
import { BTNode } from "./binaryTree";

export class AVLNode<T> extends BTNode<T> {
  constructor(value: T) {
    super(value)
  }

  public left?: AVLNode<T>
  public right?: AVLNode<T>
  public parent?: AVLNode<T>
  public height: number = 0
}

export class AVLTree<T> extends BinarySearchTree<T> {
  constructor(entry: T) {
    super(entry)
    this.entry = new AVLNode<T>(entry)
  }

  protected override readonly entry: AVLNode<T>

  public override append(node: AVLNode<T>, entry: AVLNode<T> = this.entry): void {

  }

  private changeHeight(node: AVLNode<T>): void {

  }
}