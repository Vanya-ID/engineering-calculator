import { ARRAY_OF_NUMBERS, MATHEMATICAL_SIGNS } from "../constants";

export const firstStringParsing = (
  element,
  index,
  arr_of_numbers_and_signs,
  statement_copy
) => {
  if (index === 0 && statement_copy[index] === "-") {
    arr_of_numbers_and_signs.push(element);
    return;
  }
  if (ARRAY_OF_NUMBERS.includes(element) || element === ".") {
    arr_of_numbers_and_signs.push(element);
    return;
  }
  if (element === "l") {
    if (statement_copy[index + 1] === "o") {
      arr_of_numbers_and_signs.push(",", "s");
      statement_copy[index] = "";
      statement_copy[index + 1] = "";
      statement_copy[index + 2] = "";
      return;
    }
    if (statement_copy[index + 1] === "n") {
      arr_of_numbers_and_signs.push("n");
      statement_copy[index] = "";
      statement_copy[index + 1] = "";
      return;
    }
  }
  if (MATHEMATICAL_SIGNS.includes(element)) {
    arr_of_numbers_and_signs.push(",", element);
    return;
  }
  if (element === "(" || element === ")") {
    arr_of_numbers_and_signs.push(",", element);
  }
};
