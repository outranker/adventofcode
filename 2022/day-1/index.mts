const text = await Deno.readTextFile("./data2.txt");
// console.log(text);
const arr = text.split("\n").map((item) => {
  if (item === "" || item === "") {
    // console.log(item);
    return item;
  } else {
    // console.log(item);
    return Number(item);
  }
}) as Array<number | "">;
// console.log(arr[arr.length - 1] === "");
// console.log(typeof arr[arr.length - 1]);
const deerCount = arr.filter((item) => item === "").length + 1;
// console.log(deerCount);
// console.log(arr);
let max = 0;
let maxIndex = 0;
let tempTotal = 0;
let list: number[] = [];
for (let i = 0; i <= arr.length; i++) {
  // console.log("::::::", typeof arr[i]);
  if (arr[i] === "") {
    if (max < tempTotal) {
      max = tempTotal;
      maxIndex = i;
      // console.log("max", max);
    }
    list.push(tempTotal);
    tempTotal = 0;
    continue;
  } else {
    // console.log(arr[i]);
    if (Number(arr[i]) && arr[i] !== "") {
      tempTotal += arr[i] as number;
      // console.log("temp", tempTotal);
    }
  }
}
console.log("s", list);
const set = new Set(list);
// console.log("set", set);
const s = Array.from(set).sort((a, b) => b - a);
console.log("s", s);
console.log("last three: ", s[2] + s[0] + s[1]);
console.log("maxIndex: ", maxIndex);
