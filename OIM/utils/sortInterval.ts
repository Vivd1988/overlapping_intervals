/**
 *  Compares predecessor with successor
 * @param {[number,number]} predecessor - The predecessor value
 * @param {[number,number]} successor - The successor value
 * @returns {number}
 */
export const compareIntervalValue = (
  predecessor: [number, number],
  successor: [number, number]
): number => {
  return predecessor[0] - successor[0];
};

/**
 *  Merge the overlapping interval
 * @param {[number,number][]} initalArr- The interval, which should be checked and merged
 * @returns {[number,number][]} Returns the final result
 */
export const mergeOverlappingIntervals = (
  initalArr: [number, number][]
): [number, number][] => {
  if (initalArr.length <= 0) return [];

  let data = initalArr;
  let stack: [number, number][] = [];

  data.sort(compareIntervalValue);

  stack.push(data[0]);

  data.forEach((value: [number, number]) => {
    let topValue = stack[stack.length - 1];

    if (topValue[1] < value[0]) {
      stack.push(value);
    } else if (topValue[1] < value[1]) {
      topValue[1] = value[1];
      stack.pop();
      stack.push(topValue);
    }
  });
  return stack;
};

const generaterRandomValue = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};

const generateRandomRrangeValue = (min: number, max: number): number => {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
};

export const randomTestData = (
  amountOfTestData: number
): [number, number][] => {
  let resultTuple: [number, number][] = [];
  const maxLimit = 100;
  let value1: number = 0;
  let value2: number = 0;

  for (let index = 0; index < amountOfTestData; index++) {
    value1 = generaterRandomValue(maxLimit);
    value2 = generaterRandomValue(maxLimit);
    if (value1 == value2) {
      resultTuple.push([value1, value2 + 1]);
    } else {
      value1 < value2
        ? resultTuple.push([value1, value2])
        : resultTuple.push([value2, value1]);
    }
  }
  return resultTuple;
};
