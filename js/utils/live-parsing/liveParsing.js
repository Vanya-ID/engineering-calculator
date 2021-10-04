import { blockingSecondSign } from "../parsing/blockingSecondSign";
import { CAN_BE_FIRST, CONFIG, MATHEMATICAL_SIGNS } from "../../constants";
import { shouldSetMultSign } from "../parsing/shouldSetMultSign";
import { shouldDeleteDot } from "../parsing/shouldDeleteDot";
import { answer_input } from "../../index";

const liveSignParsing = () => {
  let prev_element_is_sign = false;
  let last_element = "";
  let text_content = answer_input.textContent.split("");
  const have_dot = [false];
  text_content.map((element, i) => {
    if (i === 0 && MATHEMATICAL_SIGNS.includes(element)) {
      if (!CAN_BE_FIRST.includes(element)) {
        answer_input.textContent = "0";
      }
      prev_element_is_sign = true;
    }
    if (MATHEMATICAL_SIGNS.includes(element)) {
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
observe.observe(answer_input, CONFIG);
