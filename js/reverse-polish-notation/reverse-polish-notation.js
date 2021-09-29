import { ARRAY_OF_NUMBERS, OPERATORS } from "../constants";
import { get_answer } from "../get-answer/get-answer";
import { answer_input, equals } from "../index";
import { firstStringParsing } from "../firstStringParsing/firststringParsing";

export const reversePolishNotation = (statement = answer_input.textContent) => {
  let arr_of_numbers_and_signs = [];
  const statement_copy = [...statement];
  statement_copy.forEach((element, index) => {
    firstStringParsing(
      element,
      index,
      arr_of_numbers_and_signs,
      statement_copy
    );
  });
  arr_of_numbers_and_signs = arr_of_numbers_and_signs.join("");
  let result = "";
  let stack = [];

  for (let index = 0; index < arr_of_numbers_and_signs.length; ++index) {
    const elem_of_array = arr_of_numbers_and_signs.charAt(index);
    if ([...ARRAY_OF_NUMBERS, ".", ","].includes(elem_of_array)) {
      result += elem_of_array;
    }
    if (elem_of_array === "(") {
      stack.push(elem_of_array);
    }
    if (elem_of_array === ")") {
      let s = stack.pop();

      while (s && s !== "(") {
        result += s;
        s = stack.pop();
      }
    }
    if (
      (elem_of_array === "-" && index === 0) ||
      (elem_of_array === "-" && arr_of_numbers_and_signs[index - 2] === "(")
    ) {
      result += elem_of_array;
    } else if (Object.keys(OPERATORS).includes(elem_of_array)) {
      while (OPERATORS[stack.slice(-1)[0]] >= OPERATORS[elem_of_array]) {
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
