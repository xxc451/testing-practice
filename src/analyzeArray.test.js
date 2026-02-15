import { analyzeArray } from "./analyzeArray.js";

test("Returns average, min, max, and length", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(arr)).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
