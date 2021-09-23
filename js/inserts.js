export const answer_input = document.querySelector(".input");
const notes = document.querySelectorAll(".note");
const constants = document.querySelectorAll(".constant");

export const insert = (element) => {
  if (answer_input.textContent.includes(NaN))
    answer_input.textContent = "Error";
  if (answer_input.textContent.includes("Error")) answer_input.textContent = "";
  answer_input.textContent += element;
};

for (let constant of constants) {
  constant = (name) => {
    if (answer_input.textContent === "0") {
      answer_input.textContent = "";
    }
    switch (name) {
      case "pi": {
        answer_input.textContent += Math.PI.toFixed(8);
        break;
      }
      case "e": {
        answer_input.textContent += Math.E.toFixed(8);
        break;
      }
    }
  };
}

for (const note of notes) {
  note.addEventListener("click", () => {
    switch (note.id) {
      case "π": {
        insert("3.14159265359");
        break;
      }
      case "e": {
        insert("2,718");
        break;
      }
      default:
        insert(note.id);
    }
  });
}
