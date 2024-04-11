import { defineStore } from "pinia";

export const useIntervallStore = defineStore("intervall", {
  state: () => ({
    amount: 5 as number, //Amount of test data
    limit: 30 as number, //test data range 0 - 30 to randomize
    testData: [
      [25, 30],
      [2, 19],
      [14, 23],
      [4, 8],
    ] as [number, number][], //unsorted generated test data
    result: [] as [number, number][], //result after sorting and computing
  }),
  actions: {
    increment() {
      this.amount++;
    },
    decrement() {
      this.amount--;
    },
    resetGenerator() {
      this.limit = 30;
      this.amount = 5;
    },
    resolveTestData() {
      this.result = mergeOverlappingIntervals(this.testData);
    },
    generateRandomTestData() {
      this.testData = randomTestData(this.amount, this.limit);
    },
  },
});
