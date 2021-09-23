import { answer_input } from "./inserts";

const clean_button = document.querySelector(".clean");
const back_button = document.querySelector(".back");

clean_button.addEventListener("click", () => {
  answer_input.textContent = "";
});

back_button.addEventListener("click", () => {
  const exp = answer_input.textContent;
  const position = exp.charAt(exp.length - 2);
  const delete_sign = {
    g: 5,
    "√": 3,
    n: 4,
  };
  if (Object.keys(delete_sign).includes(position)) {
    answer_input.textContent = exp.slice(0, -delete_sign[position]);
  } else {
    answer_input.textContent = exp.slice(0, -1);
  }
});
