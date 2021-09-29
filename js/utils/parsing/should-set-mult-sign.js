import { ARRAY_OF_NUMBERS, SIGN_WITH_MULT_BEFORE } from "../../constants";
import { answer_input } from "../../index";

export const shouldSetMultSign = (element, expr, i) => {
  if (
    [...ARRAY_OF_NUMBERS, ")"].includes(element) &&
    SIGN_WITH_MULT_BEFORE.includes(expr[i + 1])
  ) {
    answer_input.textContent = answer_input.textContent.replace(
      expr[i + 1],
      "*" + expr[i + 1]
    );
  }
};
