const t = await Deno.readTextFile("2023/day-7/data-test.txt");

type House = { hand: string; bid: string };
const hands = [];
const array: string[] = t.split("\n");
const houses: House[][] = Array.from({ length: 7 }, () => new Array(0));
console.log(array.length);
let s = 0;
const strength = {
  A: 13,
  K: 12,
  Q: 11,
  J: 10,
  T: 9,
  9: 8,
  8: 7,
  7: 6,
  6: 5,
  5: 4,
  4: 3,
  3: 2,
  2: 1,
} as const;

function sliceEndIncluded(s: string, c: number) {
  return s.slice(0, c + 1);
}
for (let i = 0; i < array.length; i++) {
  const [hand, bid] = array[i].split(" ");
  const houseIndex = findHouse(hand.split(""));
  houses.at(houseIndex)!.push({ hand, bid });
}
function group(hs: House[], y: number) {
  let m = 0;
  let st = "";
  let from = m;
  let to = m;
  let c = 0;
  while (m !== hs.length) {
    if (to === from) {
      st = sliceEndIncluded(hs[m].hand, y);
      m++;
      to = m;
      continue;
    }
    console.log(
      ">>>>>>>>>>>>>>>>>",
      st,
      sliceEndIncluded(hs[m].hand, y),
      from,
      to
    );
    if (st === sliceEndIncluded(hs[m].hand, y)) {
      if (m + 1 === hs.length) {
        if (c) {
          sort(hs, from, to, y + 1);
        }
      }
      c++;
      m++;
      to = m;
    } else {
      console.log("coming here", c);
      if (c >= 1) {
        console.log(">>><<<<<<<<<<<<<>>>>>>>>>>>>>>.", c);
        sort(hs, from, to, y + 1);
      }
      c = 0;
      from = m;
      st = sliceEndIncluded(hs[m].hand, y);
      m++;
      to = m;
    }
  }
}
for (let j = 0; j < houses.length; j++) {
  console.log("before", houses[j]);
  houses[j].sort(
    (a, b) =>
      strength[a.hand[0] as keyof typeof strength] -
      strength[b.hand[0] as keyof typeof strength]
  );
  console.log("after", houses[j]);
  if (houses[j].length === 0) continue;
  let y = 0;
  while (y !== 5) {
    group(houses[j], y);
    y++;
  }
}

console.log(houses);
const final = houses.reverse().flatMap((x) => x.reverse());
// const final = houses.flat();
// console.log(houses);
// console.log("", final);
final.forEach((element, index) => {
  s += (index + 1) * +element.bid;
});
console.log("total:", s);

function sort(house: House[], from: number, to: number, slice: number) {
  if (from === to) return;
  // console.log(first);
  for (let i = from; i <= to; i++) {
    for (let j = i + 1; j <= to; j++) {
      if (
        strength[house[i].hand[slice] as keyof typeof strength] >
        strength[house[j].hand[slice] as keyof typeof strength]
      ) {
        const swap = house[i];
        house[i] = house[j];
        house[j] = swap;
      }
    }
  }
  // for (let i = from; i <= to; i++) {
  //   for (let j = from; j <= to - i - 1; j++) {
  //     if (
  //       strength[house[j].hand[slice] as keyof typeof strength] <
  //       strength[house[j + 1].hand[slice] as keyof typeof strength]
  //     ) {
  //       const temp = house[j];
  //       house[j] = house[j + 1];
  //       house[j + 1] = temp;
  //     }
  //   }
  // }
}

// ************** part 2 ***********
function findHouse(strings: string[]): number {
  const obj: Record<string, number> = {};
  for (let i = 0; i < strings.length; i++) {
    const element = strings[i];
    if (obj[element]) {
      obj[element] += 1;
    } else {
      obj[element] = 1;
    }
  }
  let m = 0;
  for (const [_key, value] of Object.entries(obj)) {
    m = m + value * value;
  }

  switch (m) {
    case 25:
      return 0;
    case 17:
      return 1;
    case 13:
      return 2;
    case 11:
      return 3;
    case 9:
      return 4;
    case 7:
      return 5;
    default:
      return 6;
  }
}
// submitted answers for part 1
// 252877749
// 253204949
// 253204949
// 253205444
// 253205444
// 253192052
// 247795551

// 247836759

// submitted answers for part 2
