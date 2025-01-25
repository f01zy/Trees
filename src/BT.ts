/* 
Бинарное дерево - дерево, в котором у каждого из его узлов не более двух дочерних узлов. При этом каждый дочерний узел тоже представляет собой бинарное дерево.
*/

import { TFormat } from "./types/types/format.types";

export class BTNode<T> {
  constructor(
    public value: T,
    public left?: BTNode<T>,
    public right?: BTNode<T>
  ) {
    this.value = value
  }
}

export class BT<T> {
  constructor(
    protected entry: BTNode<T>
  ) {
    this.entry = entry
  }

  /**
    * Форматирует строку для дальнейшего вывода в консоль.
    * @param value - Форматируемое значение.
    * @param format - Формат, в который форматируется значение.
    * @returns Отформатируемое значение.
    */
  private formatValue(value: T, format: TFormat): string {
    if (format === "(0)") return `(${value})`;
    return `${value}`;
  }

  /**
   * Визуализирует узел.
   * @param node - Визуализируемый узел.
   * @param prefix - Префикс узла.
   * @param format - Формат визуализации.
   * @param space - Растояние между узлами.
   */
  private visualizeNode(node: BTNode<T> | undefined, prefix: string, format: TFormat, space: number): void {
    if (node) {
      console.log(prefix + this.formatValue(node.value, format))
      const newPrefix = prefix + " ".repeat(space)
      this.visualizeNode(node.left, newPrefix + "├── ", format, space)
      this.visualizeNode(node.right, newPrefix + "└── ", format, space)
    }
  }

  /**
   * Обходит дерево, и выводит значения каждого узла.
   * @param entry - Текущий узел, в котором происходит поиск.
   */
  public bypass(entry: BTNode<T> = this.entry): void {
    console.log(entry.value)
    if (entry.left) this.bypass(entry.left)
    if (entry.right) this.bypass(entry.right)
  }

  /**
   * Визуализирует дерево в консоли.
   * @param format - Формат визуализации узлов. 
   * @param space - Растояние между узлами.
   */
  public visualize(format: TFormat, space: number): void {
    this.visualizeNode(this.entry, "", format, space)
  }
}