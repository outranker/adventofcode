const t = await Deno.readTextFile("2023/day-7/data.txt");

type House = { hand: string; bid: string };
const array: string[] = t.split("\n");
console.log(array.length);
let s = 0;
for (let i = 0; i < array.length; i++) {}
console.log("total:", s);

// // ************** part 2 ***********

// submitted answers for part 1
// 252877749
// 253204949
// 253204949
// 253205444
// 253205444
// 253192052
// 247795551
// 253205868

// submitted answers for part 2
// 253768376 -> too low
// 253370359 -> too low
// 253070461 -> too low
// 253907829
