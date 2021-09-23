import { array_of_numbers, mathematical_signs } from "./data";
import { get_answer } from "./get-answer";
import { answer_input } from "./inserts";

const equals = document.querySelector(".equals");

// export const delete_elements = (array, pushing_element, remove_count) => {
//   for (let i = 0; i < remove_count; i++) {
//     array.pop();
//   }
//   array.push(pushing_element.toString());
// };
export const reversePolishNotation = (statement = answer_input.textContent) => {
  let arr_of_numbers_and_signs = [];
  const statement_copy = [...statement];
  statement_copy.map((element, index) => {
    if (index === 0 && statement_copy[index] === "-") {
      arr_of_numbers_and_signs.push(element);
    } else if (array_of_numbers.includes(element) || element === ".") {
      arr_of_numbers_and_signs.push(element);
    } else if (element === "l") {
      if (statement_copy[index + 1] === "o") {
        arr_of_numbers_and_signs.push(",", "s");
        statement_copy[index] = "";
        statement_copy[index + 1] = "";
        statement_copy[index + 2] = "";
      } else if (statement_copy[index + 1] === "n") {
        arr_of_numbers_and_signs.push("n");
        statement_copy[index] = "";
        statement_copy[index + 1] = "";
      }
    } else if (mathematical_signs.includes(element)) {
      arr_of_numbers_and_signs.push(",", element);
    } else if (element === "(" || element === ")") {
      arr_of_numbers_and_signs.push(",", element);
    }
  });
  arr_of_numbers_and_signs = arr_of_numbers_and_signs.join("");

  let result = "";
  let stack = [];

  // operator: priority
  const operators = {
    "+": 0,
    "-": 0,
    "*": 1,
    "/": 1,
    "%": 1,
    s: 2,
    n: 2,
    "^": 2,
    "√": 2,
    "!": 3,
  };

  for (let index = 0; index < arr_of_numbers_and_signs.length; ++index) {
    const elem_of_array = arr_of_numbers_and_signs.charAt(index);
    if ([...array_of_numbers, ".", ","].includes(elem_of_array)) {
      result += elem_of_array;
    } else if (
      (elem_of_array === "-" && index === 0) ||
      (elem_of_array === "-" && arr_of_numbers_and_signs[index - 2] === "(")
    ) {
      result += elem_of_array;
    } else if (elem_of_array === "(") {
      stack.push(elem_of_array);
    } else if (elem_of_array === ")") {
      let s = stack.pop();

      while (s && s !== "(") {
        result += s;
        s = stack.pop();
      }
    } else if (Object.keys(operators).includes(elem_of_array)) {
      while (operators[stack.slice(-1)[0]] >= operators[elem_of_array]) {
        result += stack.pop();
      }

      stack.push(elem_of_array);
    }
  }

  let sym = "";
  while ((sym = stack.pop())) {
    result += sym;
  }
  return get_answer(result);
};
equals &&
  equals.addEventListener("click", () => {
    reversePolishNotation();
  });
