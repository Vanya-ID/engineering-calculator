import { answer_input } from "../inserts";

export const blockingSecondSign = (prev_element_is_sign, last_element) => {
  last_element = answer_input.textContent.slice(-1);
  answer_input.textContent =
    answer_input.textContent.slice(0, -2) + last_element;
};
