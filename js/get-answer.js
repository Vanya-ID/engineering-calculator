import { array_of_numbers } from "./data";
import { answer_input } from "./inserts";
import { mathematical_calculations } from "./calculator/mathematical_calculations";

export const get_answer = (expr) => {
  const arr_of_numbers_and_signs = [];
  let pushing_elements = "";
  const copy_of_expr = [...expr];
  copy_of_expr.map((element, index) => {
    if (element === "") return;
    if (index === 0 && element === "-") {
      pushing_elements += element;
    } else if (array_of_numbers.includes(element) || element === ".") {
      pushing_elements += element;
    } else if (element === ",") {
      pushing_elements && arr_of_numbers_and_signs.push(pushing_elements);
      pushing_elements = "";
    } else if (
      element === "-" &&
      copy_of_expr[index - 1] === "," &&
      copy_of_expr[index - 2] === ","
    ) {
      pushing_elements += element;
    } else {
      pushing_elements && arr_of_numbers_and_signs.push(pushing_elements);
      pushing_elements = "";
      switch (element) {
        case "^": {
          mathematical_calculations(arr_of_numbers_and_signs, "**");
          break;
        }
        case "%": {
          mathematical_calculations(arr_of_numbers_and_signs, "/100*");
          break;
        }
        case "√": {
          mathematical_calculations(arr_of_numbers_and_signs, "**0.5");
          break;
        }
        default: {
          mathematical_calculations(arr_of_numbers_and_signs, element);
        }
      }
    }
  });
  const answer = Number.parseFloat(
    Number(arr_of_numbers_and_signs.join("")).toFixed(5)
  ).toString();
  if (answer_input) answer_input.textContent = answer;
  if (answer === "NaN") if (answer_input) answer_input.textContent = "Error";
  return answer;
};
