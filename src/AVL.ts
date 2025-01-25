/*
AVL дерево - сбалансированное двоичное дерево поиска, в котором поддерживается следующее свойство: для каждой его вершины высота её двух поддеревьев различается не более чем на 1.

Недописанно.
*/

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

  /**
   * Возвращает вывоту заданного узла.
   * @param p - Узел, высота которого берется.
   * @returns Высоту узла.
   */
  private height(p?: AVLNode<T>): number {
    return p ? p.height : 0
  }

  /**
   * Возвращает коофициент баланса заданного узла.
   * @param p - Узел, для которого расчитывается коофициент баланса.
   * @returns Коофициент баланса.
   */
  private factor(p?: AVLNode<T>): number {
    const f = this.height(p?.left) - this.height(p?.right)
    console.log(f)
    return f
  }

  /**
   * Стабилизирует высоту узла.
   * @param p - Стабилизируемый узел.
   */
  private fixH(p: AVLNode<T>): void {
    const hl = this.height(p.left)
    const hr = this.height(p.right)
    p.height = (hl > hr ? hl : hr) + 1
  }

  /**
   * Правый поворот узла.
   * @param q - Поворачиваемый узел.
   */
  private rotateR(p: AVLNode<T>): AVLNode<T> {
    const q = p.left; if (!q) return p
    p.left = q.right
    q.right = p
    this.fixH(p)
    this.fixH(q)
    return q
  }

  /**
   * Левый поворот узла.
   * @param q - Поворачиваемый узел.
   */
  private rotateL(q: AVLNode<T>): AVLNode<T> {
    const p = q.right; if (!p) return q
    q.right = p.left
    p.left = q
    this.fixH(q)
    this.fixH(p)
    return p
  }

  /**
   * Добавляет новый узел с заданным значением.
   * @param value - Добавляемое значение.
   * @param entry - Текущий узел, в котором ведется поиск места для нового узла.
   */
  public override append(value: T, entry: AVLNode<T> = this.entry): void {

  }
}