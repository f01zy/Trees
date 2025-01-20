import * as binary from "./BST"
import { BTNode } from "./binaryTree"

(
  (): void => {
    const args: Record<string, number> = {}
    const reqArgs = ["height", "distance"]
    const argv = process.argv

    for (let i = 0; i < reqArgs.length; i++) {
      const arg = reqArgs[i]
      const index = argv.indexOf("--" + arg)

      if (index === -1) return console.log(`--${arg} option is required`)
      if (!parseInt(argv[index + 1])) return console.error(`--${arg} must be integer`)

      args[arg] = parseInt(argv[index + 1])
    }

    const tree = new binary.BinarySearchTree<number>(0)

    const numbers: Array<number> = []
    for (let i = 0; i <= args.height - 1; i++) numbers.push(i)
    numbers.sort(() => Math.random() - 0.5)

    numbers.forEach(num => {
      tree.append(new BTNode<number>(num))
    })

    console.log("\n\n\n"); tree.visualize(args.distance, "0")
    console.log("\n\n\n"); tree.bypass()
    console.log("\n")
    const node = tree.get(Math.floor(args.height / 2))
    if (node)
      console.log(`${node.left ? `left: ${node.left.value}, ` : ""}${node.right ? `left: ${node.right.value}, ` : ""}value: ${node.value}`)
  }
)()