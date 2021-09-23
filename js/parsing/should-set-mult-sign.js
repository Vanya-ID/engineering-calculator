import { answer_input } from "../inserts";
import { array_of_numbers, sign_with_mult_before } from "../data";

export const shouldSetMultSign = (element, expr, i) => {
  if (
    [...array_of_numbers, ")"].includes(element) &&
    sign_with_mult_before.includes(expr[i + 1])
  ) {
    answer_input.textContent = answer_input.textContent.replace(
      expr[i + 1],
      "*" + expr[i + 1]
    );
  }
};
