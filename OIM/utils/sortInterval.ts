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
  console.log(stack);
  return stack;
};
