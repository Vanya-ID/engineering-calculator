import { reversePolishNotation } from "./reversePolishNotation";

test("must evaluate the expression correctly", () => {
  expect(reversePolishNotation("1+2")).toBe("3");
  expect(reversePolishNotation("1+2*3")).toBe("7");
  expect(reversePolishNotation("-1+2")).toBe("1");
  expect(reversePolishNotation("√(4)")).toBe("2");
  expect(reversePolishNotation("2-√(4)")).toBe("0");
  expect(reversePolishNotation("5!+10")).toBe("130");
  expect(reversePolishNotation("2!+3!-2!")).toBe("6");
  expect(reversePolishNotation("2+ 2^2 + 2")).toBe("8");
  expect(reversePolishNotation("2*(2+3)-5")).toBe("5");
  expect(reversePolishNotation("17-5*6/3-2+4/2")).toBe("7");
  expect(reversePolishNotation("5+(7-2*3)*(6-4)/2")).toBe("6");
  expect(reversePolishNotation("60%500")).toBe("300");
  expect(reversePolishNotation("(982-709)*852-9608")).toBe("222988");
  expect(reversePolishNotation("120*(3/2)")).toBe("180");
  expect(reversePolishNotation("2+log(100^2/10)-15+6*4/2")).toBe("2");
  expect(reversePolishNotation("(25-4)/7+5*(12-3)")).toBe("48");
  expect(reversePolishNotation("2*log(10)")).toBe("2");
  expect(reversePolishNotation("(3^5*3^10)/(3^6*3^7)")).toBe("9");
  expect(reversePolishNotation("(4^(-2)*4^(-7))/4^(-6)")).toBe("0.01563");
  expect(reversePolishNotation("4.735/0.5 +14.95/1.3 + 2.121/0.7")).toBe("24");
  expect(reversePolishNotation("1.35/2.7+6.02-5.9+0.4/2.5*(4.2-1.075)")).toBe(
    "1.12"
  );
});
