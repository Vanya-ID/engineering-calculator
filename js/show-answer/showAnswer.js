import { answer_input } from "../index";

export const showAnswer = (arr_of_numbers_and_signs) => {
  const statement = [...arr_of_numbers_and_signs];

  const answer = Number.parseFloat(
    Number(statement.join("")).toFixed(5)
  ).toString();
  if (answer_input) answer_input.textContent = answer;
  if (answer === "NaN") if (answer_input) answer_input.textContent = "Error";
  return answer;
};
