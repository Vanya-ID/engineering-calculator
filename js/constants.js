export const ARRAY_OF_NUMBERS = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
export const MATHEMATICAL_SIGNS = ["+", "-", "*", "^", "/", "%", ".", "√", "!"];
export const CAN_BE_FIRST = ["-", "√"];
export const SIGN_WITH_MULT_BEFORE = ["l", "√", "("];
export const OPERATORS = {
  "+": 0,
  "-": 0,
  "*": 1,
  "/": 1,
  s: 2,
  n: 2,
  "%": 2,
  "^": 2,
  "√": 2,
  "!": 3,
};
export const CONFIG = {
  attributes: true,
  childList: true,
  subtree: true,
};
export const DELETE_SIGN = {
  g: 5,
  "√": 3,
  n: 4,
};
