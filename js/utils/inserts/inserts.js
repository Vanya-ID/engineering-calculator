import { notes } from "../../index";
import { setError } from "../setError/setError";

export const insert = (element) => {
  setError(element);
};

for (const note of notes) {
  note.addEventListener("click", () => switchFunc(note));
}

const switchFunc = (note) => {
  switch (note.id) {
    case "π": {
      insert("3.14159265359");
      break;
    }
    case "e": {
      insert("2.718");
      break;
    }
    default:
      insert(note.id);
  }
};
