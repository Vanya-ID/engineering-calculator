import { get_answer } from "./get-answer";

test("after polish notation should evaluate correctly", () => {
  expect(get_answer("1,2,3,*+")).toBe("7");
  expect(get_answer("1,2,+")).toBe("3");
  expect(get_answer("0,3-")).toBe("-3");
});
