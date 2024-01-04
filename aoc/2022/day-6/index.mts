const t = await Deno.readTextFile("./data.txt");

const arr = t.split("");
console.log(arr.length);

for (let i = 0; i < arr.length - 14; i++) {
  const s = new Set();
  for (let j = i; j < i + 14; j++) {
    s.add(arr[j]);
  }
  console.log(s);

  if (s.size === 14) {
    console.log(s, i, i + 14);
    for (let j = i; j < i + 15; j++) {
      console.log(arr[j], j);
    }
    break;
  }
}
// console.log(
//   "adf",
//   arr[1293],
//   arr[1294],
//   arr[1295],
//   arr[1296],
//   arr[1297],
//   arr[1298],
//   arr[1299],
//   arr[1300],
//   arr[1301]
// );
// console.log("l", l);
// console.log("ll", ll);

/** already answered
 * 1300
 * 1295
 * 1296
 *
 * 4108
 * 1418
 * 1419
 * 1417
 */

//TODO: bvwbj plbgvbhsrlpgdmjqwftvncz: first marker after character 5
//TODO: nppdvj thqldpwncqszvftbrmjlhg: first marker after character 6
//TODO: nznrnfrfnt jfmvfwmzdfjlvtqnbhcprsg: first marker after character 10
//TODO: zcfzfwzzqfr ljwzlrfnpqdbhtmscgvjw: first marker after character 11
