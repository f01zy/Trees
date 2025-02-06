/*
Косое дерево - самонастраивающаяся структура данных бинарного дерева поиска. Она автоматически реорганизует себя таким образом, что часто используемые или вставляемые элементы становятся ближе к корневому узлу.
*/

import { BSTree } from "./BST";
import { BTNode } from "./BT";

export class SplayTree<T> extends BSTree<T> {
  constructor(entry: BTNode<T>) {
    super(entry)
  }

  /**
   * Правый поворот узла.
   * @param q - Поворачиваемый узел.
   */
  private rotateR(p: BTNode<T>): BTNode<T> {
    const q = p.left; if (!q) return p
    p.left = q.right
    q.right = p
    return q
  }

  /**
   * Левый поворот узла.
   * @param q - Поворачиваемый узел.
   */
  private rotateL(q: BTNode<T>): BTNode<T> {
    const p = q.right; if (!p) return q
    q.right = p.left
    p.left = q
    return p
  }

  /**
   * Балансировка дерева после поиска.
   * @param q - Найденный узел.
   */
  private rebalance(entry: BTNode<T>): void {
    if (!entry) return

    while (entry !== this.entry && entry === entry.parent!.right) {
      entry = this.rotateL(entry.parent!)
    }

    while (entry !== this.entry && entry === entry.parent!.left) {
      entry = this.rotateR(entry.parent!)
    }

    this.entry = entry
  }

  /**
   * Ищет узел по значению.
   * @param value - Искоемое значение.
   * @param entry - Текущий узел, в котором происходит поиск.
   * @returns Узел с искоемым значением, либо null, в случае, если такой узел не найден.
   */
  public override search(value: T, entry: BTNode<T> = this.entry): BTNode<T> | null {
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