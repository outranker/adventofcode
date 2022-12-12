const t = await Deno.readTextFile("./data.txt");

const array: string[] = t.split("\n");
console.log(array.length);
console.log(array);

let obj: Record<string, any> = {};

let c: { dirs: any[]; files: any[] } = { dirs: [], files: [] };
for (let i = 0; i < array.length; i++) {
  if (array[i].includes("cd ")) {
    const n = array[i].replace("cd ", "");

    if (obj[n]) {
    } else {
      obj[n] = c;
    }
  } else {
    if (!array[i].includes("ls")) {
      if (array[i].includes("dir ")) {
        console.log(array[i], c);
        c.dirs.push(array[i].replace("dir ", ""));
      }
      if (!array[i].includes("dir ")) {
        c.files.push(array[i].split(" ")[0]);
      }
    }
  }
}
console.log(obj);
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
