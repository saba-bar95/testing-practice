import capitalize from "./functions/capitalize";
import reverseString from "./functions/reverseString";
import { calculator } from "./functions/calculator";
import caesarCipher from "./functions/caesarCipher";
import analyzeArray from "./functions/analyzeArray";

test("analyzing array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("caesar cipher (example 2)", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("caesar cipher (example 2)", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar cipher (example 1)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher (example 1)", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("multiply numbers (example 1)", () => {
  expect(calculator.multiply(12, 12)).toBe(144);
});

test("divide numbers (example 2)", () => {
  expect(calculator.divide(30, 0)).toBe("You cannot divide 0");
});

test("divide numbers (example 1)", () => {
  expect(calculator.divide(30, 5)).toBe(6);
});

test("subtract numbers (example 2)", () => {
  expect(calculator.subract(105, -50)).toBe(155);
});

test("subtract numbers (example 1)", () => {
  expect(calculator.subract(5, 30)).toBe(-25);
});

test("add numbers (example 2)", () => {
  expect(calculator.add(5, 30)).toBe(35);
});

test("add numbers (example 1)", () => {
  expect(calculator.add(-25, -5)).toBe(-30);
});

test("reverse string (example 2)", () => {
  expect(reverseString("Howdy")).toBe("ydwoH");
});

test("reverse string (example 1)", () => {
  expect(reverseString("login")).toBe("nigol");
});

test("capitalize (example 3)", () => {
  expect(capitalize("greetings from Earth")).toBe("Greetings from earth");
});

test("capitalize (example 2)", () => {
  expect(capitalize("xxsSDs")).toBe("Xxssds");
});

test("capitalize (example 1)", () => {
  expect(capitalize("login")).toBe("Login");
});
