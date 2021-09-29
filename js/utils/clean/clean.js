import { answer_input, back_button, clean_button } from "../../index";
import { DELETE_SIGN } from "../../constants";

clean_button.addEventListener("click", () => {
  answer_input.textContent = "";
});

back_button.addEventListener("click", () => {
  const exp = answer_input.textContent;
  const position = exp.charAt(exp.length - 2);

  if (Object.keys(DELETE_SIGN).includes(position)) {
    answer_input.textContent = exp.slice(0, -DELETE_SIGN[position]);
  } else {
    answer_input.textContent = exp.slice(0, -1);
  }
});
