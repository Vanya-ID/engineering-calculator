import { answer_input } from "../../index";

export const setError = (element) => {
  if (answer_input.textContent.includes(NaN))
    answer_input.textContent = "Error";
  if (answer_input.textContent.includes("Error")) answer_input.textContent = "";
  answer_input.textContent += element;
};
