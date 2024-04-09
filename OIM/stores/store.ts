import { defineStore } from "pinia";

export const useIntervallStore = defineStore("intervall", {
  state: () => ({
    count: 0 as number,
    testData: [] as [number, number][],
    result: [] as [number, number][],
  }),
  actions: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
  // other options...
});
