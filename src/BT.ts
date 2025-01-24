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

  private formatValue(value: T, format: TFormat): string {
    if (format === "(0)") return `(${value})`;
    return `${value}`;
  }

  private visualizeNode(node: BTNode<T> | undefined, prefix: string, format: TFormat, space: number): void {
    if (node) {
      console.log(prefix + this.formatValue(node.value, format))
      const newPrefix = prefix + " ".repeat(space)
      this.visualizeNode(node.left, newPrefix + "├── ", format, space)
      this.visualizeNode(node.right, newPrefix + "└── ", format, space)
    }
  }

  public bypass(entry: BTNode<T> = this.entry): void {
    console.log(entry.value)
    if (entry.left) this.bypass(entry.left)
    if (entry.right) this.bypass(entry.right)
  }

  public visualize(format: TFormat, space: number): void {
    this.visualizeNode(this.entry, "", format, space)
  }
}