import { calculator } from "./calculator.js";

test("Adds two numbers", () => {
  expect(calculator.add(1, 2)).toBeCloseTo(3);
});

test("Subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toBeCloseTo(2);
});

test("Multiplies two numbers", () => {
  expect(calculator.multiply(4, 3)).toBeCloseTo(12);
});

test("Divides two numbers", () => {
  expect(calculator.divide(10, 2)).toBeCloseTo(5);
});

test("Dividing by zero should throw an error", () => {
  expect(() => calculator.divide(1, 0)).toThrow("Cannot divide by zero");
});
