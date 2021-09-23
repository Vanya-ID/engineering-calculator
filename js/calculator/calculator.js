export class Command {
  execute() {
    throw new Error("Should implement execute method");
  }
}

export const Calculator = function () {
  let current = 0;
  return {
    execute: function (command) {
      current = command.execute(current);
    },

    getCurrentValue: function () {
      return current;
    },
  };
};
