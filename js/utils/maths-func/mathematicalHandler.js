import { mathematicalCalculations } from "../../calculator/mathematicalCalculations";

export const mathematical_handler = (arr_of_numbers_and_signs, element) => {
  switch (element) {
    case "^": {
      mathematicalCalculations(arr_of_numbers_and_signs, "**");
      break;
    }
    case "%": {
      mathematicalCalculations(arr_of_numbers_and_signs, "/100*");
      break;
    }
    case "√": {
      mathematicalCalculations(arr_of_numbers_and_signs, "**0.5");
      break;
    }
    default: {
      mathematicalCalculations(arr_of_numbers_and_signs, element);
    }
  }
};
