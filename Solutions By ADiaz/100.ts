interface PairSchema {
  i: number;
  j: number;
}

interface CyclesSchema {
  cycles: number;
}


const getCycleLength = (input: number): number => {
  let result = [input]
  while (result[result.length - 1] !== 1) {
    let current = result[result.length - 1];
    if (current % 2 !== 0) {
      result.push(3 * current + 1);
    } else {
      result.push(current / 2);
    }
  }
  return result.length;
}

const getMaxCycle = ({ i, j }: PairSchema): number => {
  const numbers = Array.from({ length: j - i + 1 }, (v, k) => k + i);
  const cyclesLength = numbers.map((number) => getCycleLength(number));
  return Math.max(...cyclesLength);
}

const getResult = (
  pairs: Array<PairSchema>,
): Array<PairSchema & CyclesSchema> => {
  return pairs.map(({ i, j }) => {
    return {
      i: i,
      j: j,
      cycles: getMaxCycle({ i, j }),
    }
  })
}

console.log(
  getResult([
    { i: 1, j: 10 },
    { i: 100, j: 200 },
    { i: 201, j: 210 },
    { i: 900, j: 1000 },
  ]),
)
