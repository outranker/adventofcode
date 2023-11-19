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
}
const arr: string[] = [];
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
  }
}

console.log(arr);
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
