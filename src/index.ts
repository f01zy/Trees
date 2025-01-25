
import { AVLNode, AVLTree } from "./AVL"
import { BSTree } from "./BST"
import { BTNode } from "./BT"
import { SplayTree } from "./SplayTree"

((): void => {
  const args: Record<string, number> = {}
  const reqArgs = [
    ["height", "integer"],
    ["distance", "integer"],
    ["type", "1 (BS Tree), 2 (AVL Tree) or 3 (Splay Tree)"]
  ]
  const argv = process.argv

  for (let i = 0; i < reqArgs.length; i++) {
    const error = reqArgs[i][1]
    const arg = reqArgs[i][0]
    const index = argv.indexOf("--" + arg)

    if (index === -1) return console.log(`--${arg} option is required`)
    if (!parseInt(argv[index + 1])) return console.log(`--${arg} must be ${error}`)

    args[arg] = parseInt(argv[index + 1])
  }

  let tree: BSTree<number> | AVLTree<number> | SplayTree<number>

  switch (args.type) {
    case 1:
      tree = new BSTree<number>(new BTNode<number>(0))
      break

    case 2:
      tree = new AVLTree<number>(new AVLNode<number>(0))
      break

    case 3:
      tree = new SplayTree<number>(new BTNode<number>(0))
      break

    default:
      throw new Error("--type is required")
  }

  const numbers: Array<number> = []
  for (let i = 0; i <= args.height - 1; i++) numbers.push(i)
  numbers.sort(() => Math.random() - 0.5)

  numbers.forEach(num => {
    tree.append(num)
  })

  tree.visualize("(0)", args.distance)
})()