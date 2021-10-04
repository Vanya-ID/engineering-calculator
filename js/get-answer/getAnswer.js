import { ARRAY_OF_NUMBERS } from "../constants";
import { mathematical_handler } from "../utils/maths-func/mathematicalHandler";
import { showAnswer } from "../show-answer/showAnswer";

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
