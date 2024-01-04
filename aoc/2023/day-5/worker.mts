self.onmessage = (evt: {
  data: {
    seed: number;
    mappings: {
      source: string;
      destination: string;
      numbers: string[];
    }[];
  };
}) => {
  //   console.log("hello from worker thread", evt.data.mappings);
  let val = +evt.data.seed;
  for (const mapping of evt.data.mappings) {
    foreach: for (let i = 0; i < mapping.numbers.length; i++) {
      const element = mapping.numbers[i];

      const range = +element[2];
      const source = +element[1];
      const destination = +element[0];
      if (val >= source && val < source + range) {
        const temp = destination + (val - source);
        if (temp) {
          val = temp;
          break foreach;
        } else {
          break foreach;
        }
      }
    }
  }

  self.postMessage(+val);
};
