const t = await Deno.readTextFile("./data.txt");

const arr = t.split("\n");
// console.log(t);
console.log(arr.length);

const stacks = [
  [],
  ["G", "J", "W", "R", "F", "T", "Z"],
  ["M", "W", "G"],
  ["G", "H", "N", "J"],
  ["W", "N", "C", "R", "J"],
  ["M", "V", "Q", "G", "B", "S", "F", "W"],
  ["C", "W", "V", "D", "T", "R", "S"],
  ["V", "G", "Z", "D", "C", "N", "B", "H"],
  ["C", "G", "M", "N", "J", "S"],
  ["L", "D", "J", "C", "W", "N", "P", "G"],
].map((item) => item.reverse());
// console.log("before:", stacks);

arr.forEach((element, index, array) => {
  if (index >= 10) {
    const [n, from, to] = element.split(" ").filter((el) => Number(el));
    // console.log(n, from, to);

    // for (let i = 0; i < n; i++) {
    const lastItemFromArr = [
      ...stacks[from].splice(stacks[from]?.length - n, n),
    ];
    stacks[to] = [...stacks[to], ...lastItemFromArr];
    // stacks[from]?.splice(-1, 1);
    if (index === 10 || index === 11 || index === 12 || index === 13) {
      console.log("index:::", index);
      console.log("lastItemFromArr", lastItemFromArr);
      console.log("stacks[from]", stacks[from]);
      console.log("this is stack", stacks);
      console.log("stacks[to]", stacks[to]);
    }
    // stacks[to].push(lastItemFrom);
    // }
  }
});
console.log("after:", stacks);
/** already answered
 * DJGJZNGPF
 * CWMTGHBDW
 * J JD GW
 * GHWFC
 * CFWHG
 * GVRJWJCHJ
 * JHCJWJRVG
 * SSCGWJCRB
 */

/**
 * move 1 from 2 to 1
 * move 3 from 1 to 3
 * move 2 from 2 to 1
 * move 1 from 1 to 2
 */
/**
 *                    [M]     [V]     [L]
 *    [G]             [V] [C] [G]     [D]
 *    [J]             [Q] [W] [Z] [C] [J]
 *    [W]         [W] [G] [V] [D] [G] [C]
 *    [R]     [G] [N] [B] [D] [C] [M] [W]
 *    [F] [M] [H] [C] [S] [T] [N] [N] [N]
 *    [T] [W] [N] [R] [F] [R] [B] [J] [P]
 *    [Z] [G] [J] [J] [W] [S] [H] [S] [G]
 *     1   2   3   4   5   6   7   8   9
 * move 1 from 5 to 2
 * move 7 from 7 to 1
 * move 1 from 1 to 7
 *
 *  */
let a = [
  ["G", "C", "V", "G", "D", "F", "N", "V", "J", "D"],
  ["C", "N", "M", "C", "J"],
  ["W", "Q", "S", "G"],
  [
    "D",
    "H",
    "G",
    "S",
    "W",
    "V",
    "L",
    "N",
    "M",
    "J",
    "T",
    "M",
    "C",
    "T",
    "S",
    "W",
    "G",
    "Z",
    "W",
    "J",
    "H",
    "R",
    "N",
    "W",
    "W",
    "B",
    "J",
  ],
  ["Z"],
  ["N"],
  ["G"],
  ["R", "R", "C", "B", "P"],
  ["G", "F"],
];
