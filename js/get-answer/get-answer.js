import { ARRAY_OF_NUMBERS } from "../constants";
import { answer_input } from "../index";
import { mathematical_handler } from "../utils/maths-func/mathematical_handler";

export const get_answer = (expr) => {
  const arr_of_numbers_and_signs = [];
  let pushing_elements = "";
  const copy_of_expr = [...expr];

  copy_of_expr.forEach((element, index) => {
    if (element === "") return;
    if (index === 0 && element === "-") {
      pushing_elements += element;
      return;
    }
    if (ARRAY_OF_NUMBERS.includes(element) || element === ".") {
      pushing_elements += element;
      return;
    }
    if (element === ",") {
      pushing_elements && arr_of_numbers_and_signs.push(pushing_elements);
      pushing_elements = "";
      return;
    }
    if (
      element === "-" &&
      copy_of_expr[index - 1] === "," &&
      copy_of_expr[index - 2] === ","
    ) {
      pushing_elements += element;
    } else {
      pushing_elements && arr_of_numbers_and_signs.push(pushing_elements);
      pushing_elements = "";
      mathematical_handler(arr_of_numbers_and_signs, element);
    }
  });
  return showAnswer(arr_of_numbers_and_signs);
};

const showAnswer = (arr_of_numbers_and_signs) => {
  const answer = Number.parseFloat(
    Number(arr_of_numbers_and_signs.join("")).toFixed(5)
  ).toString();
  if (answer_input) answer_input.textContent = answer;
  if (answer === "NaN") if (answer_input) answer_input.textContent = "Error";
  return answer;
};
