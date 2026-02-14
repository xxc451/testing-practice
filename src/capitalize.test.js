test("Normal case", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("First letter remains capitalized", () => {
  expect(capitalize("Hello")).toBe("Hello");
});

test("Rest of the letters untouched", () => {
  expect(capitalize("heLLo")).toBe("HeLLo");
});

test("Empty string", () => {
  expect(capitalize("")).toBe("");
});

test("Non letters", () => {
  expect(capitalize("#adSf#")).toBe("#adSf#");
});
