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

  //Sort the data before merging
  data.sort(compareIntervalValue);

  stack.push(data[0]);

  //looping through the array and compare with the top element of the stack
  data.forEach((value: [number, number]) => {
    let topValue = stack[stack.length - 1]; //get top value of the stack

    if (topValue[1] < value[0]) {
      //push the value as new item into the stack
      stack.push(value);
    } else if (topValue[1] < value[1]) {
      //update the last value of the topitem
      topValue[1] = value[1];
      stack.pop();
      stack.push(topValue);
    }
  });
  return stack;
};

/**
 *  Helper function to randomize the values between 0  - limit
 * @param {number} limit- The upper limit for randomization
 * @returns {number}- Returns the radomized number
 */
const generaterRandomValue = (limit: number): number => {
  return Math.floor(Math.random() * limit);
};

/**
 *  Generate random test data
 * @param {number} amountOfTestData- Amount of tuples
 * @param {number} maxLimit- Range between 0 and value of maxLimit for randomize
 * @returns {[number,number][]} Returns the randomized test data
 */
export const randomTestData = (
  amountOfTestData: number,
  maxLimit: number
): [number, number][] => {
  let resultTuple: [number, number][] = [];
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
