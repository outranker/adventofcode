const t = await Deno.readTextFile("2022/day-7/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);

class Node {
  name: string;
  parent: Node | null;
  isDirectory: boolean;
  size: number;
  children: Map<string, Node>;
  constructor(name: string, isDirectory: boolean) {
    this.name = name;
    this.isDirectory = isDirectory;
    this.parent = null;
    this.size = 0;
    this.children = new Map();
  }
  public setSize(size: number) {
    this.size = +size;
  }
  public setParent(value: Node) {
    this.parent = value;
  }
  public addChild(name: string, value: Node) {
    this.children.set(name, value);
  }
}

const rootNode = new Node("/", true);
let currentPosition = rootNode;

for (const line of array) {
  if (line.at(0) === "$") {
    // ! this is a command
    const [_dollarSign, command, argument] = line.split(" ");
    if (command === "cd") {
      if (argument === "..") {
        currentPosition = currentPosition.parent as Node;
      } else if (argument === "/") {
        currentPosition = rootNode;
      } else {
        if (currentPosition.children.has(argument)) {
          currentPosition = currentPosition.children.get(argument) as Node;
        }
      }
    }
  } else {
    // ! this is not a command, but probs dir/file name line
    const [typeOrFileSize, dirOrFileName] = line.split(" ");
    const newNode = new Node(dirOrFileName, typeOrFileSize === "dir");
    newNode.setParent(currentPosition);
    currentPosition.addChild(dirOrFileName, newNode);
    if (typeOrFileSize !== "dir") {
      newNode.setSize(+typeOrFileSize as unknown as number);
    }
  }
}

function dfsProcess(node: Node): number {
  if (node.isDirectory) {
    let totalSum = 0;
    node.children.forEach((value, _key, _map) => {
      if (value.isDirectory) {
        totalSum += dfsProcess(value);
      } else {
        totalSum += value.size;
      }
    });
    node.setSize(totalSum);
    return totalSum;
  } else {
    return node.size;
  }
}
/** ************** PART 1 ****************** */
const HUNDRED_K = 100_000;
let partOneRes = 0;
function findPartOneResult(node: Node) {
  if (node.isDirectory) {
    if (node.size <= HUNDRED_K) {
      partOneRes += node.size;
    }
    if (node.children.size) {
      node.children.forEach((value, _key, _map) => {
        if (value.isDirectory) {
          findPartOneResult(value);
        }
      });
    }
  } else {
    return;
  }
}

dfsProcess(rootNode);
// console.dir(rootNode, { depth: null }); // this can be used to print the whole object with map
console.log(
  "find total dir size whose size is at most HUNDRED_K",
  findPartOneResult(rootNode),
  partOneRes
);

/** ************** PART 2 ****************** */
const TOTAL_DISK_SPACE = 70_000_000;
const REQUIRED_FREE_SPACE_FOR_UPGRADE = 30_000_000;
const currentUsedSpace = rootNode.size; // 42_805_968
const currentFreeSpace = TOTAL_DISK_SPACE - currentUsedSpace; // 27_194_032
const needToDeleteSpace = REQUIRED_FREE_SPACE_FOR_UPGRADE - currentFreeSpace; // 12_805_968
const arr: number[] = [];
console.log(currentUsedSpace);
console.log(needToDeleteSpace);
function loopAllToFindSmallest(node: Node) {
  console.log("called");
  if (node.isDirectory) {
    if (node.size >= needToDeleteSpace) {
      arr.push(node.size);
    }
    if (node.children.size) {
      node.children.forEach((value, _key, _map) => {
        if (value.isDirectory) {
          loopAllToFindSmallest(value);
        }
      });
    }
  } else {
    return;
  }
}
loopAllToFindSmallest(rootNode);
console.log("smallest dir that can be deleted: ", {
  n: arr.sort((a, b) => a - b)[0],
}); // 17_428_128
/** already answered
 *
 *
 *
 */
/*
        $ cd /
        $ ls
        dir cmwrq
        dir ftrccld
        dir jjlbmtw
        dir jpncfpb
        dir mddr
        dir mthvntdd
        55644 pjts.dzh
        dir ptzsl
        dir wmqc
        $ cd cmwrq
        $ ls
        dir dtbzzl
        dir pjnghbm
        16144 rvs
        50956 swngfrsj.pcj
        dir vhvn
        dir vrt
        dir zgrjmtcq
        $ cd dtbzzl
        $ ls
        42503 ljhpmvd.zqf
        dir wwpnn
        $ cd wwpnn
        $ ls
        58541 jjdgzwnq
        dir lwqgsbg
        dir nztw
        dir rdtjztmt
        101609 sqqpcvq.llm
        dir ssdlqcrw
        $ cd lwqgsbg
        $ ls
*/
