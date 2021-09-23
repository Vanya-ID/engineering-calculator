import { answer_input } from "./inserts";
import { blockingSecondSign } from "./parsing/blocking-second-sign";
import { can_be_first, mathematical_signs } from "./data";
import { shouldSetMultSign } from "./parsing/should-set-mult-sign";
import { shouldDeleteDot } from "./parsing/should-delete-dot";

const config = {
  attributes: true,
  childList: true,
  subtree: true,
};

const liveSignParsing = () => {
  let prev_element_is_sign = false;
  let last_element = "";
  let text_content = answer_input.textContent.split("");
  const have_dot = [false];
  text_content.map((element, i) => {
    if (i === 0 && mathematical_signs.includes(element)) {
      if (!can_be_first.includes(element)) {
        answer_input.textContent = "0";
      }
      prev_element_is_sign = true;
    } else if (mathematical_signs.includes(element)) {
      if (
        prev_element_is_sign &&
        element !== "√" &&
        text_content[i - 1] !== "!" &&
        element !== "!"
      ) {
        blockingSecondSign(prev_element_is_sign, last_element);
        prev_element_is_sign = false;
      }
      shouldDeleteDot(element, have_dot);
      prev_element_is_sign = true;
    } else {
      prev_element_is_sign = false;
    }
    shouldSetMultSign(element, text_content, i);
  });
};

const observe = new MutationObserver(liveSignParsing);
observe.observe(answer_input, config);
