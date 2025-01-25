/* 
Бинарное дерево поиска - бинарное дерево, в котором значение левого потомка меньше значения родителя, а значение правого потомка больше значения родителя для каждого узла дерева.
*/

import { BTNode, BT } from "./BT";

export class BSTree<T> extends BT<T> {
  constructor(entry: BTNode<T>) {
    super(entry)
  }

  /**
   * Ищет узел по значению.
   * @param value - Искоемое значение.
   * @param entry - Текущий узел, в котором происходит поиск.
   * @returns Узел с искоемым значением, либо null, в случае, если такой узел не найден.
   */
  public search(value: T, entry: BTNode<T>): BTNode<T> | null {
    if (entry.value === value) return entry
    else if (entry.value < value && entry.left) return this.search(value, entry.left)
    else if (entry.value > value && entry.right) return this.search(value, entry.right)

    return null
  }

  /**
   * Добавляет новый узел с заданным значением.
   * @param value - Добавляемое значение.
   * @param entry - Текущий узел, в котором ведется поиск места для нового узла.
   */
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
}