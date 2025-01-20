import { TFormat } from "./types/types/format.types";

export class BTNode<T> {
  constructor(value: T) {
    this.value = value
  }

  public left?: BTNode<T>
  public right?: BTNode<T>
  public value: T
}

export class BinaryTree<T> {
  constructor(entry: T) {
    this.entry = new BTNode<T>(entry)
  }

  protected readonly entry: BTNode<T>

  private formatValue(value: T, format: TFormat): string {
    if (format === "(0)") return `(${value})`
    return `${value}`
  }

  public bypass(entry: BTNode<T> = this.entry): void {
    console.log(entry.value)
    if (entry.left) this.bypass(entry.left)
    if (entry.right) this.bypass(entry.right)
  }

  public visualize(distance: number, format: TFormat): void {
    const queue: Array<{ side: "left" | "right", node: BTNode<T>, level: number, pos: number }> = [
      { node: this.entry, side: "left", level: 0, pos: Math.floor(process.stdout.columns / 2) }
    ]

    while (queue.length > 0) {
      const element = queue.shift()!

      const value = `${element.node.left ? `/ ` : ""}${this.formatValue(element.node.value, format)!}${element.node.right ? " \\" : ""}`

      const y = element.level + 6

      console.log(`\x1b[${y};${element.pos}H${value}`)

      const offset = distance
      const nextLevel = element.level + 1

      if (element.node.left) {
        queue.push({ node: element.node.left, side: "left", level: nextLevel, pos: element.pos - offset })
      }
      if (element.node.right) {
        queue.push({ node: element.node.right, side: "right", level: nextLevel, pos: element.pos + offset })
      }
    }
  }
}