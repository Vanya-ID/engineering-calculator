import { answer_input } from "../inserts";

export const shouldDeleteDot = (element, have_dot) => {
  if (element === ".") {
    if (have_dot[0] === true) {
      answer_input.textContent = answer_input.textContent.slice(0, -1);
    }
    have_dot[0] = true;
  } else {
    have_dot[0] = false;
  }
};
