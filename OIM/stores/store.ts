import { defineStore } from "pinia";
import { compareIntervalValue } from "~/utils/sortInterval";

export const useIntervallStore = defineStore("intervall", {
  state: () => ({
    count: 5 as number,
    limit: 30 as number,
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
    resetGenerator() {
      this.limit = 30;
      this.count = 5;
    },
    clearData() {
      this.testData = [];
      this.result = [];
    },
    resolveTestData() {
      this.result = mergeOverlappingIntervals(this.testData);
    },
    generateRandomTestData() {
      this.testData = randomTestData(this.count);
    },
  },
});
