import { reversePolishNotation } from "../../reverse-polish-notation/reverse-polish-notation";
import { answer_input, memory_buttons } from "../../index";

let memory_count = "";

Array.from(memory_buttons).map((b) => {
  b.addEventListener("click", () => {
    switch (b.textContent) {
      case "MC": {
        memory_count = "0";
        break;
      }
      case "MR": {
        answer_input.textContent = memory_count;
        break;
      }
      case "MS": {
        memory_count = reversePolishNotation(answer_input.textContent);
        break;
      }
      case "M+": {
        memory_count += reversePolishNotation(answer_input.textContent);
        break;
      }
      case "M-": {
        memory_count -= reversePolishNotation(answer_input.textContent);
        break;
      }
    }
  });
});
