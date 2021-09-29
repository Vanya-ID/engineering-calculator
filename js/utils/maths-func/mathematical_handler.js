import { mathematical_calculations } from "../../calculator/mathematical_calculations";

export const mathematical_handler = (arr_of_numbers_and_signs, element) => {
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
};
