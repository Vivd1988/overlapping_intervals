import { defineStore } from "pinia";
import { compareIntervalValue } from "~/utils/sortInterval";

export const useIntervallStore = defineStore("intervall", {
  state: () => ({
    count: 0 as number,
    testData: [
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
    ] as [number, number][],
    result: [] as [number, number][],
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
    sort() {
      this.result = mergeOverlappingIntervals(this.testData);
      // this.testData.sort(compareIntervalValue);
    },
  },
  // other options...
});
