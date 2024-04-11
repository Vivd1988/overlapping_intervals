import { test, expect } from "vitest";
import { mergeOverlappingIntervals } from "../../../utils/helpers";

test("Test data of coding task 2", () => {
  const testdata: [number, number][] = [
    [25, 30],
    [2, 19],
    [14, 23],
    [4, 8],
  ];
  expect(mergeOverlappingIntervals(testdata)).toStrictEqual([
    [2, 23],
    [25, 30],
  ]);
});
