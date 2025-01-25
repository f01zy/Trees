
import { BSTree } from "./BST"
import { BTNode } from "./BT"

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

    const tree = new BSTree<number>(
      new BTNode<number>(0)
    )

    const numbers: Array<number> = []
    for (let i = 0; i <= args.height - 1; i++) numbers.push(i)
    numbers.sort(() => Math.random() - 0.5)

    numbers.forEach(num => {
      tree.append(num)
    })

    tree.visualize("(0)", args.distance)
  }
)()