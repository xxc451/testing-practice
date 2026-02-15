import { ceasarCipher } from "./caesarCipher.js";

test("Shifts letters by given factor", () => {
  expect(ceasarCipher("abc", 3)).toBe("def");
});

test("Wrapping", () => {
  expect(ceasarCipher("xyz", 5)).toBe("cde");
});

test("Preserve case", () => {
  expect(ceasarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("Empty string", () => {
  expect(ceasarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});
