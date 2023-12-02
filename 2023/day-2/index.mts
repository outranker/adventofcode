const t = await Deno.readTextFile("2023/day-2/data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
// let s = 0;
// const loaded = {
//   red: 12,
//   green: 13,
//   blue: 14,
// } as const;
// let increase = 0;
// for (let line of array) {
//   increase++;
//   // if (increase === 10) break;

//   const gameInfo = line.split(":");
//   const gameId = gameInfo[0].split(" ")[1];
//   const rounds = gameInfo[1].split(";");

//   const trackLoaded = { ...loaded };
//   let gameIsNotLegit = false;
//   loopOne: for (const round of rounds) {
//     const choices = round.split(",");
//     for (const choice of choices) {
//       const c = choice.split(" ");

//       // console.log(c);
//       const color = c[2] as keyof typeof loaded;
//       const number = +c[1];
//       // console.log(color, number);
//       gameIsNotLegit = trackLoaded[color] < number;
//       if (gameIsNotLegit) {
//         break loopOne;
//       }
//     }
//   }
//   console.log(trackLoaded);
//   if (!gameIsNotLegit) {
//     s += +gameId;
//   }
// }

// part 2
let s = 0;
const loaded = {
  red: 12,
  green: 13,
  blue: 14,
} as const;
let increase = 0;
for (let line of array) {
  increase++;
  // if (increase === 10) break;

  const gameInfo = line.split(":");
  const gameId = gameInfo[0].split(" ")[1];
  const rounds = gameInfo[1].split(";");

  const trackLoaded: Record<keyof typeof loaded, number[]> = {
    red: [],
    blue: [],
    green: [],
  };
  for (const round of rounds) {
    const choices = round.split(",");
    for (const choice of choices) {
      const c = choice.split(" ");

      // console.log(c);
      const color = c[2] as keyof typeof loaded;
      const number = +c[1];
      trackLoaded[color].push(number);
    }
  }
  const red = trackLoaded.red.sort((a, b) => a - b).at(-1) as number;
  const green = trackLoaded.green.sort((a, b) => a - b).at(-1) as number;
  const blue = trackLoaded.blue.sort((a, b) => a - b).at(-1) as number;
  s += red * green * blue;
  console.log(trackLoaded, red, green, blue);
}
console.log("sum: ", s);
