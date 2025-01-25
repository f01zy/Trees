/* 
Точка входа.
*/

import { AVLNode, AVLTree } from "./AVL"
import { BSTree } from "./BST"
import { BTNode } from "./BT"
import { SplayTree } from "./SplayTree"

((): void => {
  type ArgValidator = (arg: string) => boolean

  interface ReqArg {
    name: string;
    validator: ArgValidator
  }

  const isInteger: ArgValidator = (arg: string) => {
    const num = parseInt(arg);
    return !isNaN(num) && Number.isInteger(num)
  };

  const isInRange: ArgValidator = (arg: string) => {
    const num = parseInt(arg);
    return num === 1 || num === 2 || num === 3
  };

  const reqArgs: ReqArg[] = [
    { name: "height", validator: isInteger },
    { name: "distance", validator: isInteger },
    { name: "type", validator: isInRange }
  ];

  const args: Record<string, any> = {}
  const argv = process.argv

  for (const { name, validator } of reqArgs) {
    const index = argv.indexOf("--" + name)

    if (index === -1) {
      return console.log(`--${name} option is required`)
    }

    const argValue = argv[index + 1]

    if (!validator(argValue)) {
      return console.log(`--${name} must be of the correct type`)
    }

    args[name] = parseInt(argValue)
  }

  let tree: BSTree<string> | AVLTree<string> | SplayTree<string>

  switch (args.type) {
    case 1:
      tree = new BSTree<string>(new BTNode<string>("А"))
      break

    case 2:
      tree = new AVLTree<string>(new AVLNode<string>("А"))
      break

    case 3:
      tree = new SplayTree<string>(new BTNode<string>("А"))
      break

    default:
      throw new Error("--type is required")
  }

  const letters = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ"
  const strings: Array<string> = []
  for (let i = 0; i <= args.height - 1; i++) strings.push(letters.split("")[i % letters.length])
  strings.sort(() => Math.random() - 0.5)

  strings.forEach(num => {
    tree.append(num)
  })

  tree.visualize("(0)", args.distance)
})()